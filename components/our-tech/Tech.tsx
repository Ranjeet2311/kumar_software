import React from "react";
import SectionHeading from "../Ui/section-heading/SectionHeading";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { techStack } from "@/utils/TechList";
import Image, { StaticImageData } from "next/image";
import classes from "./Tech.module.scss";

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
            <div className={`row ${classes.tech_grid}`}>
              {techStack.map(
                ({ name, image }: { name: string; image: StaticImageData }) => (
                  <div
                    key={name}
                    className={`col-4 col-sm-3 col-md-2 ${classes.tech_item}`}
                  >
                    <div className={classes.logo_box}>
                      <Image
                        src={image}
                        alt={name}
                        width={100}
                        height={100}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <p className={`${classes.tech_label} mt-4`}>{name}</p>
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
