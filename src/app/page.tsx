"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryFull,
  Facebook,
  HeartPulse,
  Instagram,
  Menu,
  Sparkles,
  Star,
  Twitter,
  Watch,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "Showcase" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Watch className="h-6 w-6 text-accent" />
            <span className="font-bold">NeoPulse</span>
          </Link>
        </div>
        <nav className="hidden md:flex md:flex-1 items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button>
            Buy Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Link href="/" className="flex items-center gap-2">
                      <Watch className="h-6 w-6 text-accent" />
                      <span className="font-bold">NeoPulse</span>
                    </Link>
                </div>
                <nav className="flex flex-col gap-4 p-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                 <div className="mt-auto p-4 border-t">
                    <Button className="w-full">
                      Buy Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Experience the Future of Time with{" "}
                <span className="text-accent">NeoPulse</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A perfect blend of minimalist design and smart technology. Track
                your life, seamlessly.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">
                Buy Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/hero-image.png"
              alt="NeoPulse Smartwatch"
              width={550}
              height={550}
              className="rounded-xl shadow-2xl"
              data-ai-hint="smartwatch product photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <HeartPulse className="h-8 w-8 text-accent" />,
      title: "Advanced Health Tracking",
      description:
        "Monitor your heart rate, sleep patterns, and daily activity with precision sensors.",
    },
    {
      icon: <BatteryFull className="h-8 w-8 text-accent" />,
      title: "All-Week Battery Life",
      description:
        "Go up to 7 days on a single charge, so you can focus more on your life and less on charging.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-accent" />,
      title: "Elegant & Stylish Design",
      description:
        "Crafted with premium materials, NeoPulse complements any style, from the gym to the office.",
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Core Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Everything You Need, Nothing You Don't
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We've packed NeoPulse with features that matter for a modern,
              healthy lifestyle.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex flex-col items-center text-center gap-4">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                {feature.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseSection() {
  const showcaseImages = [
    { src: "/images/action-shot.png", alt: "NeoPulse on a wrist during a workout", hint: "smartwatch lifestyle"},
    { src: "/images/hero-image.png", alt: "Close-up of the NeoPulse watch face", hint: "smartwatch on wrist" },
    { src: "/images/hero-image.png", alt: "NeoPulse showing a notification", hint: "smartwatch interface" },
  ];

  return (
    <section id="showcase" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              See NeoPulse in Action
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore the stunning design and vibrant display of the NeoPulse
              smartwatch.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {showcaseImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1200}
                        height={600}
                        className="aspect-video w-full object-cover"
                        data-ai-hint={image.hint}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Jessica M.",
      role: "Fitness Enthusiast",
      avatar: "https://placehold.co/100x100.png",
      aiHint: "user portrait",
      rating: 5,
      review: "The NeoPulse is a game-changer! It's so sleek and the battery life is incredible. I never take it off.",
    },
    {
      name: "David L.",
      role: "Tech Blogger",
      avatar: "https://placehold.co/100x100.png",
      aiHint: "user portrait",
      rating: 5,
      review: "I've reviewed dozens of smartwatches, and NeoPulse stands out for its simplicity and design. It does exactly what you need, and does it perfectly.",
    },
    {
      name: "Sarah K.",
      role: "Busy Professional",
      avatar: "https://placehold.co/100x100.png",
      aiHint: "user portrait",
      rating: 4,
      review: "Finally, a smartwatch that looks like a real watch. The notification system is subtle and helps me stay focused during meetings. Highly recommend!",
    },
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Loved by Our Community
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our users have to
              say about NeoPulse.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardContent className="flex-1 p-6">
                <div className="flex items-center gap-4 mb-4">
                   <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">"{testimonial.review}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            One watch, one price. All features included.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <Card className="transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <CardHeader>
              <CardTitle>NeoPulse Watch</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="text-4xl font-bold">$249</div>
              <ul className="grid gap-2 text-left text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-accent" />
                  Includes all core features
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-accent" />
                  Free shipping worldwide
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-accent" />2-year warranty
                </li>
              </ul>
              <Button size="lg" className="w-full">
                Purchase Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Get in Touch
            </h2>
            <p className="max-w-md text-muted-foreground">
              Have questions about NeoPulse? We'd love to hear from you. Fill
              out the form and we'll get back to you soon.
            </p>
          </div>
          <div className="w-full max-w-md">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full bg-card p-8 rounded-lg">
                <h3 className="text-2xl font-bold">Thank You!</h3>
                <p className="text-muted-foreground">Your message has been sent. We'll be in touch shortly.</p>
              </div>
            ) : (
            <Card>
              <CardContent className="p-6">
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your question or feedback..." />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </CardContent>
            </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full py-6 md:py-8 border-t">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2">
          <Watch className="h-5 w-5 text-accent" />
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NeoPulse. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function NeoPulseLandingPage() {
  return (
    <div className="flex min-h-dvh w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
