import React from "react";
import Button from "../Ui/button/Button";
import Image from "next/image";
import thumbsUp from "../../assets/images/thumbs-up.png";

export default function LogInBar() {
  return (
    <div className="log-in-bar container-fluid">
      <div className="container">
        <Button
          button={false}
          link="/auth"
          customClass="w-100 login-bar-btn text-light"
          localRoute={true}
        >
          <Image
            className="me-2"
            src={thumbsUp}
            alt="thumb"
            width={25}
            height={25}
          />{" "}
          Need support for your web-app or website? Create a ticket for support.
          <span className="btn fw-bold text-light colored-text ms-2">
            Click here
          </span>
        </Button>
      </div>
    </div>
  );
}
