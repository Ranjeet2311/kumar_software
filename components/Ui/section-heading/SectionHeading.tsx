import React from "react";

type SectionHeadingProp = {
  title: string;
  text: string;
};

export default function SectionHeading({ title, text }: SectionHeadingProp) {
  return (
    <div className="col-12 col-lg-6 mx-auto text-center section-heading">
      <h2>{title}</h2>
      <hr />
      <p> {text} </p>
    </div>
  );
}
