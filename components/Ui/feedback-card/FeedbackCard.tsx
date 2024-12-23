import React from "react";
import "./feedbackCard.scss";
import Image, { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type FeedbackCardProps = {
  name: string;
  feedback: string;
  imageUrl: string | StaticImageData;
  designation?: string;
};

export default function FeedbackCard({
  name,
  feedback,
  imageUrl,
  designation,
}: FeedbackCardProps) {
  return (
    <div className="feedback-card">
      <div className="row justify-content-center align-items-center mb-3">
        <div className="col-2">
          {/* <img src={imageUrl} alt="name" /> */}
          <Image src={imageUrl} alt="Card image" width={40} height={40} />
        </div>
        <div className="col-10">
          <h5 className="name text-start">{name}</h5>
          {designation && <p className="designation">{designation}</p>}
        </div>
      </div>
      <div className="row">
        <div className="col-12 card-content text-start">
          <p className="feedback-text"> {feedback} </p>
        </div>
      </div>
    </div>
  );
}
