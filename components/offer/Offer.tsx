import React from "react";
import Card from "../Ui/card/Card";
import SectionHeading from "../Ui/section-heading/SectionHeading";
import { servicesList } from "@/utils/List";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Offer() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="container">
      <section className="row section-space">
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 1.2]),
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          // viewport={{ once: true }}
        >
          <SectionHeading
            title="What we Offer?"
            text="Discover how our expertise delivers tailored software solutions"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          // viewport={{ once: true }}
        >
          <div className="col-12">
            <div className="row row row-cols-1 row-cols-md-2 g-4">
              {servicesList.map(({ title, description, image }) => (
                <div key={title} className="col-12 col-md-6 col-lg-4">
                  <Card
                    img={image}
                    title={title}
                    description={description.paraOne}
                    btnText="Read more"
                    showBtn={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
