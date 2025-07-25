import React from "react";
import classes from "./PlanCard.module.scss";
import arrow from "../../../assets/images/check_list.png";
import Image from "next/image";
import Button from "../button/Button";
import btnClasses from "@/components/Ui/button/button.module.scss";
import { Flame } from "lucide-react";

type PlanCardProps = {
  title: string;
  price: string;
  benefits: string[];
  buttonText: string;
  buttonLink: string;
};

export default function PlanCard({
  title,
  price,
  benefits,
  buttonText,
  buttonLink,
}: PlanCardProps) {
  return (
    <div
      className={`${classes.plan_card} 
        card my-2 h-100 position-relative`}
    >
      <div className={`${classes.card_header} text-center"`}>
        <h3 className={classes.title}>{title}</h3>
        <hr className="my-1" />
        <h4 className={classes.price}>{price}</h4>
      </div>
      <div className={classes.card_body}>
        <ul className={classes.benefits_list}>
          {benefits.map((benefit, index) => (
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
              <li className={classes.benefit_item}>{benefit}</li>
            </div>
          ))}
        </ul>
        <Button
          button={false}
          mode={btnClasses.btn_main}
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
