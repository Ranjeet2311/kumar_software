import React from "react";
import SectionHeading from "../Ui/section-heading/SectionHeading";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { techStack } from "@/utils/TechList";
import Image, { StaticImageData } from "next/image";

export default function Tech() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <section className="row section-space">
        <SectionHeading
          title={
            <>
              <span className="colored-text">
                {t("landing_page.tech_offer")}
              </span>
            </>
          }
          text={t("landing_page.tech_desc")}
        />
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* const translatedTitle = t(`services.${slugify(title)}.title`); */}
          <div className="col-12">
            <div className="row ">
              {techStack.map(
                ({ name, image }: { name: string; image: StaticImageData }) => (
                  <div
                    key={name}
                    className="col-4 col-sm-3 col-md-2 d-flex flex-column align-items-center justify-content-center my-3"
                  >
                    <Image
                      style={{
                        objectFit: "contain",
                        width: "100px",
                        height: "100px",
                      }}
                      src={image}
                      alt={name}
                      className={`${name}`}
                    />
                    <p className="mt-4">{name} </p>
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
