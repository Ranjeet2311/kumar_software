"use client";

import Feedbacks from "@/components/feedbacks/Feedbacks";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero-banner/Hero";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Offer from "@/components/offer/Offer";
import Plans from "@/components/plans/Plans";
// import StartProject from "@/components/start-project/StartProject";
import Contact from "@/components/contact/Contact";

export default function Home() {
  console.log("hello 123 - rendered on the client");

  return (
    <main>
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Offer />
      </div>
      <div id="prices">
        <HowItWorks />
      </div>
      <div id="plans">
        <Plans />
      </div>
      <div id="feedback">
        <Feedbacks />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
