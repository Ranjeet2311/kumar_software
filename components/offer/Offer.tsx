import React from "react";
import Card from "../Ui/card/Card";
import SectionHeading from "../Ui/section-heading/SectionHeading";
import { servicesList } from "@/utils/List";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Offer() {
  return (
    <div className="container">
      <section className="row section-space">
        <SectionHeading
          title={
            <>
              What we <span className="colored-text">offer</span>
            </>
          }
          text="Discover how our expertise delivers tailored software solutions"
        />
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="col-12">
            <div className="row row row-cols-1 row-cols-md-2 g-4">
              {servicesList.map(({ title, description, image }) => (
                <div key={title} className="col-12 col-md-6 col-lg-4">
                  <Card
                    img={image}
                    title={title}
                    description={description[0].para}
                    btnText={
                      <span className="d-flex align-items-center justify-content-center mb-0">
                        Read more <ArrowRight size={18} className="ms-2" />{" "}
                      </span>
                    }
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
