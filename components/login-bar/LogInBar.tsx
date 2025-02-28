import React, { useState } from "react";
import Button from "../Ui/button/Button";
import Image from "next/image";
import thumbsUp from "../../assets/images/thumbs-up.png";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export default function LogInBar() {
  const [barSize, setBarSize] = useState(false);
  const barSizeHandle = () => setBarSize(!barSize);

  const user = useSelector((state: RootState) => state.user.user);

  return (
    <>
      {!user?.userId && (
        <div className="bar-wrap">
          <div className={`${barSize ? "w-375" : "w-all"} bar`}>
            <p className="stretched mb-0">
              <Image
                className="me-4"
                src={thumbsUp}
                alt="thumb"
                width={25}
                height={25}
              />
              <span>
                {barSize
                  ? "For support"
                  : "Need support for your web-app or website? Create a ticket for support"}
                .
              </span>
              <Button
                button={false}
                link="/auth"
                customClass={`text-light btn ms-3`}
                localRoute={true}
              >
                <span className="fw-bold text-light">Click here</span>
              </Button>
            </p>
            <div
              className={` ${
                barSize ? "d-none" : "d-block"
              } btn ms-4 text-light close`}
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
