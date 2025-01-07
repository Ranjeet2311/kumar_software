import React from "react";
import PlanCard from "../Ui/plan-card/PlanCard";
import SectionHeading from "../Ui/section-heading/SectionHeading";
import { motion, useScroll, useTransform } from "framer-motion";

const plans = [
  {
    title: "Silver Plan",
    price: "Small Businesses Starts @ $399.99",
    benefits: [
      "Basic website setup: ",
      "Responsive design",
      "Up to 5 Pages",
      "Basic SEO Optimization",
      "1-Month Free Support",
    ],
    additionalText:
      "This plan is perfect for establishing an online presence with a professional and functional website.",
    buttonText: "Choose Plan",
    buttonLink: "/#contact",
  },
  {
    title: "Gold Plan",
    price: "For Businesses, starts @ $799.99",
    benefits: [
      "Custom website design",
      "Fully Responsive Design",
      "Up to 10 Pages and more",
      "Enhanced SEO Optimization",
      "Content Management System (CMS) Integration",
      "E-commerce Functionality",
      "Backend development",
      "Additional features integration",
      "Official email eg: name@yourwebsite.si",
      "3-Month Free Support",
    ],
    additionalText:
      "This plan is suitable for businesses seeking to expand their online capabilities and engage a broader audience.",
    buttonText: "Get Started",
    buttonLink: "/#contact",
  },
  {
    title: "Online Store",
    price: "For online stores, starts @ $999.99",
    benefits: [
      "Custom website design",
      "Fully Responsive Design",
      "Unlimited products Pages and more",
      "Enhanced SEO Optimization",
      "Content Management System (CMS) Integration",
      "E-commerce Functionality",
      "Backend development",
      "Additional features integration",
      "Official email eg: name@yourwebsite.si",
      "3-Month Free Support",
    ],
    additionalText:
      "This plan is suitable for businesses seeking to expand their online capabilities and engage a broader audience.",
    buttonText: "Get Started",
    buttonLink: "/#contact",
  },
  {
    title: "Diamond Plan",
    price: "Solutions for Enterprises, contact us for a quote!",
    benefits: [
      "Tailored web apps",
      "Comprehensive Responsive Design",
      "Unlimited Pages",
      "Advanced SEO and Digital Marketing Integration",
      "API and Third-Party Integrations",
      "Advanced backend solutions",
      "Enterprise-level features",
      "Ongoing Support and Maintenance",
    ],
    additionalText:
      "This plan is ideal for enterprises requiring a robust, scalable, and fully customized online platform to support complex operations and high traffic volumes.",
    buttonText: "Get Started",
    buttonLink: "/#contact",
  },
];

export default function Plans() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="container">
      <div className="row section-space">
        <SectionHeading
          title={
            <>
              Our <span className="colored-text">plans</span>
            </>
          }
          text="It scales with your product"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="row row row-cols-1 row-cols-md-2 g-4">
          {plans.map((plan, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <PlanCard {...plan} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
