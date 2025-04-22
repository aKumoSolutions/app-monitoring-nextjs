"use client";

import { useState, useEffect } from "react";
import { CheckCircle, AlertTriangle, XCircle, Clock } from "lucide-react";

export default function StatusDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      name: "GitHub",
      status: "operational",
      uptime: "99.98%",
      lastIncident: "3 days ago",
    },
    {
      name: "Slack",
      status: "operational",
      uptime: "99.95%",
      lastIncident: "1 week ago",
    },
    {
      name: "Digital Ocean",
      status: "degraded",
      uptime: "99.87%",
      lastIncident: "2 hours ago",
    },
    {
      name: "AWS",
      status: "operational",
      uptime: "99.99%",
      lastIncident: "2 weeks ago",
    },
    {
      name: "Twitter",
      status: "outage",
      uptime: "98.76%",
      lastIncident: "Now",
    },
    {
      name: "Discord",
      status: "operational",
      uptime: "99.92%",
      lastIncident: "5 days ago",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="size-5 text-green-500" />;
      case "degraded":
        return <AlertTriangle className="size-5 text-amber-500" />;
      case "outage":
        return <XCircle className="size-5 text-red-500" />;
      default:
        return <Clock className="size-5 text-muted-foreground" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return "Operational";
      case "degraded":
        return "Degraded Performance";
      case "outage":
        return "Major Outage";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full">
      <div className="flex flex-col space-y-1.5 p-4 pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold leading-none tracking-tight">
            Service Status
          </h3>
          <div className="text-sm text-muted-foreground">
            {hasMounted ? currentTime.toLocaleTimeString() : "--:--:--"}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Monitor the status of your critical services
        </p>
      </div>
      <div className="p-0">
        <div className="grid grid-cols-1 divide-y">
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-between p-3">
              <div className="flex items-center gap-2">
                {getStatusIcon(service.status)}
                <span className="font-medium">{service.name}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground hidden sm:inline">
                  {service.uptime} uptime
                </span>
                <span
                  className={`text-sm ${
                    service.status === "operational"
                      ? "text-green-500"
                      : service.status === "degraded"
                        ? "text-amber-500"
                        : "text-red-500"
                  }`}
                >
                  {getStatusText(service.status)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between p-4 pt-2">
        <p className="text-xs text-muted-foreground">Last updated: Just now</p>
        <button className="text-xs text-primary hover:underline">
          View detailed status
        </button>
      </div>
    </div>
  );
}
