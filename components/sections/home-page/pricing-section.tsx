"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for personal projects and small teams",
    features: [
      "Monitor up to 5 services",
      "Basic status updates",
      "Email notifications",
      "24-hour history",
      "Community support",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$19",
    description: "For growing teams and businesses",
    features: [
      "Monitor up to 50 services",
      "Advanced status updates",
      "Email, SMS, and Slack notifications",
      "30-day history",
      "Priority support",
      "Custom integrations",
      "Team collaboration",
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited services",
      "Custom monitoring solutions",
      "Dedicated support",
      "Custom SLAs",
      "Advanced security",
      "Custom integrations",
      "API access",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Simple, transparent pricing
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that best fits your needs. All plans include a
              14-day free trial.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3 lg:gap-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`hover:shadow-2xl transition-all duration-300 ${
                index === 1 ? "border-primary" : ""
              }`}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="text-4xl font-bold">{plan.price}</div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="size-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant={plan.buttonVariant}
                  className="w-full cursor-pointer"
                  onClick={() => {
                    toast.info("Coming soon! We're working on it.");
                  }}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
