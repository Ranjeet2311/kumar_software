import React from "react";
import Image from "next/image";
import banner_Image from "../../assets/images/hero/user.png";
import Button from "@/components/Ui/button/Button";
import btnClasses from "@/components/Ui/button/button.module.scss";

export default function Hero() {
  return (
    <div className="container top-padding">
      <section className="row">
        <div className="col-12 col-lg-7 order-lg-1 order-2 ">
          <h1 className="text-center text-lg-start">
            Tell a better brand story
          </h1>
          <p>
            At Kumar Softwares, we specialize in crafting dynamic websites and
            powerful web applications to help your brand stand out. With a focus
            on modern design, seamless functionality, and exceptional
            performance, we create solutions that resonate with your audience.
            Build your digital presence today with websites tailored to your
            business needs.
          </p>
          <div className="row align-items-center mt-5">
            <div className="col-12 col-lg-6">
              <Button
                mode={btnClasses.btn_main}
                button={true}
                customClass="w-100 mb-2 mb-lg-0"
              >
                Get in touch
              </Button>
            </div>
            <div className="col-12 col-lg-6">
              <Button
                mode={btnClasses.btn_second}
                button={false}
                customClass="w-100 ms-0 ms-lg-1 d-block text-center justify-content-center"
                link="https://ranjeet2311.github.io/upgraded"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 mt-4 mt-lg-0 order-lg-2 order-1 mb-4 mb-lg-0">
          <div className="hero-image">
            <Image src={banner_Image} alt="Picture of the author" />
          </div>
        </div>
      </section>
    </div>
  );
}
