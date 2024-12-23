import React from "react";
import CustomCarousel from "../Ui/multi-carousel/Carousel";
import FeedbackCard from "../Ui/feedback-card/FeedbackCard";
import SectionHeading from "../Ui/section-heading/SectionHeading";

const feedbacks = [
  {
    name: "Dorothy kane",
    feedback:
      "Thank You very much! You guys are really genius, You delivered my website on time and its working well. I will recommend your services.",
    // imageUrl: "/images/jane.jpg",
    // designation: "CEO, TechCorp",
  },
  {
    name: "Simla Nunkoo",
    feedback: "Great service with professional support!",
    // imageUrl: "/images/john.jpg",
    // designation: "CEO, TechCorp",
  },
  {
    name: "Jure Mesec",
    feedback:
      "This service has been outstanding! It completely exceeded my expectations.",
    // imageUrl: "/images/jane.jpg",
    // designation: "CEO, TechCorp",
  },
  {
    name: "Greta Tepina",
    feedback: "Very satisfied, fast service, professional.",
    // imageUrl: "/images/john.jpg",
    // designation: "CEO, TechCorp",
  },
  {
    name: "Anja Tekavčič",
    feedback:
      "I am very satisfied, friendly staff, helpful and good price. Great!",
    // imageUrl: "/images/john.jpg",
    // designation: "CEO, TechCorp",
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
          title="What People Say"
          text="Hear what our happy clients have to say"
        />
        <div className="col-12">
          <div className="feedback-section">
            <CustomCarousel
              infinite={true}
              responsive={maxFourSlide}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={false}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              customTransition="all 0.4s"
              transitionDuration={600}
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
