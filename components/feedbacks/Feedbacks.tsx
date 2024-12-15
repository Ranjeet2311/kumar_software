import React from "react";
import CustomCarousel from "../Ui/multi-carousel/Carousel";
import FeedbackCard from "../Ui/feedback-card/FeedbackCard";
import SectionHeading from "../Ui/section-heading/SectionHeading";

const feedbacks = [
  {
    name: "Jane Doe",
    feedback:
      "This service has been outstanding! It completely exceeded my expectations.",
    // imageUrl: "/images/jane.jpg",
    designation: "CEO, TechCorp",
  },
  {
    name: "John Smith",
    feedback:
      "An incredible experience from start to finish. Highly recommend!",
    // imageUrl: "/images/john.jpg",
    designation: "CEO, TechCorp",
  },
  {
    name: "Jane Doe",
    feedback:
      "This service has been outstanding! It completely exceeded my expectations.",
    // imageUrl: "/images/jane.jpg",
    designation: "CEO, TechCorp",
  },
  {
    name: "John Smith",
    feedback:
      "An incredible experience from start to finish. Highly recommend!",
    // imageUrl: "/images/john.jpg",
    designation: "CEO, TechCorp",
  },
];

const maxFourSlide = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Feedbacks() {
  return (
    <div className="container">
      <div className="row section-space">
        <SectionHeading
          title="What people say"
          text="The best people to work with"
        />

        <div className="col-12">
          <div className="feedback-section">
            <CustomCarousel
              infinite={true}
              responsive={maxFourSlide}
              autoPlay={false}
              swipeable={true}
              draggable={true}
              showDots={false}
              autoPlaySpeed={6000}
              keyBoardControl={true}
              customTransition="all 0.4s"
              transitionDuration={800}
              minimumTouchDrag={0}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              containerClass="carousel-container mb-4"
            >
              {feedbacks.map((feedback, index) => (
                <FeedbackCard key={index} {...feedback} />
              ))}
            </CustomCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}
