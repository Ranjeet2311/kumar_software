import React from "react";
import classes from "./PlanCard.module.scss";
import arrow from "../../../assets/images/check_list.png";
import Image from "next/image";
import Button from "../button/Button";
import btnClasses from "@/components/Ui/button/button.module.scss";
import { Flame } from "lucide-react";
import { useTranslation } from "react-i18next";

type PlanCardProps = {
  planKey: string;
  buttonLink: string;
};
export default function PlanCard({ planKey, buttonLink }: PlanCardProps) {
  const { t } = useTranslation();

  const title = t(`plans.${planKey}.title`);
  const price = t(`plans.${planKey}.price`, { defaultValue: "" });
  const subtitle = t(`plans.${planKey}.subtitle`);
  const features = t(`plans.${planKey}.features`, {
    returnObjects: true,
  });
  const featureList = Array.isArray(features) ? features : [];

  const ribbon = t(`plans.${planKey}.ribbon`, { defaultValue: "" });
  const buttonText = t(`plans.${planKey}.button`, {
    defaultValue: t("plan_cta"),
  });

  return (
    <div
      className={`${classes.plan_card} ${
        planKey === "custom" ? classes.business : ""
      } card my-2 h-100 position-relative`}
    >
      {ribbon && <div className={classes.ribbon}>{ribbon}</div>}

      <div className={`${classes.card_header} text-center`}>
        <h3 className={classes.title}>{title}</h3>
        {price && <h4 className={classes.price}>{price}</h4>}
        <hr className="my-1" />
        <p className={classes.subtitle}>{subtitle}</p>
      </div>

      <div className={classes.card_body}>
        <ul className={classes.benefits_list}>
          {featureList.map((feature, index) => (
            <div
              key={index}
              className="d-flex justify-content-start align-items-start"
            >
              <Image
                src={arrow}
                width={16}
                alt="arrow"
                style={{ backgroundColor: "#159957", borderRadius: "50%" }}
                className="mt-2 me-2"
              />
              <li className={classes.benefit_item}>{feature}</li>
            </div>
          ))}
        </ul>

        <Button
          button={false}
          mode={`${btnClasses.btn_main}`}
          link={buttonLink}
          localRoute={true}
          customClass="w-100"
        >
          <span className="d-flex align-items-center justify-content-center mb-0">
            <Flame size={22} className="me-2" /> {buttonText}
          </span>
        </Button>
      </div>
    </div>
  );
}
