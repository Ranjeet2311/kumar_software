import React from "react";
import Card from "../Ui/card/Card";
import SectionHeading from "../Ui/section-heading/SectionHeading";
import { servicesList } from "@/utils/List";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import classes from "./Offer.module.scss";
import { useTranslation } from "react-i18next";
import { slugify } from "@/utils/Slugify";

export default function Offer() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <section className="row section-space">
        <SectionHeading
          title={
            <>
              <span className="colored-text">
                {t("landing_page.WHAT WE OFFER")}
              </span>
            </>
          }
          text={t(
            "landing_page.Discover how our expertise delivers tailored software solutions"
          )}
        />
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* const translatedTitle = t(`services.${slugify(title)}.title`); */}
          <div className="col-12">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {servicesList.map(
                ({
                  title,
                  description,
                  image,
                }: {
                  title: string;
                  description: string;
                  image: string;
                }) => (
                  <div
                    key={`services.${title}`}
                    className="col-12 col-md-6 col-lg-4"
                  >
                    <Card
                      customImageClass={classes.offer_card_img}
                      img={image}
                      title={t(`${slugify(title)}.title`)}
                      description={t(`${slugify(title)}.description`)}
                      url={`/services/${slugify(title)}`}
                      btnText={
                        <span className="d-flex align-items-center justify-content-center mb-0">
                          {t("Read more")}{" "}
                          <ArrowRight
                            size={25}
                            className={`ms-2 ${classes.arrow_icon}`}
                          />
                        </span>
                      }
                      showBtn={true}
                      btnCss={classes.btn}
                    />
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
