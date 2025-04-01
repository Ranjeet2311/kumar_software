"use client";

import { ElementType } from "react";
import {
  LayoutDashboard,
  Bug,
  BadgeAlert,
  MessagesSquare,
  PanelRightClose,
  PanelLeftClose,
  User,
  LogOut,
} from "lucide-react";
import { Icon } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./Sidebr.module.scss";
import Button from "../Ui/button/Button";
import useLogout from "@/hooks/useLogout";
import { usePathname } from "next/navigation";

type TabType = {
  name: string;
  path: string;
  icon: ElementType;
};

const tabs: TabType[] = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Issues", path: "/dashboard/issues", icon: Bug },
  { name: "Add issue", path: "/dashboard/add-issue", icon: BadgeAlert },
  { name: "Messages", path: "/dashboard/messages", icon: MessagesSquare },
  { name: "Profile", path: "/dashboard/profile", icon: User },
];

export default function Sidebar({
  isExpanded,
  setIsExpanded,
}: {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}) {
  const logout = useLogout();

  const pathname = usePathname();
  console.log(`path of dashboard :: `, pathname);

  return (
    <div
      className={`${styles.sidebar} ${
        isExpanded ? styles.expanded : styles.collapsed
      }`}
    >
      <button
        className={`btn py-3 collapse_btn w-100 ${styles.toggleButton}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <PanelLeftClose size={28} strokeWidth={2} />
        ) : (
          <PanelRightClose size={28} strokeWidth={2} />
        )}
      </button>
      <nav className="nav flex-column px-0">
        {tabs.map(({ name, path, icon: Icon }) => {
          const isActive = path === pathname;

          // console.log(`isActive :: `, isActive);

          return (
            <Link
              // onClick={() => setIsExpanded(!isExpanded)}
              key={name}
              href={path}
              className={`nav-link text-light ${styles.menuItem} ${
                isActive ? "active_tab" : ""
              }`}
            >
              <Icon className="me-2" />
              <span className={`${isExpanded ? "d-inline" : "d-none"}`}>
                {name}
              </span>
            </Link>
          );
        })}
        <hr />
        <button
          onClick={() => logout()}
          className={`nav-link text-light ${styles.menuItem}`}
        >
          {/* <Logout className="me-2" /> */}
          <LogOut className="me-2" />
          <span className={`${isExpanded ? "d-inline" : "d-none"}`}>
            Logout
          </span>
        </button>
      </nav>
    </div>
  );
}
