import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import type { SignUpResponse, LoginResponse } from "@/lib/auth-context";
import { randomUUID } from "node:crypto";

// * Mock user database
const database = new Map<
  string,
  { email: string; password: string; name: string }
>();

// * JWT secret - in production, this should be in environment variables
// ! TODO: move to environment variables
const JWT_SECRET = "your-secret-key";
// * Mock endpoint for authentication
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { email, password, name, action } = await request.json();

    if (action === "login") {
      const user = database.get(email);

      if (!user || user.password !== password) {
        return NextResponse.json<LoginResponse>(
          {
            ok: false,
            message: "Please check your credentials and try again.",
            error: "Invalid email or password. ",
          },
          { status: 401 },
        );
      }

      const token = jwt.sign(
        { email: user.email, name: user.name },
        JWT_SECRET,
        { expiresIn: "1h" },
      );

      return NextResponse.json<LoginResponse>({
        ok: true,
        message: "Successfully logged in. Welcome back!",
        payload: {
          token,
          user: {
            id: randomUUID(),
            email: user.email,
            name: user.name,
          },
        },
      });
    }

    if (action === "signup") {
      if (database.has(email)) {
        return NextResponse.json<SignUpResponse>(
          {
            ok: false,
            message: "User already exists",
            error: "User already exists",
          },
          { status: 400 },
        );
      }

      const newUser = {
        email,
        password,
        name,
      };

      database.set(email, newUser);

      return NextResponse.json<SignUpResponse>({
        ok: true,
        message: "User created successfully",
      });
    }

    return NextResponse.json<SignUpResponse>({
      ok: false,
      message: "Something went wrong",
      error: "Invalid action",
    });
  } catch (error) {
    console.error("Auth error:", error);
    return NextResponse.json<SignUpResponse>({
      ok: false,
      message: "Something went wrong",
      error: "Internal server error",
    });
  }
}
