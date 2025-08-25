"use client";

import { use } from "react";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero-banner/Hero";
import SectionHeading from "@/components/Ui/section-heading/SectionHeading";
import { servicesList } from "@/utils/List";
import { slugify } from "@/utils/Slugify";
import { ReceiptText, Command, Waypoints } from "lucide-react";
import classes from "./Service.module.scss";
import Link from "next/link";
import ContactForm from "@/components/Ui/forms/ContactForm";
import RelatedServices from "@/components/related-services/RelatedServices";
import { useTranslation } from "react-i18next";

export default function ServiceDetail({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { t } = useTranslation();

  // ✅ unwrap the promise using React's use()
  const { serviceSlug: slug } = use(params);

  // const slug = (await params).serviceSlug;
  const service = servicesList.find((ser) => slugify(ser.title) === slug);

  const title: string = t(`${slug}.title`);
  const subTitle: string = t(`${slug}.subTitle`);
  const description: string = t(`${slug}.description`);
  const rawKeyFeatures = t(`${slug}.key_features`, {
    returnObjects: true,
  });

  const keyFeatures: string[] = Array.isArray(rawKeyFeatures)
    ? rawKeyFeatures
    : [];
  // const process = t(`services.${slug}.process`, {
  //   returnObjects: true,
  // }) as string[];

  const rawProcess = t(`${slug}.process`, {
    returnObjects: true,
  });

  const process: string[] = Array.isArray(rawProcess) ? rawProcess : [];

  if (!service) {
    return (
      <div className="container top-padding">
        <h3>Service not found</h3>
        <p>
          The service you are looking for does not exist or has been removed.
        </p>
        <p className="fw-bold mt-2">
          Return back to{" "}
          <Link
            className="pointer text-decoration-underline link"
            href="/#services"
          >
            services page
          </Link>
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="container top-padding">
        <SectionHeading
          customClass="mb-4 pb-2 pb-lg-4"
          title={title}
          text={subTitle}
        />
        <div className={`${classes.service_hero}`}>
          <Hero
            showButton={true}
            buttonOneText={
              <div
                className={`d-flex align-items-center justify-content-center`}
              >
                <ReceiptText className="me-2" /> {t("landing_page.Get a Quote")}
              </div>
            }
            linkOne="/#contact"
            img={service.bigImag}
            imgAlt={service.title}
            localRoute={true}
          >
            <p className={classes.desc}>{description}</p>
            <div className={` ${classes.feature_wrap}`}>
              <h2 className={`${classes.h2}`}>
                <Command
                  style={{ display: "inline", verticalAlign: "middle" }}
                  size={20}
                  className="me-2"
                />
                {t("landing_page.Key features")} {title.toLowerCase()}
              </h2>
              <ul className="col-12">
                {keyFeatures.length > 0 ? (
                  <ul className="col-12">
                    {keyFeatures.map((keyFeature, i) => (
                      <li key={i}>
                        <div className="d-flex justify-content-start align-items-start">
                          {i + 1}. {keyFeature}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>...</p>
                )}
              </ul>
            </div>
            <div className={`${classes.feature_wrap}`}>
              <h2 className={`${classes.h2}`}>
                <Waypoints
                  style={{ display: "inline", verticalAlign: "middle" }}
                  size={20}
                  className="me-2"
                />
                {t("landing_page.process of")} {title.toLowerCase()}
              </h2>
              <ul className="col-12">
                {process.length > 0 ? (
                  <ul className="col-12">
                    {process.map((process, i) => (
                      <li key={i}>
                        <div className="d-flex justify-content-start align-items-start">
                          {i + 1}. {process}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>...</p>
                )}
              </ul>
            </div>
          </Hero>
        </div>
        <div id="footer" className="my-4 pb-4">
          <RelatedServices />
        </div>
        <div className={`row ${classes.get_in_touch} `}>
          <div className="col-12">
            <h2>{t("landing_page.Ready to Build")}</h2>
            <p>{t("landing_page.Lets collaborate")}</p>
          </div>
          <div className="col-12 col-lg-5 my-4">
            <div className={classes.contact_info}>
              <div>
                <p className={classes.contact_details}>
                  <a href="tel:+38626296389450">
                    📞 <span>+3862-62963-89450</span>
                  </a>
                </p>
                <p className={classes.contact_details}>
                  <a href="mailto:hello@kumarsoftwares.com">
                    📧 <span>hello@kumarsoftwares.com</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 my-4">
            <h3 className="mb-3">{t("landing_page.Leave message")}</h3>
            <ContactForm buttonStyle={classes.formButton ?? ""} />
          </div>
        </div>
        <div id="footer" className="mt-4">
          <Footer />
        </div>
      </div>
    </>
  );
}
