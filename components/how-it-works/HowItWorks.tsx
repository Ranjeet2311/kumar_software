import React from "react";
import discuss from "../../assets/images/discuss.png";
import insight from "../../assets/images/insight.png";
import start from "../../assets/images/start-project.png";
import Image from "next/image";
import SectionHeading from "../Ui/section-heading/SectionHeading";

export default function HowItWorks() {
  return (
    <div className="container">
      <div className="row section-space how-it-works">
        <SectionHeading
          title="How we Work?"
          text="Resolving neglected sir tolerably but existence conveying for. Day
          his put off unaffected literature partiality inhabiting."
        />
      </div>
      <div className="row work">
        <div className="col-12 col-lg-6">
          <h2 className="text-center text-lg-start">Discuss the projects</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            sed aliquid eligendi voluptates illo veniam minus tempore, harum
            eveniet incidunt voluptatem fuga molestiae doloribus dolorum libero
            consequatur numquam quos minima doloremque molestias, asperiores
            dignissimos unde odit possimus. Adipisci dicta, possimus non sint
            quo vitae totam. Ut at itaque, ullam officiis, repudiandae ipsa
            atque distinctio fuga tempore similique non illum sint.
          </p>
        </div>
        <div className="col-12 col-lg-6 work-image-wrap">
          <Image
            className="work-image"
            src={discuss}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="row work">
        <div className="col-12 col-lg-6 order-lg-2 order-1">
          <h2 className="text-center text-lg-start">Our Insights</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            sed aliquid eligendi voluptates illo veniam minus tempore, harum
            eveniet incidunt voluptatem fuga molestiae doloribus dolorum libero
            consequatur numquam quos minima doloremque molestias, asperiores
            dignissimos unde odit possimus. Adipisci dicta, possimus non sint
            quo vitae totam. Ut at itaque, ullam officiis, repudiandae ipsa
            atque distinctio fuga tempore similique non illum sint.
          </p>
        </div>
        <div className="col-12 col-lg-6 work-image-wrap order-lg-1 order-2">
          <Image
            className="work-image"
            src={insight}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="row work">
        <div className="col-12 col-lg-6">
          <h2 className="text-center text-lg-start">
            We agree and then we start the projects
          </h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            sed aliquid eligendi voluptates illo veniam minus tempore, harum
            eveniet incidunt voluptatem fuga molestiae doloribus dolorum libero
            consequatur numquam quos minima doloremque molestias, asperiores
            dignissimos unde odit possimus. Adipisci dicta, possimus non sint
            quo vitae totam. Ut at itaque, ullam officiis, repudiandae ipsa
            atque distinctio fuga tempore similique non illum sint.
          </p>
        </div>
        <div className="col-12 col-lg-6 work-image-wrap">
          <Image className="work-image" src={start} alt="both parties agree" />
        </div>
      </div>
    </div>
  );
}
