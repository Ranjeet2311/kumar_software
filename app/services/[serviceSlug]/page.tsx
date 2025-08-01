import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero-banner/Hero";
import SectionHeading from "@/components/Ui/section-heading/SectionHeading";
import { servicesList } from "@/utils/List";
import { slugify } from "@/utils/Slugify";
import { ReceiptText } from "lucide-react";
import classes from "./Service.module.scss";

import Link from "next/link";

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const slug = (await params).serviceSlug;
  const service = servicesList.find((ser) => slugify(ser.title) === slug);

  if (!service) {
    return (
      <div className="container top-padding ServiceDetail">
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
      <div className="container top-padding ServiceDetail">
        <SectionHeading
          customClass="mb-4 pb-2 pb-lg-4"
          title={service.title}
          text={service.subTitle}
        />
        <div className={`${classes.service_hero}`}>
          <Hero
            descriptionList={service.description}
            showButton={true}
            buttonOneText={
              <div
                className={`d-flex align-items-center justify-content-center`}
              >
                <ReceiptText className="me-2" /> Get a quote
              </div>
            }
            linkOne="/#contact"
            img={service.bigImag}
            imgAlt={service.title}
            localRoute={true}
          />
        </div>
        <div className="row justify-content-between mt-4 pt-2 px-3 px-xl-0">
          <div className={`col-12 col-xl-6 ${classes.feature_wrap}`}>
            <h2 className={`text-center ${classes.h2}`}>
              Key features of {service.title}
            </h2>
            <ul className="col-12">
              {service.KeyFeatures &&
                service.KeyFeatures.map((keyFeature, i) => (
                  <li key={i}>
                    <div className="d-flex justify-content-start align-items-start">
                      {i + 1}. {keyFeature}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className={`col-12 col-xl-6 ${classes.feature_wrap}`}>
            <h2 className={`text-center ${classes.h2}`}>
              Our {service.title} process
            </h2>
            <ul className="col-12">
              {service.process &&
                service.process.map((process, i) => (
                  <li key={i}>
                    <div className="d-flex justify-content-start align-items-start">
                      {i + 1}. {process}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <Contact
          showSectionHead={true}
          showImage={true}
          showForm={true}
          showHeading={true}
          showSubHeading={true}
          formButtonStyle={classes.formButton ?? ""}
        />
        <div id="footer" className="mt-4">
          <Footer />
        </div>
      </div>
    </>
  );
}
