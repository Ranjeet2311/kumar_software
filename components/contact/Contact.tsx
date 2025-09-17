import React from "react";
import ContactForm from "@/components/Ui/forms/ContactForm";
import SectionHeading from "@/components/Ui/section-heading/SectionHeading";
import contact from "../../assets/images/rocket.png";
import Image from "next/image";
import classes from "./Contact.module.scss";
import { useTranslation } from "react-i18next";
import { Mail, PhoneCall } from "lucide-react";

type ContactProps = {
  showImage?: boolean;
  showForm?: boolean;
  showHeading?: boolean;
  showSubHeading?: boolean;
  showSectionHead?: boolean;
  formButtonStyle?: string;
};

export default function Contact({
  showImage,
  showForm,
  showHeading,
  showSubHeading,
  showSectionHead = true,
  formButtonStyle,
}: ContactProps) {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="row section-space">
        {showSectionHead && (
          <div className="col-12">
            <SectionHeading
              title={
                <>
                  <span className="colored-text">
                    {t(
                      "landing_page.contact.Lets Build Something Scalable Together"
                    )}
                  </span>
                </>
              }
              text="Have a project in mind? Reach out today and let’s get started."
              showHeading={showHeading}
              showSubHeading={showSubHeading}
            />
          </div>
        )}
        <div
          className={`col-12 col-lg-6 position-relative ${
            !showForm ? "col-lg-12" : "col-lg-6 "
          }`}
        >
          {/* {showImage && (
            <Image
              src={contact}
              style={{ width: "400px", height: "400px", objectFit: "contain" }}
              alt="contact"
              className="d-none d-lg-block mx-auto"
            />
          )} */}
          <div className={classes.contact_info}>
            <p className={classes.contact_text}>
              {t(
                "landing_page.contact.Have a project in mind? Reach out today and let’s get started"
              )}
            </p>

            <a className={classes.contact_details} href="tel:+38669638945">
              <PhoneCall
                size={24}
                strokeWidth={1.75}
                className="me-2 d-none d-md-inline"
              />
              <PhoneCall
                size={16}
                strokeWidth={1.75}
                className="me-2 d-inline d-md-none"
              />
              <span className="ms-1 ms-md-3">+386-6963-8945</span>
            </a>
            <a
              className={classes.contact_details}
              href="mailto:info@kumar-node.com"
            >
              <Mail
                size={24}
                strokeWidth={1.75}
                className="me-2 d-none d-md-inline"
              />
              <Mail
                size={16}
                strokeWidth={1.75}
                className="me-2 d-inline d-md-none"
              />
              <span className="ms-1 ms-md-3">info@kumar-node.com</span>
            </a>
            <p className={`mt-4 ${classes.contact_text}`}>
              {t(
                "landing_page.contact.We’re here to answer all your questions. Let’s build something great together"
              )}
            </p>
          </div>
        </div>
        {showForm && (
          <div
            className="col-12 col-lg-6 d-block mt-4 mt-lg-0 d-lg-flex justify-content-end"
            style={{ height: "fit-content" }}
          >
            <ContactForm buttonStyle={formButtonStyle} />
          </div>
        )}
      </div>
    </div>
  );
}
