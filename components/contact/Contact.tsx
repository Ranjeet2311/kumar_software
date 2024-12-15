import React from "react";
import ContactForm from "../Ui/forms/ContactForm";
import SectionHeading from "../Ui/section-heading/SectionHeading";
import Image from "next/image";
import emailIcon from "../../assets/images/email-icon.png";
import phoneIcon from "../../assets/images/phone-icon.png";

export default function Contact() {
  return (
    <div className="container">
      <div className="row section-space">
        <div className="col-12">
          <SectionHeading
            title="Connect with us"
            text="Lets discuss your project and bring it to reality"
          />
        </div>
        <div className="col-12 col-lg-6">
          <h2 className="text-center text-lg-start">Talk to us</h2>
          <hr />
          <p className="mb-4 pb-4">
            We’re always here to answer all your questions. Feel free to reach
            us anytime. We’ll be happy to hear from you.
          </p>
          <p className="mt-4">
            <Image src={emailIcon} width={60} alt="contact-icon" />
            <span className="mx-3">
              <strong>test@xyz.com</strong>
            </span>
            <Image src={phoneIcon} width={60} alt="contact-icon" />
            <span className="ms-3">
              <strong>+38669638945</strong>
            </span>
          </p>
          {/* <p className="mt-1">
            <Image src={phoneIcon} width={60} alt="contact-icon" />
            <span className="ms-3">
              <strong>+38669638945</strong>
            </span>
          </p> */}
        </div>
        <div className="col-12 col-lg-6 d-block mt-4 mt-lg-0 d-lg-flex justify-content-end">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
