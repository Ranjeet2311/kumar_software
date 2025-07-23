import React from "react";
import SectionHeading from "../Ui/section-heading/SectionHeading";
import { motion, useScroll, useTransform } from "framer-motion";
import { Plane, Lightbulb, Rocket } from "lucide-react";
import classes from "./How.module.scss";

const process = [
  {
    title: "Meeting",
    subTitle: "Discuss your projects",
    description:
      "We start by understanding your business needs, challenges, and objectives. Through interactive sessions, we discuss your vision for the project. The target audience and user expectations. Specific features, functionality, and scope of work. During this phase, we gather all the critical information and establish a clear roadmap, ensuring we’re aligned on your goals from the very beginning. Our goal is to collaborate with you as a partner to turn your ideas into reality.",

    icon: Plane,
    number: "1",
  },
  {
    title: "Strategize",
    subTitle: "Crafting strategies to meet your goals",
    description:
      "Once we’ve analyzed your requirements, our expert team gets to work. We provide insights into the latest technologies and frameworks that fit your needs. Offer creative solutions to enhance user experience, design, and functionality. Share timelines, milestones, and actionable strategies to move forward efficiently. By leveraging our experience and market knowledge, we create a tailored solution that sets your business up for success.",
    icon: Lightbulb,
    number: "2",
  },
  {
    title: "Start Development",
    subTitle: "Putting into action with a clear plan",
    description:
      "After aligning on the plan, timelines, and deliverables: Our developers, designers, and project managers collaborate to kickstart the work. We keep you in the loop with regular updates, ensuring transparency throughout the process. We use Agile methodologies, breaking the project into smaller milestones, so we can test and refine the product iteratively. This phase ensures that you see progress at every step while allowing us to make improvements where necessary.",
    icon: Rocket,
    number: "3",
  },
];

export default function HowItWorks() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="container">
      <div className={`row section-space ${classes.how_it_works}`}>
        <SectionHeading
          title={
            <>
              How we <span className="colored-text">work</span>
            </>
          }
          text="Collaborate | Strategize | Deliver"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className={`${classes.process_container_wrapper}`}>
          {/* <div className={`${classes.curly_path}`}></div> */}
          <div className={`row gy-4 gx-3 ${classes.process_container}  `}>
            {process.map((item) => (
              <div
                className={`col-12 col-lg-4 ${classes.process}`}
                key={item.title}
              >
                <h2 className={classes.title}>
                  <item.icon
                    size={24}
                    strokeWidth={2}
                    className="me-2 d-inline"
                  />
                  {item.title}
                </h2>
                <hr className="my-1" />
                <h4 className={classes.subTitle}>{item.subTitle}</h4>
                <p className="mt-4">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
