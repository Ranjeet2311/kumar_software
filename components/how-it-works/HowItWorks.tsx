import React from "react";
import SectionHeading from "../Ui/section-heading/SectionHeading";
import { motion, useScroll, useTransform } from "framer-motion";
import lightIcon from "@/assets/work/lightbulb.svg";
import designIcon from "@/assets/work/pencil-ruler.svg";
import PlaneIcon from "@/assets/work/rocket.svg";
import classes from "./How.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const process = [
  {
    title: "Meeting",
    subTitle: "Discuss your projects",
    description:
      "We begin by understanding your goals, audience, and technical needs",

    icon: lightIcon,
    number: "1",
  },
  {
    title: "Strategize",
    subTitle: "Crafting strategies to meet your goals",
    description:
      "Our experts craft a roadmap and choose the right tools and frameworks",
    icon: designIcon,
    number: "2",
  },
  {
    title: "Start Development",
    subTitle: "Putting into action with a clear plan",
    description:
      "Agile implementation, with clear timelines and continuous collaboration",
    icon: PlaneIcon,
    number: "3",
  },
];

export default function HowItWorks() {
  const { scrollYProgress } = useScroll();
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className={`row section-space ${classes.how_it_works}`}>
        <SectionHeading
          title={
            <>
              <span className="colored-text">
                {t("landing_page.work.HOW WE WORK")}{" "}
              </span>
            </>
          }
          text={t("landing_page.work.Collaborate | Strategize | Deliver")}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className={`${classes.process_container_wrapper}`}>
          <div className={`row gy-4 gx-3 ${classes.process_container}  `}>
            {process.map((item) => (
              <div
                className={`col-12 col-lg-4 ${classes.process}`}
                key={item.title}
              >
                <h2 className={classes.title}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="me-2 d-inline"
                  />
                  {t(`landing_page.work.${item.title}`)}
                </h2>
                <hr className="my-1" />
                {/* <h4 className={classes.subTitle}>
                  {t(`landing_page.work.${item.subTitle}`)}
                </h4> */}
                <p className="mt-4">
                  {t(`landing_page.work.${item.description}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
