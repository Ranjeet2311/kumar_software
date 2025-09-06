"use client";

import { useEffect, useState } from "react";
import classes from "./cookies.module.scss";
import Image from "next/image";
import cookieImage from "@/assets/images/cookies.svg";
import Button from "../Ui/button/Button";
import LangSwitch from "../langSwitch/LangSwitch";
import { useTranslation } from "react-i18next";

export default function Cookies() {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);

  console.log("Environment:", process.env.NODE_ENV);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = (type: "essential" | "all") => {
    localStorage.setItem("cookieConsent", type);
    setShowBanner(false);
    // here you could trigger analytics init if type === "all"
  };

  if (!showBanner) return null;

  return (
    <div className={`${classes.wrap} container-fluid`}>
      <div className={`${classes.cookies} row`}>
        <div className="d-flex flex-column">
          <div className="mb-4 row">
            <Image
              src={cookieImage}
              alt="Cookies"
              width={30}
              height={30}
              className={classes.cookie_img}
            />
            <div className={classes.langChanger}>
              <LangSwitch />
            </div>
          </div>
          <p className={`mt-2 mb-4  ${classes.text}`}>
            {t("cookie_consent.message")}
          </p>
        </div>
        <Button
          button
          customClass={`me-2 mb-4 mb-md-0 ${classes.acceptButton}`}
          onClick={() => handleConsent("essential")}
        >
          {t("cookie_consent.essential")}
        </Button>
        <Button
          button
          customClass={classes.acceptButton}
          onClick={() => handleConsent("all")}
        >
          {t("cookie_consent.all")}
        </Button>
      </div>
    </div>
  );
}
