"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import LoginModal from "./loginForm";

const Navbar: React.FC = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="hidden md:flex"
          onClick={() => setShowLogin(true)}
        >
          Log in
        </Button>
        <Button>Get Started</Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="size-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
};

export default Navbar;
