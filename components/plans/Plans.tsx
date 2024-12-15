import React from "react";
import PlanCard from "../Ui/plan-card/PlanCard";
import SectionHeading from "../Ui/section-heading/SectionHeading";

const plans = [
  {
    title: "Silver Plan",
    price: "399.99",
    benefits: [
      "Template website",
      "Custom made website",
      "Landing page website",
      "Maximun 4-5 pages",
      "Domain register",
    ],
    buttonText: "Choose Plan",
    buttonLink: "/checkout",
  },
  {
    title: "Gold Plan",
    price: "799.99",
    benefits: [
      "Template website",
      "Custom made website",
      "Landing page website",
      "unlimited pages",
      "Domain register",
      "Official email eg: name@yourwebsite.si",
    ],
    buttonText: "Get Started",
    buttonLink: "/checkout",
  },
  {
    title: "Online store",
    price: "999.99",
    benefits: [
      "Template website",
      "Custom made website",
      "Landing page website",
      "unlimited pages",
      "Domain register",
      "Official email eg: name@yourwebsite.si",
    ],
    buttonText: "Get Started",
    buttonLink: "/checkout",
  },
  {
    title: "Diamond Plan",
    price: "Contact us",
    benefits: [
      "Template website",
      "Custom made website",
      "Landing page website",
      "unlimited pages",
      "Domain register",
      "Official email eg: name@yourwebsite.si",
    ],
    buttonText: "Get Started",
    buttonLink: "/checkout",
  },
];

export default function Plans() {
  return (
    <div className="container">
      <div className="row section-space">
        <SectionHeading
          title=" Our plans scale with your product"
          text="in virtual space through communication platforms."
        />
      </div>
      <div className="row row row-cols-1 row-cols-md-2 g-4">
        {plans.map((plan, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4">
            <PlanCard {...plan} />
          </div>
        ))}
      </div>
    </div>
  );
}
