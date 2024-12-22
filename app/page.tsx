"use client";

import Feedbacks from "@/components/feedbacks/Feedbacks";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero-banner/Hero";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Offer from "@/components/offer/Offer";
import Plans from "@/components/plans/Plans";
// import StartProject from "@/components/start-project/StartProject";
import Contact from "@/components/contact/Contact";
import banner_Image from "../assets/images/hero/user.png";

export default function Home() {
  console.log("hello 123 - rendered on the client");

  return (
    <main>
      <div id="home" className="top-padding">
        <Hero
          heading="Tell a better brand story"
          paragraph="At Kumar Softwares, we specialize in crafting dynamic websites and
            powerful web applications to help your brand stand out. With a focus
            on modern design, seamless functionality, and exceptional
            performance, we create solutions that resonate with your audience.
            Build your digital presence today with websites tailored to your
            business needs."
          showButton={true}
          ButtonText="View Our Work"
          showLink={true}
          linkUrl="/#contact"
          linkText=" Get in touch"
          img={banner_Image}
          imgAlt="Hero image"
          localRoute={true}
        />
      </div>
      <div id="services">
        <Offer />
      </div>
      <div id="process">
        <HowItWorks />
      </div>
      <div id="plans">
        <Plans />
      </div>
      <div id="feedback">
        <Feedbacks />
      </div>
      <div id="contact">
        <Contact
          showImage={true}
          showForm={true}
          showHeading={true}
          showSubHeading={true}
        />
      </div>
      <Footer />
    </main>
  );
}
