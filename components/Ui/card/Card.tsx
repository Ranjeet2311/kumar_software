import React from "react";
import Image, { StaticImageData } from "next/image";
import classes from "./card.module.scss";

type CardProps = {
  title?: string;
  description?: string;
  btnText?: string;
  img?: string | StaticImageData;
  showBtn?: boolean;
};

export default function Card({
  title,
  description,
  btnText,
  img,
  showBtn,
}: CardProps) {
  return (
    <div className={`${classes.custom_card} card my-2 h-100`}>
      <div className={classes.card_img}>
        {img ? (
          <Image className={classes.img} src={img} alt="Card image" />
        ) : (
          <p>No image available</p>
        )}
      </div>
      <div className={`${classes.card_body} card-body`}>
        <h5 className={`${classes.card_title} card-title my-2`}>{title}</h5>
        <hr />
        <p className="card-text">{description}</p>
        {showBtn && (
          <a href="#" className={`${classes.btn} btn w-100`}>
            {btnText}
          </a>
        )}
      </div>
    </div>
  );
}
