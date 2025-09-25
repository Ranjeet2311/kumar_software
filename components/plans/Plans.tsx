import React from "react";
import PlanCard from "../Ui/plan-card/PlanCard";
import SectionHeading from "../Ui/section-heading/SectionHeading";
import { motion, useScroll } from "framer-motion";
import { useTranslation } from "react-i18next";

const plans = [
  { key: "basic", buttonLink: "/#contact" },
  { key: "custom", buttonLink: "/#contact" },
];
export default function Plans() {
  const { scrollYProgress } = useScroll();
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="row section-space">
        <SectionHeading
          title={
            <>
              <span className="colored-text">
                {" "}
                {t("landing_page.plans.OUR PLANS")}
              </span>
            </>
          }
          text={t("Flexible Plans for Every Stage of Your Business")}
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
            <div key={index} className="col-12">
              <PlanCard planKey={plan.key} buttonLink={plan.buttonLink} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
