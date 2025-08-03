import React, { Children, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Button from "@/components/Ui/button/Button";
import btnClasses from "@/components/Ui/button/button.module.scss";
import classes from "./Hero.module.scss";

type HeroProps = {
  heading?: ReactNode | string;
  paragraph?: string | ReactNode;
  showButton?: boolean;
  buttonOneText?: ReactNode | string;
  linkOne?: string;
  linkTwo?: string;
  buttonTwoText?: ReactNode | string;
  img?: string | StaticImageData;
  imgAlt?: string;
  localRoute?: boolean;
  customClass?: string;
  children?: ReactNode;
};

export default function Hero({
  heading,
  paragraph,
  showButton,
  buttonTwoText,
  linkOne,
  linkTwo,
  buttonOneText,
  img,
  imgAlt,
  localRoute,
  customClass,
  children,
}: HeroProps) {
  return (
    <div className="container hero">
      <section className="row mt-4 pt-4 justify-content-center hero">
        <div
          className={`col-12 col-lg-6 order-lg-1 order-2 ${
            customClass && customClass
          }`}
        >
          {heading && (
            <h1 className="text-center text-lg-start mb-4 hero-h1-text position-relative">
              {heading}
            </h1>
          )}
          {children && children}
          <div className="row align-items-center mt-5">
            {showButton && (
              <>
                <div className="col-12 d-flex flex-column flex-md-row justify-content-between justify-content-lg-start mb-2 mb-lg-0">
                  <Button
                    mode={btnClasses.btn_main}
                    button={false}
                    customClass={`mb-2 mb-lg-0 me-md-4 ${classes.btn}`}
                    link={linkOne}
                    localRoute={localRoute}
                  >
                    {buttonOneText}
                  </Button>
                  <Button
                    mode={btnClasses.btn_second}
                    button={false}
                    customClass={`mb-2 mb-lg-0 ${classes.btn}`}
                    link={linkTwo}
                    localRoute={localRoute}
                  >
                    {buttonTwoText}
                  </Button>
                </div>
              </>
            )}
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
