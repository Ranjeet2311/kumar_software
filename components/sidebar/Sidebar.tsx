import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import dashboard from "../../assets/images/dashboard.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import messageIcon from "../../assets/images/message.png";
import issues from "../../assets/images/issues.png";
import stats from "../../assets/images/chart.png";

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
  { name: "User stats", path: "/dashboard/profile", icon: stats },
];

export default function Sidebar() {
  const user = useSelector((state: RootState) => state.user.user);
  console.log(`user: `, user?.firstName);

  return (
    <>
      <div className="col-12 px-0 col-md-3 sidebar d-flex flex-column">
        <h3 className="text-center">
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
            {user?.firstName.charAt(0).toUpperCase() +
              "" +
              user?.lastName.charAt(0).toUpperCase()}
          </p>
          <p className="name">
            Welcome {user?.firstName + " " + user?.lastName}{" "}
          </p>
          <p className="email">
            Email: <i> {user?.email} </i>
          </p>
        </div>
        <div className="user-details">.</div>
        {tabs.map((tab, i) => (
          <Link
            key={tab.path}
            // data-tabtype={`${tab.tabType}`}
            className="btn action-btn"
            // onClick={tabSwitch}
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
      </div>
    </>
  );
}
