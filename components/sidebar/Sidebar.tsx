"use client";

import { ElementType, useState } from "react";
import {
  LayoutDashboard,
  Bug,
  CirclePlus,
  MessageSquare,
  PanelRightClose,
  PanelLeftClose,
  User,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import styles from "./Sidebr.module.scss";
import Button from "../Ui/button/Button";
import useLogout from "@/hooks/useLogout";
import { usePathname } from "next/navigation";
import Tooltip from "../Ui/tooltip/Tooltip";

type TabType = {
  name: string;
  path: string;
  icon: ElementType;
};

const tabs: TabType[] = [
  { name: "Report", path: "/dashboard", icon: LayoutDashboard },
  { name: "All Issues", path: "/dashboard/issues", icon: Bug },
  { name: "Add Issue", path: "/dashboard/add-issue", icon: CirclePlus },
  { name: "Messages", path: "/dashboard/messages", icon: MessageSquare },
  { name: "Profile", path: "/dashboard/profile", icon: User },
];

export default function Sidebar({
  isExpanded,
  setIsExpanded,
}: {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
}) {
  const [tooltip, setTooltip] = useState<string | null>(null);

  const logout = useLogout();
  const pathname = usePathname();

  const showTooltip = (tab: string) => {
    setTooltip(tab);
  };

  return (
    <div
      onMouseLeave={() => setTooltip(null)}
      className={`${styles.sidebar} ${
        isExpanded ? styles.expanded : styles.collapsed
      }`}
    >
      <button
        className={`btn py-3 collapse_btn w-100 position-relative ${styles.toggleButton}`}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ textAlign: "left", whiteSpace: "nowrap" }}
        onMouseOver={() => showTooltip("dashboard")}
      >
        <span style={{ display: "inline-block", verticalAlign: "middle" }}>
          {isExpanded ? <PanelLeftClose /> : <PanelRightClose />}
        </span>
        <span
          className={`${isExpanded ? "d-inline ms-2" : "d-none"}`}
          style={{
            display: "inline-block",
            verticalAlign: "middle",
            marginLeft: "8px",
            fontWeight: "600",
          }}
        >
          Dashboard
        </span>
        {!isExpanded && tooltip === "dashboard" && (
          <span
            style={{ position: "absolute", right: "-70px", bottom: "10px" }}
          >
            <Tooltip message={"dashboard"} placement="right" />
          </span>
        )}
      </button>
      <nav className="nav flex-column px-0">
        {tabs.map(({ name, path, icon: Icon }) => {
          const isActive = path === pathname;
          return (
            <Link
              key={name + path}
              href={path}
              className={`nav-link text-light position-relative ${
                styles.menuItem
              } ${isActive ? styles.active_tab : ""}`}
              onMouseOver={() => showTooltip(name)}
            >
              <Icon className="me-2" />
              <span
                style={{
                  visibility: isExpanded ? "visible" : "hidden",
                  display: "inline-block",
                  width: isExpanded ? "auto" : "0px",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  transition: "width 0.3s ease, visibility 0.3s ease",
                }}
              >
                {name}
              </span>
              {!isExpanded && tooltip === name && (
                <span
                  style={{
                    position: "absolute",
                    right: "-70px",
                    bottom: "10px",
                  }}
                >
                  <Tooltip message={name} placement="right" key={name} />
                </span>
              )}
            </Link>
          );
        })}
        <hr />
        <Button
          button={true}
          onClick={() => logout()}
          onMouseOver={() => showTooltip("logout")}
          customClass={`nav-link text-light position-relative ${styles.menuItem}`}
        >
          <LogOut className="me-2" />
          <span className={`${isExpanded ? "d-inline" : "d-none"}`}>
            Logout
          </span>
          {!isExpanded && tooltip === "logout" && (
            <span
              style={{ position: "absolute", right: "-70px", bottom: "10px" }}
            >
              <Tooltip message={"logout"} placement="right" />
            </span>
          )}
        </Button>
      </nav>
    </div>
  );
}
