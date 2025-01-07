import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionHeadingProp = {
  title?: ReactNode | string;
  text?: string;
  custom_class?: string;
  showHeading?: boolean;
  showSubHeading?: boolean;
};

export default function SectionHeading({
  title,
  text,
  custom_class,
  showHeading = true,
  showSubHeading = true,
}: SectionHeadingProp) {
  return (
    <div
      className={`col-12 mx-auto text-center section-heading ${custom_class}`}
    >
      {showHeading && <h2>{title}</h2>}
      <hr />
      <p>{showSubHeading && text}</p>
    </div>
  );
}
