import React, { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Button from "@/components/Ui/button/Button";
import btnClasses from "@/components/Ui/button/button.module.scss";

type DescriptionList = {
  para: string;
};

type HeroProps = {
  heading?: ReactNode | string;
  paragraph?: string;
  descriptionList?: DescriptionList[];
  showButton: boolean;
  ButtonText?: string;
  showLink: boolean;
  linkUrl?: string;
  linkText?: string;
  img?: string | StaticImageData;
  imgAlt?: string;
  localRoute?: boolean;
};

export default function Hero({
  heading,
  paragraph,
  descriptionList,
  showButton,
  ButtonText,
  showLink,
  linkUrl,
  linkText,
  img,
  imgAlt,
  localRoute,
}: HeroProps) {
  return (
    <div className="container">
      <section className="row mt-4 pt-4 justify-content-center">
        <div className="col-12 col-lg-6 order-lg-1 order-2 ">
          {heading && (
            <h1 className="text-center text-lg-start mb-4 pb-4 hero-h1-text">
              {heading}
            </h1>
          )}
          <p>{paragraph}</p>
          {descriptionList &&
            descriptionList.map((desc, i) => (
              <p key={i} className="mb-4">
                {desc.para}
              </p>
            ))}
          <div className="row align-items-center mt-5">
            {showButton && (
              <div className="col-12 col-lg-4">
                <Button
                  mode={btnClasses.btn_main}
                  button={true}
                  customClass="mb-2 mb-lg-0"
                >
                  {ButtonText}
                </Button>
              </div>
            )}
            <div className="col-12 col-lg-4">
              {showLink && (
                <Button
                  mode={btnClasses.btn_second}
                  button={false}
                  customClass="mb-2 mb-lg-0"
                  link={linkUrl}
                  localRoute={localRoute}
                >
                  {linkText}
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 mt-4 mt-lg-0 order-lg-2 order-1 mb-4 mb-lg-0">
          <div className="hero-image">
            <Image src={img || ""} alt={imgAlt || ""} />
          </div>
        </div>
      </section>
      {/* <div className="bg-light text-center py-2 rounded-pill">
        <h3 className="colored-text">!!! UNDER CONSTRUCTION !!!</h3>
      </div> */}
    </div>
  );
}
