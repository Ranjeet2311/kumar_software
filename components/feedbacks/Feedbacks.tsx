import React from "react";
import CustomCarousel from "@/components/Ui/custom-carousel/CustomCarousel";
import FeedbackCard from "@/components/Ui/feedback-card/FeedbackCard";
import SectionHeading from "@/components/Ui/section-heading/SectionHeading";
import { maxFourSlide } from "@/utils/CarouselResponsiveness";
import { feedbacks } from "@/utils/List";

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
