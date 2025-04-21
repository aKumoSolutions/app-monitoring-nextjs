"use client";

import {
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Github,
  Slack,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
const services = [
  {
    name: "Slack",
    icon: Slack,
    color: "#4A154B",
    description:
      "Monitor Slacks service status to ensure your teams communication is always up and running.",
    status: "operational",
    statusIcon: CheckCircle,
    statusColor: "text-green-500",
  },
  {
    name: "GitHub",
    icon: Github,
    color: "#24292e",
    description:
      "Stay informed about GitHubs status to ensure your development workflow isnt interrupted.",
    status: "operational",
    statusIcon: CheckCircle,
    statusColor: "text-green-500",
  },
  {
    name: "Digital Ocean",
    icon: Cloud,
    color: "#0080FF",
    description:
      "Monitor Digital Oceans infrastructure to ensure your cloud services remain available.",
    status: "partial",
    statusIcon: AlertTriangle,
    statusColor: "text-amber-500",
  },
  {
    name: "AWS",
    icon: Cloud,
    color: "#FF9900",
    description:
      "Keep track of AWS service status to ensure your cloud infrastructure remains reliable.",
    status: "operational",
    statusIcon: CheckCircle,
    statusColor: "text-green-500",
  },
  {
    name: "Twitter",
    icon: Cloud,
    color: "#1DA1F2",
    description:
      "Monitor Twitters platform status to stay informed about any service disruptions.",
    status: "outage",
    statusIcon: XCircle,
    statusColor: "text-red-500",
  },
  {
    name: "Discord",
    icon: Cloud,
    color: "#7289DA",
    description:
      "Track Discords service status to ensure your community communication remains uninterrupted.",
    status: "operational",
    statusIcon: CheckCircle,
    statusColor: "text-green-500",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Supported Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Monitor all your critical services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform integrates with a wide range of popular services to
              provide comprehensive monitoring.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-2" style={{ backgroundColor: service.color }} />
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-4">
                  <service.icon
                    className="size-8"
                    style={{ color: service.color }}
                  />
                  <h3 className="text-xl font-bold">{service.name}</h3>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
                <div className="mt-4 flex items-center text-sm">
                  <service.statusIcon
                    className={`mr-2 size-4 ${service.statusColor}`}
                  />
                  <span>
                    {service.status === "operational" &&
                      "Currently operational"}
                    {service.status === "partial" && "Partial outage"}
                    {service.status === "outage" && "Major outage"}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            size="lg"
            variant="outline"
            className="cursor-pointer"
            onClick={() => {
              toast.info("Coming soon! We're working on it.");
            }}
          >
            View all supported services
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
