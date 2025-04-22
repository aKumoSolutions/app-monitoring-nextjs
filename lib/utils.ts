import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getBaseUrl() {
  return process.env.BACKEND_URL ?? "http://localhost:8000";
}

export const endpoints = {
  login: "/api/auth",
  signup: "/api/users",
  logout: "/api/logout",
};

export function makeUrl(path: keyof typeof endpoints) {
  return new URL(endpoints[path], getBaseUrl());
}
