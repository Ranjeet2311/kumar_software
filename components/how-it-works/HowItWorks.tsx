import React from "react";
import discuss from "../../assets/images/discuss.png";
import insight from "../../assets/images/insight.png";
import start from "../../assets/images/start-project.png";
import Image from "next/image";
import SectionHeading from "../Ui/section-heading/SectionHeading";

// const process = [
//   {
//     title: "Discuss Your Projects",
//     description:
//       "We begin by understanding your vision, challenges, and goals. Our team ensures we align with your business objectives before diving in.",
//   },
//   {
//     title: "Insights & Strategy",
//     description:
//       "Gain actionable insights as we collaborate on a tailored strategy to develop your project effectively.",
//   },
//   {
//     title: "Plan & Execute",
//     description:
//       "Once aligned, we begin the development process, ensuring constant communication and delivering results that exceed expectations.",
//   },
// ];

export default function HowItWorks() {
  return (
    <div className="container">
      <div className="row section-space how-it-works">
        <SectionHeading
          title="How We Work?"
          text="Collaborate | Strategize | Deliver"
        />
      </div>
      <div className="row work">
        <div className="col-12 col-lg-6">
          <h2 className="text-center text-lg-start">Discuss Your Projects</h2>
          <hr />
          <h4 className="text-center text-lg-start ">
            Collaborative brainstorming to define your goals
          </h4>
          <p className="mt-4">
            We start by understanding your business needs, challenges, and
            objectives. Through interactive sessions, we discuss your vision for
            the project. The target audience and user expectations. Specific
            features, functionality, and scope of work. During this phase, we
            gather all the critical information and establish a clear roadmap,
            ensuring we’re aligned on your goals from the very beginning. Our
            goal is to collaborate with you as a partner to turn your ideas into
            reality.
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
          <h4 className="text-center text-lg-start ">
            Crafting innovative strategies to meet your goals.
          </h4>
          <p className="mt-4">
            Once we’ve analyzed your requirements, our expert team gets to work.
            We provide insights into the latest technologies and frameworks that
            fit your needs. Offer creative solutions to enhance user experience,
            design, and functionality. Share timelines, milestones, and
            actionable strategies to move forward efficiently. By leveraging our
            experience and market knowledge, we create a tailored solution that
            sets your business up for success.
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
            We Agree and Then Start the Project
          </h2>
          <hr />
          <h4 className="text-center text-lg-start ">
            Getting into action with a clear plan.
          </h4>
          <p className="mt-4">
            After aligning on the plan, timelines, and deliverables: Our
            developers, designers, and project managers collaborate to kickstart
            the work. We keep you in the loop with regular updates, ensuring
            transparency throughout the process. We use Agile methodologies,
            breaking the project into smaller milestones, so we can test and
            refine the product iteratively. This phase ensures that you see
            progress at every step while allowing us to make improvements where
            necessary.
          </p>
        </div>
        <div className="col-12 col-lg-6 work-image-wrap">
          <Image className="work-image" src={start} alt="both parties agree" />
        </div>
      </div>
    </div>
  );
}
