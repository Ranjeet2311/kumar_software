import React from "react";

type SectionHeadingProp = {
  title?: string;
  text?: string;
  custom_class?: string;
  showHeading?: boolean;
  showSubHeading?: boolean;
};

export default function SectionHeading({
  title,
  text,
  custom_class,
  showHeading = true, // Default to true if not provided
  showSubHeading = true, // Default to true if not provided
}: SectionHeadingProp) {
  return (
    <div
      className={`col-12 col-lg-6 mx-auto text-center section-heading ${custom_class}`}
    >
      {showHeading && <h2>{title}</h2>} {/* Conditionally render title */}
      <hr />
      <p>{showSubHeading && text}</p>
    </div>
  );
}
