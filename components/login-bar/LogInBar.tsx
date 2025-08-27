"use client";

import React, { useEffect, useState } from "react";
import Button from "../Ui/button/Button";
import Image from "next/image";
import thumbsUp from "../../assets/images/thumbs-up.png";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import classes from "./LogInBar.module.scss";
import { useTranslation } from "react-i18next";

export default function LogInBar() {
  const [barSize, setBarSize] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const { t } = useTranslation();

  const barSizeHandle = () => {
    setBarSize((prev) => !prev);
    setMessage(!barSize ? t("support_cta.short") : t("support_cta.full"));
  };

  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    setMessage(t("support_cta.full"));
  }, [t]);

  return (
    <>
      {!user?.userId && (
        <div className={classes.bar_wrap}>
          <div className={classes.bar}>
            <p className={classes.stretched + " mb-0"}>
              <Image
                className="me-2 d-none d-md-inline"
                src={thumbsUp}
                alt="thumb"
                width={20}
                height={20}
              />
              <span className="d-none d-md-inline">{message}</span>
              <Button
                button={false}
                link="/authentication"
                customClass={`text-light btn ms-lg-3 ${classes.btn}`}
                localRoute={true}
              >
                <span className="fw-bold text-light">{t(`nav.login`)}</span>
              </Button>
            </p>
            <div
              className={`${classes.btn} btn ms-4 text-light d-none d-md-inline ${classes.close} `}
              onClick={barSizeHandle}
            >
              X
            </div>
          </div>
        </div>
      )}
    </>
  );
}
