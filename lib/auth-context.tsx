"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { makeUrl } from "./utils";

type User = {
  id: string;
  email: string;
  name: string;
};

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<LoginResponse>;
  signup: (
    email: string,
    password: string,
    name: string,
  ) => Promise<SignUpResponse>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (
    email: string,
    password: string,
  ): Promise<LoginResponse> => {
    try {
      const url = makeUrl("login").toString();
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, action: "login" }),
      });

      if (!response.ok) {
        const error = await response.json();
        if (error.ok === false) {
          return error;
        }
        throw new Error(error.error);
      }

      const data = (await response.json()) as LoginResponse;
      localStorage.setItem("authToken", data.payload?.token || "");
      setIsAuthenticated(true);
      setUser(data.payload?.user || null);
      return data;
    } catch (error) {
      console.error(error);
      return {
        ok: false,
        message: "Something went wrong",
        error: "Login failed",
      };
    }
  };

  const signup = async (
    email: string,
    password: string,
    name: string,
  ): Promise<SignUpResponse> => {
    try {
      const url = makeUrl("signup").toString();
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name, action: "signup" }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.log(error);
        if (error.ok === false) {
          return error;
        }
        throw new Error(error.error);
      }

      const data = (await response.json()) as SignUpResponse;
      return data;
    } catch (error) {
      console.error(error);
      return {
        ok: false,
        message: "Something went wrong",
        error: "Signup failed",
      };
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("authToken");
      setIsAuthenticated(false);
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

type SignUpResponse = {
  ok: boolean;
  message: string;
  error?: string | string[];
};

type LoginResponse = {
  ok: boolean;
  message: string;
  payload?: {
    token: string;
    user: User;
  };
  error?: string | string[];
};

export type { User, SignUpResponse, LoginResponse };
