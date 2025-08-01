import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionHeadingProp = {
  title?: ReactNode | string;
  text?: string;
  customClass?: string;
  showHeading?: boolean;
  showSubHeading?: boolean;
};

export default function SectionHeading({
  title,
  text,
  customClass,
  showHeading = true,
  showSubHeading = true,
}: SectionHeadingProp) {
  return (
    <div
      className={`col-12 mx-auto text-center section-heading ${customClass}`}
    >
      {showHeading && <h2>{title}</h2>}
      <hr />
      <p>{showSubHeading && text}</p>
    </div>
  );
}
