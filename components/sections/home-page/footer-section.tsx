"use client";

import { CheckCircle, Github } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function FooterSection() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="size-8 rounded-full bg-primary flex items-center justify-center">
            <CheckCircle className="size-5 text-primary-foreground" />
          </div>
          <span>StatusMonitor</span>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Button
            variant="link"
            className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
            onClick={() => {
              toast.info("Coming soon! We're working on it.");
            }}
          >
            Terms
          </Button>
          <Button
            variant="link"
            className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
            onClick={() => {
              toast.info("Coming soon! We're working on it.");
            }}
          >
            Privacy
          </Button>
          <Button
            variant="link"
            className="text-sm font-medium hover:underline underline-offset-4 cursor-pointer"
            onClick={() => {
              toast.info("Coming soon! We're working on it.");
            }}
          >
            Contact
          </Button>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="link"
            className="text-muted-foreground hover:text-foreground cursor-pointer"
            onClick={() => {
              toast.info(
                "This is a link to the Twitter page, but it's not working yet."
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <span className="sr-only">Twitter</span>
          </Button>
          <a
            href="https://github.com/aKumoSolutions/app-monitoring-nextjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="size-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <Button
            variant="link"
            className="text-muted-foreground hover:text-foreground cursor-pointer"
            onClick={() => {
              toast.info(
                "This is a link to the Instagram page, but it's not working yet."
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="sr-only">Instagram</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
