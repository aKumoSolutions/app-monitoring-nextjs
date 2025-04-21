"use client";

import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="hidden md:flex cursor-pointer hover:bg-gray-100"
          onClick={() => router.push("/login")}
        >
          Log in
        </Button>
        <Button
          className="cursor-pointer hover:opacity-80"
          onClick={() => {
            router.push("/signup");
          }}
        >
          Get Started
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </>
  );
};

export default Navbar;
