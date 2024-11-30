import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Testimonials from "@/components/landing/testimonials";
import CallToAction from "@/components/landing/calltoaction";
import Changelog from "@/components/landing/changelog";
import WhyAscord from "@/components/landing/why-ascord";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyAscord />
      <Features />
      <Testimonials />
      <Changelog />
      <CallToAction />
      <Footer />
    </>
  );
}