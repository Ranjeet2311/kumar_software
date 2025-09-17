"use client";

import Feedbacks from "@/components/feedbacks/Feedbacks";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero-banner/Hero";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Offer from "@/components/offer/Offer";
import Plans from "@/components/plans/Plans";
import Contact from "@/components/contact/Contact";
import banner_Image from "../assets/images/hero/app_dev.png";
import { motion } from "framer-motion";
import { ReceiptText, Wallet } from "lucide-react";
import { useTranslation } from "react-i18next";
import Tech from "@/components/our-tech/Tech";

export default function Home() {
  const { t } = useTranslation();

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
                <span className="colored-text">
                  {t("landing_page.hero title")}
                </span>
              </>
            }
            showButton={true}
            buttonOneText={
              <div className="d-flex align-items-center justify-content-center">
                <ReceiptText className="me-2" /> {t("landing_page.Get_a_Quote")}
              </div>
            }
            linkOne="/#contact"
            buttonTwoText={
              <div className="d-flex align-items-center justify-content-center">
                <Wallet className="me-2" /> {t("landing_page.View_Plans")}
              </div>
            }
            linkTwo="/#plans"
            img={banner_Image}
            imgAlt="Hero image"
            localRoute={true}
          >
            <p>{t("landing_page.hero para")}</p>
          </Hero>
        </motion.div>
      </div>
      <div id="services">
        <Offer />
      </div>
      <div id="tech">
        <Tech />
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
            showSubHeading={false}
            showSectionHead={true}
          />
        </motion.div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}
