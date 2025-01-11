"use client";

import Feedbacks from "@/components/feedbacks/Feedbacks";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero-banner/Hero";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Offer from "@/components/offer/Offer";
import Plans from "@/components/plans/Plans";
import Contact from "@/components/contact/Contact";
import banner_Image from "../assets/images/hero/hero_v1.png";
import { motion } from "framer-motion";
import LogInBar from "@/components/login-bar/LogInBar";

export default function Home() {
  console.log("hello 123 - rendered on the client");

  return (
    <main>
      <div id="home" className="top-padding">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Hero
            heading={
              <>
                The <span className="colored-text">software</span> your company
                needs
              </>
            }
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
        </motion.div>
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
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Contact
            showImage={true}
            showForm={true}
            showHeading={true}
            showSubHeading={true}
          />
        </motion.div>
      </div>
      <div id="footer">
        <Footer />
      </div>
      <LogInBar />
    </main>
  );
}
