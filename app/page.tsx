import { JoinButton } from "@/components/auth/join-button";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import LogoTicker from "@/components/landing/logo-ticker";
import Testimonials from "@/components/landing/testimonials";
import { ModeToggle } from "@/components/mode-toogle";
import { Button } from "@/components/ui/button";
import { main } from "framer-motion/client";
import Image from "next/image";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import CallToAction from "@/components/landing/calltoaction";
import Changelog from "@/components/landing/changelog";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Changelog />
      <CallToAction />
      <Footer />
    </>
  );
}