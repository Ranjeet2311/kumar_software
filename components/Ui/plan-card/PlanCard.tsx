import React from "react";
import classes from "./PlanCard.module.scss";
import arrow from "../../../assets/images/check_list.png";
import Image from "next/image";

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
    <div className={`${classes.plan_card} card my-2 h-100`}>
      <div className="card-header text-center">
        <h3 className={classes.title}>{title}</h3>
        <h4 className={classes.price}>{price}</h4>
      </div>
      <div className={classes.card_body}>
        <ul className={classes.benefits_list}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="d-flex justify-content-start align-items-start"
            >
              <Image src={arrow} width={16} alt="arrow" className="mt-2" />
              <li className={classes.benefit_item}>{benefit}</li>
            </div>
          ))}
        </ul>
        <div className="text-center">
          <a href={buttonLink} className={`${classes.btn}`}>
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}
