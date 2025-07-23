import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import classes from "./card.module.scss";
import Button from "../button/Button";
import btnClasses from "@/components/Ui/button/button.module.scss";
import { slugify } from "@/utils/Slugify";
import { truncateText } from "@/utils/Truncate";

// type DescriptionList = {
//   para: string;
// };

type CardProps = {
  title?: string;
  description?: string;
  btnText?: string | ReactNode;
  img?: string | StaticImageData;
  showBtn?: boolean;
  children?: ReactNode;
};

export default function Card({
  title,
  description,
  btnText,
  img,
  showBtn,
  children,
}: CardProps) {
  const slugifiedTitle = title ? slugify(title) : "default-slug";

  // console.log(`Card descriptionList ::: `, descriptionList);

  return (
    <div className={`${classes.custom_card} card my-2 h-100`}>
      <div className={img && classes.card_img}>
        {img && <Image className={classes.img} src={img} alt="Card image" />}
      </div>
      <div className={`${classes.card_body}`}>
        <h5 className={`${classes.card_title}`}>{title}</h5>
        <hr className="my-1" />
        <p className={classes.card_description}>
          {truncateText({ text: description || "", maxLength: 94 })}
        </p>
        {children && children}
        {showBtn && (
          <Button
            button={false}
            mode={btnClasses.btn_second}
            customClass="w-100 ms-0 ms-lg-1 d-block text-center justify-content-center"
            link={`/services/${slugifiedTitle}`}
            localRoute={true}
          >
            {btnText}
          </Button>
        )}
      </div>
    </div>
  );
}
