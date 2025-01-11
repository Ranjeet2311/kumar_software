import React from "react";
import ContactForm from "@/components/Ui/forms/ContactForm";
import SectionHeading from "@/components/Ui/section-heading/SectionHeading";
// import Image from "next/image";
// import emailIcon from "../../assets/images/email-icon.png";
import contact from "../../assets/images/rocket.png";
import Image from "next/image";
import { motion } from "framer-motion";

type ContactProps = {
  showImage?: boolean;
  showForm?: boolean;
  showHeading?: boolean;
  showSubHeading?: boolean;
};

export default function Contact({
  showImage,
  showForm,
  showHeading,
  showSubHeading,
}: ContactProps) {
  return (
    <div className="container">
      <div className="row section-space">
        <div className="col-12">
          <SectionHeading
            title={
              <>
                <span className="colored-text">Connect</span> with us
              </>
            }
            text="Have a project in mind? Reach out today and let’s get started."
            showHeading={showHeading}
            showSubHeading={showSubHeading}
          />
        </div>
        <div
          className={`col-12 col-lg-6 ${!showForm ? "col-lg-12" : "col-lg-6 "}`}
        >
          {showImage && (
            <Image
              src={contact}
              style={{ width: "400px", height: "400px", objectFit: "contain" }}
              alt="contact"
              className="d-none d-lg-block mx-auto"
            />
          )}

          <div className="mt-2 mt-lg-4 fw-bold text-center">
            <span>
              <a className="text-dark" href="tel:+38669638945">
                📞 +386-6963-8945
              </a>
            </span>
            <span> | </span>
            <span>
              <a className="text-dark" href="mailto:hello@kumarsoftwares.com">
                📧 hello@kumarsoftwares.com
              </a>
            </span>
            <p className="mt-4">
              We’re always here to answer all your questions. Feel free to reach
              us anytime. We’ll be happy to hear from you.
            </p>
          </div>
        </div>
        {showForm && (
          <div className="col-12 col-lg-6 d-block mt-4 mt-lg-0 d-lg-flex justify-content-end">
            <ContactForm />
          </div>
        )}
      </div>
    </div>
  );
}
