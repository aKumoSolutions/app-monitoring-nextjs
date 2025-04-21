"use client";

import { CheckCircle, AlertTriangle, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: CheckCircle,
    title: "Real-time Monitoring",
    description:
      "Get instant updates on service status changes with our real-time monitoring system.",
  },
  {
    icon: AlertTriangle,
    title: "Instant Alerts",
    description:
      "Receive notifications via email, SMS, or Slack when any of your critical services go down.",
  },
  {
    icon: Cloud,
    title: "Service Integration",
    description:
      "Easily integrate with popular services like GitHub, Slack, Digital Ocean, and many more.",
  },
  {
    icon: CheckCircle,
    title: "Uptime History",
    description:
      "Track historical uptime data and identify patterns to improve your service reliability.",
  },
  {
    icon: CheckCircle,
    title: "Performance Metrics",
    description:
      "Monitor response times and performance metrics to ensure optimal service delivery.",
  },
  {
    icon: CheckCircle,
    title: "Custom Dashboards",
    description:
      "Create personalized dashboards to monitor the services that matter most to your team.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything you need to stay informed
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides comprehensive monitoring tools to keep you
              updated on all your critical services.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
