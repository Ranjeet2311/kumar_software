import React from "react";
import classes from "./PlanCard.module.scss";
import arrow from "../../../assets/images/check_list.png";
import Image from "next/image";
import star from "../../../assets/images/stars.png";
import diamond from "../../../assets/images/diamond.png";
import Button from "../button/Button";
import btnClasses from "@/components/Ui/button/button.module.scss";

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
      className={`${classes.plan_card} ${
        title === "Gold Plan" ? "gold-card" : null
      } card my-2 h-100 position-relative`}
    >
      <div className={`${classes.card_header} text-center"`}>
        {title === "Gold Plan" ? (
          <Image
            src={star}
            style={{
              width: "100%",
              height: "55px",
              objectFit: "contain",
              position: "absolute",
              top: "-6px",
              transform: "translate(-5%, -50%)",
            }}
            className="star"
            alt="arrow"
          />
        ) : title === "Diamond Plan" ? (
          <Image
            src={diamond}
            style={{
              width: "100%",
              height: "55px",
              objectFit: "contain",
              position: "absolute",
              top: "-2px",
              transform: "translate(-5%, -50%) rotate(180deg",
            }}
            className="star"
            alt="arrow"
          />
        ) : null}
        <h3
          className={`${
            title === "Gold Plan"
              ? `${classes.gold_card_title} ${classes.title}`
              : classes.title
          }`}
        >
          {title}
        </h3>
        <hr />
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
                className="mt-2 tick"
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
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
