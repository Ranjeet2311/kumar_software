"use client";

import { ElementType } from "react";
import { Home, MessageSquare, Menu, User, LogOut } from "lucide-react";
import { Icon } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./Sidebr.module.scss";
import Button from "../Ui/button/Button";
import useLogout from "@/hooks/useLogout";

type TabType = {
  name: string;
  path: string;
  icon: ElementType;
};

const tabs: TabType[] = [
  { name: "All issues", path: "/dashboard/issues", icon: Home },
  { name: "Messages", path: "/dashboard/messages", icon: MessageSquare },
  { name: "User stats", path: "/dashboard/stats", icon: User },
];

export default function Sidebar({
  isExpanded,
  setIsExpanded,
}: {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}) {
  const logout = useLogout();

  return (
    <div className={`d-flex ${styles.layout_}`}>
      <div
        className={`${styles.sidebar} ${
          isExpanded ? styles.expanded : styles.collapsed
        }`}
      >
        <button
          className={`btn btn-dark w-100 ${styles.toggleButton}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Menu />
        </button>
        <nav className="nav flex-column px-0">
          {tabs.map(({ name, path, icon: Icon }) => (
            <Link
              key={name}
              href={path}
              className={`nav-link text-light ${styles.menuItem}`}
            >
              <Icon className="me-2" />
              <span className={`${isExpanded ? "d-inline" : "d-none"}`}>
                {name}
              </span>
            </Link>
          ))}
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
    </div>
  );
}
