import React from "react";
import Card from "../Ui/card/Card";
import SectionHeading from "../Ui/section-heading/SectionHeading";
import { servicesList } from "@/utils/List";

export default function Offer() {
  return (
    <div className="container">
      <section className="row section-space">
        <SectionHeading
          title="What we Offer?"
          text="Discover how our expertise delivers tailored software solutions"
        />
        <div className="col-12">
          <div className="row row row-cols-1 row-cols-md-2 g-4">
            {servicesList.map(({ title, description, image }) => (
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
      </section>
    </div>
  );
}
