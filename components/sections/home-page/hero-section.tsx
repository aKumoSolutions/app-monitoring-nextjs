"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import StatusDashboard from "@/components/status-dashboard";
import { toast } from "sonner";
export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Monitor all your services in one place
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Get real-time status updates for all your critical third-party
                services. Never be caught off guard by outages again.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="h-12 cursor-pointer"
                onClick={() => {
                  toast.info("Coming soon! We're working on it.");
                }}
              >
                Start monitoring
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 cursor-pointer"
                onClick={() => {
                  toast.info("Coming soon! We're working on it.");
                }}
              >
                View demo
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <CheckCircle className="size-4 text-green-500" />
                <span>Real-time updates</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="size-4 text-green-500" />
                <span>Instant notifications</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="size-4 text-green-500" />
                <span>Historical data</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] overflow-hidden rounded-xl border bg-background p-2 shadow-xl">
              <StatusDashboard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
