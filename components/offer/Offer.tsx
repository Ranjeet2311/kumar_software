import React from "react";
import Card from "../Ui/card/Card";
import frontend from "../../assets/images/code_frontend.jpg";
import custom from "../../assets/images/code_custom_software.jpg";
import backend from "../../assets/images/code_backend.jpg";
import api from "../../assets/images/code_api.jpg";
import wordpress from "../../assets/images/code_wordpress.jpg";
import ecommerce from "../../assets/images/code_ecommerce.jpg";
import SectionHeading from "../Ui/section-heading/SectionHeading";

const services = [
  {
    title: "Custom Website Development",
    description:
      "Beautifully designed, fast, and responsive websites that align perfectly with your goals and vision.",
    image: custom,
  },
  {
    title: "Frontend Code Implementation",
    description:
      "Pixel-perfect, clean, and optimized frontend solutions that provide users with a smooth experience.",
    image: frontend,
  },
  {
    title: "API Development",
    description:
      "Build modern and scalable applications that offer robust performance and flexibility.",
    image: api,
  },
  {
    title: "Node & PHP Backend Development",
    description:
      "Powerful and secure backend solutions that keep your applications running smoothly and efficiently.",
    image: backend,
  },
  {
    title: "WordPress Website Development",
    description:
      "Leverage the power of WordPress for highly customizable and manageable websites.",
    image: wordpress,
  },
  {
    title: "E-commerce Platform Development",
    description:
      "Create feature-rich e-commerce platforms that help your business grow and scale effortlessly.",
    image: ecommerce,
  },
];

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
            {services.map(({ title, description, image }) => (
              <div key={title} className="col-12 col-md-6 col-lg-4">
                <Card
                  img={image}
                  title={title}
                  description={description}
                  btnText="See more"
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
