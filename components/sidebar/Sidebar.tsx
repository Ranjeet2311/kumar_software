import React, { MouseEvent, use, useEffect, useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import dashboard from "../../assets/images/dashboard.png";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import messageIcon from "../../assets/images/message.png";
import issues from "../../assets/images/issues.png";
import stats from "../../assets/images/chart.png";
import logoutImg from "../../assets/images/logout.png";
import useLogout from "@/hooks/useLogout";
// import { setSelectedTab } from "@/store/slices/userSlice";

type TabType = {
  name: string;
  path: string;
  icon: StaticImageData;
};

const tabs: TabType[] = [
  { name: "All issues", path: "/dashboard/issues", icon: issues },
  // { name: "Create new issue", path: "/dashboard/new-issue", icon: messageIcon },
  // { name: "Completed issues", path: "/dashboard/issues", icon: messageIcon },
  // { name: "Progressing issues", path: "/dashboard/issues", icon: messageIcon },
  { name: "Messages", path: "/dashboard/messages", icon: messageIcon },
  { name: "User stats", path: "/dashboard/stats", icon: stats },
];

export default function Sidebar() {
  const user = useSelector((state: RootState) => state.user.user);

  const logout = useLogout();
  const dispatch = useDispatch<AppDispatch>();

  function tabSwitch(e: MouseEvent) {
    const selectedTab: string | null =
      e.currentTarget.getAttribute("data-tabtype");
    localStorage.setItem("selectedTab", `${selectedTab}`);

    // dispatch(setSelectedTab(selectedTab));
  }

  return (
    <>
      <div className="col-12 px-0 col-md-4 sidebar d-flex flex-column">
        <h3>
          <Image
            className="me-2"
            width={35}
            height={35}
            src={dashboard}
            alt="logo"
            style={{ filter: "invert(1)" }}
          />
          <span>Dashboard </span>
        </h3>
        <div className="user-section">
          <p className="avatar">
            {user &&
              user?.firstName.charAt(0).toUpperCase() +
                "" +
                user?.lastName.charAt(0).toUpperCase()}
          </p>
          <div>
            <p className="name">
              {user && user?.firstName + " " + user?.lastName}{" "}
            </p>
            <p className="email">{user && user?.email}</p>
            <p className="position">{user && user?.position}</p>
          </div>
        </div>
        <div className="tab_section">
          {tabs &&
            tabs.map((tab, i) => (
              <Link
                key={tab.path}
                data-tabtype={`${tab.name}`}
                className="tab_btn"
                onClick={tabSwitch}
                href={tab.path}
              >
                <Image
                  className="icons me-2"
                  width={25}
                  height={25}
                  src={tab.icon}
                  alt="logo"
                />
                {tab.name}
              </Link>
            ))}
          <div className="tab_btn" onClick={logout}>
            <Image
              className="icons me-2"
              width={25}
              height={25}
              src={logoutImg}
              alt="logo"
            />
            Logout
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
