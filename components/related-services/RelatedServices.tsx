import React from "react";
import SectionHeading from "../Ui/section-heading/SectionHeading";
import CustomCarousel from "../Ui/custom-carousel/CustomCarousel";
import { maxFourSlide } from "@/utils/CarouselResponsiveness";
import { servicesList } from "@/utils/List";
import Card from "../Ui/card/Card";

export default function RelatedServices() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <SectionHeading
            custom_class="mb-4 pb-2 pb-lg-4"
            title="Related services"
            text="See more services"
          />
        </div>
      </div>
      <div className="row">
        {servicesList.slice(0, 3).map(({ title, description, image }) => (
          <div key={title} className="col-12 col-md-6 col-lg-4">
            <Card
              img={image}
              title={title}
              description={description.paraOne}
              btnText="Read more"
              showBtn={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
