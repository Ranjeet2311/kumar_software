import { useEffect, useState } from "react";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero-banner/Hero";
import SectionHeading from "@/components/Ui/section-heading/SectionHeading";
import { services } from "@/utils/servicesList";
import { slugify } from "@/utils/Slugify";
import { StaticImageData } from "next/image";

type Service = {
  title: string;
  description: string;
  image: string | StaticImageData;
  url: string;
};

type ServiceDetailsProps = {
  params: {
    serviceSlug: string;
  };
};

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const slug = (await params).serviceSlug;
  console.log(`slug :: `, slug);

  const service = services.find((ser) => slugify(ser.title) === slug);

  if (!service) {
    return (
      <div className="container">
        <h3>Service not found</h3>
        <p>
          The service you are looking for does not exist or has been removed.
        </p>
      </div>
    );
  }

  return (
    <div className="top-padding ServiceDetail">
      <SectionHeading
        custom_class="mb-4 pb-2 pb-lg-4"
        title="Services"
        text={service.title}
      />
      <Hero
        paragraph={service.description}
        showButton={false}
        showLink={true}
        linkUrl="/#contact"
        linkText="Get in touch"
        img={service.image}
        imgAlt={service.title}
        localRoute={true}
      />
      <Contact
        showImage={false}
        showForm={false}
        showHeading={false}
        showSubHeading={true}
      />
      <Footer />
    </div>
  );
}
