import Link from "next/link";
import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  ArrowRight,
  Github,
  Slack,
  Cloud,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import StatusDashboard from "@/components/status-dashboard";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header
        links={[
          { label: "Features", href: "#features" },
          { label: "Services", href: "#services" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ]}
        showNavbar
      />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Monitor all your services in one place
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Get real-time status updates for all your critical
                    third-party services. Never be caught off guard by outages
                    again.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="h-12">
                    Start monitoring
                    <ArrowRight className="ml-2 size-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="h-12">
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

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
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
                  Our platform provides comprehensive monitoring tools to keep
                  you updated on all your critical services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="size-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Real-time Monitoring</h3>
                  <p className="text-muted-foreground">
                    Get instant updates on service status changes with our
                    real-time monitoring system.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <AlertTriangle className="size-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Instant Alerts</h3>
                  <p className="text-muted-foreground">
                    Receive notifications via email, SMS, or Slack when any of
                    your critical services go down.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Cloud className="size-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Service Integration</h3>
                  <p className="text-muted-foreground">
                    Easily integrate with popular services like GitHub, Slack,
                    Digital Ocean, and many more.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                      className="size-6 text-primary"
                    >
                      <path d="M12 2v8" />
                      <path d="m4.93 10.93 1.41 1.41" />
                      <path d="M2 18h2" />
                      <path d="M20 18h2" />
                      <path d="m19.07 10.93-1.41 1.41" />
                      <path d="M22 22H2" />
                      <path d="m8 22 4-11 4 11" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Uptime History</h3>
                  <p className="text-muted-foreground">
                    Track historical uptime data and identify patterns to
                    improve your service reliability.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                      className="size-6 text-primary"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m7 17 4-4 4 4 6-6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Performance Metrics</h3>
                  <p className="text-muted-foreground">
                    Monitor response times and performance metrics to ensure
                    optimal service delivery.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
                      className="size-6 text-primary"
                    >
                      <path d="M12 2H2v10h10V2Z" />
                      <path d="M22 12h-10v10h10V12Z" />
                      <path d="M12 12H2v10h10V12Z" />
                      <path d="M22 2h-10v10h10V2Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Custom Dashboards</h3>
                  <p className="text-muted-foreground">
                    Create personalized dashboards to monitor the services that
                    matter most to your team.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

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
                  Our platform integrates with a wide range of popular services
                  to provide comprehensive monitoring.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="h-2 bg-[#4A154B]" />
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <Slack className="size-8 text-[#4A154B]" />
                    <h3 className="text-xl font-bold">Slack</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Monitor Slacks service status to ensure your teams
                    communication is always up and running.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <CheckCircle className="mr-2 size-4 text-green-500" />
                    <span>Currently operational</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-2 bg-[#24292e]" />
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <Github className="size-8 text-[#24292e]" />
                    <h3 className="text-xl font-bold">GitHub</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Stay informed about GitHubs status to ensure your
                    development workflow isnt interrupted.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <CheckCircle className="mr-2 size-4 text-green-500" />
                    <span>Currently operational</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-2 bg-[#0080FF]" />
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <Cloud className="size-8 text-[#0080FF]" />
                    <h3 className="text-xl font-bold">Digital Ocean</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Monitor Digital Oceans infrastructure to ensure your cloud
                    services remain available.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <AlertTriangle className="mr-2 size-4 text-amber-500" />
                    <span>Partial outage</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-2 bg-[#FF9900]" />
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
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
                      className="size-8 text-[#FF9900]"
                    >
                      <path d="M12 2v6.5" />
                      <path d="M18.4 7.5 13 10.7" />
                      <path d="M18.4 16.5 13 13.3" />
                      <path d="M12 22v-6.5" />
                      <path d="m5.6 16.5 5.4-3.2" />
                      <path d="m5.6 7.5 5.4 3.2" />
                    </svg>
                    <h3 className="text-xl font-bold">AWS</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Keep track of AWS service status to ensure your cloud
                    infrastructure remains reliable.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <CheckCircle className="mr-2 size-4 text-green-500" />
                    <span>Currently operational</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-2 bg-[#1DA1F2]" />
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
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
                      className="size-8 text-[#1DA1F2]"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <h3 className="text-xl font-bold">Twitter</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Monitor Twitters platform status to stay informed about any
                    service disruptions.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <XCircle className="mr-2 size-4 text-red-500" />
                    <span>Major outage</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-2 bg-[#7289DA]" />
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
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
                      className="size-8 text-[#7289DA]"
                    >
                      <path d="m21.2 8.4-4.6 4.6a3.4 3.4 0 0 1-4.8 0l-4.6-4.6a3.4 3.4 0 0 0-4.8 0l-1.5 1.5" />
                      <path d="m21.2 15.6-4.6-4.6a3.4 3.4 0 0 0-4.8 0l-4.6 4.6a3.4 3.4 0 0 1-4.8 0L1 14.2" />
                    </svg>
                    <h3 className="text-xl font-bold">Discord</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Track Discords service status to ensure your community
                    communication remains uninterrupted.
                  </p>
                  <div className="mt-4 flex items-center text-sm">
                    <CheckCircle className="mr-2 size-4 text-green-500" />
                    <span>Currently operational</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button size="lg" variant="outline">
                View all supported services
                <ArrowRight className="ml-2 size-5" />
              </Button>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
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
                  Choose the plan thats right for your team. All plans include a
                  14-day free trial.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Starter</h3>
                    <p className="text-muted-foreground">
                      Perfect for small teams just getting started.
                    </p>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">$29</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>Monitor up to 10 services</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>Email notifications</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>Basic reporting</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>1 team member</span>
                    </li>
                  </ul>
                  <div className="mt-auto pt-6">
                    <Link href="/signup" className="w-full">
                      Get started
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col border-primary">
                <div className="h-2 bg-primary" />
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Pro</h3>
                    <p className="text-muted-foreground">
                      For growing teams that need more features.
                    </p>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">$79</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>Monitor up to 50 services</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>Email, SMS & Slack notifications</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>Advanced reporting</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>Up to 5 team members</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>Custom dashboards</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>30-day history</span>
                    </li>
                  </ul>
                  <div className="mt-auto pt-6">
                    <Button size="lg" className="w-full">
                      Get started
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardContent className="flex flex-1 flex-col p-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Enterprise</h3>
                    <p className="text-muted-foreground">
                      For large organizations with advanced needs.
                    </p>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">$199</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>Unlimited services</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>All notification channels</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>Custom reporting</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>Unlimited team members</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>Advanced integrations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>1-year history</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 size-4 text-green-500" />
                      <span>Dedicated support</span>
                    </li>
                  </ul>
                  <div className="mt-auto pt-6">
                    <Button size="lg" variant="outline" className="w-full">
                      Contact sales
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to start monitoring your services?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of teams who trust our platform to keep them
                informed about their critical services.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit" size="lg">
                  Get Started
                </Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="underline underline-offset-2">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="underline underline-offset-2">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="size-8 rounded-full bg-primary flex items-center justify-center">
              <CheckCircle className="size-5 text-primary-foreground" />
            </div>
            <span>StatusMonitor</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
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
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="size-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground"
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
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
