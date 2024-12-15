import React from "react";
import Card from "../Ui/card/Card";
import frontend from "../../assets/images/code_frontend.jpg";
import custom from "../../assets/images/code_custom_software.jpg";
import backend from "../../assets/images/code_backend.jpg";
import api from "../../assets/images/code_api.jpg";
import wordpress from "../../assets/images/code_wordpress.jpg";
import ecommerce from "../../assets/images/code_ecommerce.jpg";
import SectionHeading from "../Ui/section-heading/SectionHeading";

export default function Offer() {
  return (
    <div className="container">
      <section className="row section-space">
        <SectionHeading
          title="What we Offer?"
          text=" in virtual space through communication platforms"
        />
        <div className="col-12">
          <div className="row row row-cols-1 row-cols-md-2 g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <Card
                img={custom}
                title="Custom software development"
                description=" in virtual space through communication platforms. Durable relations
              that extend beyond immediate genealogical ties."
                btnText="See more"
                showBtn={true}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Card
                img={frontend}
                title="Frontend code implimentation"
                description=" in virtual space through communication platforms. Durable relations
              that extend beyond immediate genealogical ties."
                btnText="See more"
                showBtn={true}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Card
                img={api}
                title="Rest Api development"
                description=" in virtual space through communication platforms. Durable relations
              that extend beyond immediate genealogical ties."
                btnText="See more"
                showBtn={true}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Card
                img={backend}
                title="Node Js & Php backend development"
                description=" in virtual space through communication platforms. Durable relations
              that extend beyond immediate genealogical ties."
                btnText="See more"
                showBtn={true}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Card
                img={wordpress}
                title="Wordpress website development"
                description=" in virtual space through communication platforms. Durable relations
              that extend beyond immediate genealogical ties."
                btnText="See more"
                showBtn={true}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Card
                img={ecommerce}
                title="E-commerce platform (Woo-commerce) "
                description=" in virtual space through communication platforms. Durable relations
              that extend beyond immediate genealogical ties."
                btnText="See more"
                showBtn={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
