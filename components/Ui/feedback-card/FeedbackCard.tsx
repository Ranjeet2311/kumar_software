import React from "react";
import "./feedbackCard.scss";

type FeedbackCardProps = {
  name: string;
  feedback: string;
  // imageUrl: string;
  designation?: string;
};

export default function FeedbackCard({
  name,
  feedback,
  // imageUrl,
  designation,
}: FeedbackCardProps) {
  return (
    <div className="row feedback-card">
      {/* <div className="col-12 card-image-wrapper">
        <img src={imageUrl} alt={`${name}'s photo`} className="card-image" />
      </div> */}
      <div className="col-12 px-0 card-content text-start">
        <p className="feedback-text"> {feedback} </p>
        <h5 className="name">{name}</h5>
        {designation && <p className="designation">{designation}</p>}
      </div>
    </div>
  );
}
