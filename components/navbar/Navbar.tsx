"use client";

import React, { ElementType, useEffect, useState } from "react";
import Link from "next/link";
import "./Navbars.scss";
import Image from "next/image";
import logo from "../../assets/images/logo1.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import useAuthCheck from "@/hooks/useAuthCheck";
import {
  AlignJustify,
  X,
  House,
  ChartNetwork,
  PanelLeftDashed,
  Wallet,
  MessageCircleHeart,
  Contact,
  LayoutDashboard,
  LogOut,
  LogIn,
} from "lucide-react";
import { usePathname } from "next/navigation";
import useLogout from "@/hooks/useLogout";

type linksType = {
  name: string;
  url: string;
  icon: ElementType;
};

const menuLinks: linksType[] = [
  { name: "Home", url: "/#home", icon: House },
  {
    name: "Services",
    url: "/#services",
    icon: ChartNetwork,
    // dropdown: [
    //   { name: "Web Apps", url: "#services", icon: House },
    //   { name: "Frontend Codes", url: "#services", icon: House },
    //   { name: "API Development", url: "#services", icon: House },
    //   { name: "Node & PHP Backend", url: "#services", icon: House },
    //   { name: "WordPress Websites", url: "#services", icon: House },
    //   { name: "E-commerce Platform", url: "#services", icon: House },
    // ],
  },
  { name: "Process", url: "/#process", icon: PanelLeftDashed },
  { name: "Plans", url: "/#plans", icon: Wallet },
  { name: "Feedbacks", url: "/#feedback", icon: MessageCircleHeart },
  { name: "Contact", url: "/#contact", icon: Contact },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false); // Track if it's client-side, when comp mounts

  const user = useSelector((state: RootState) => state.user.user);
  useAuthCheck();

  const path = usePathname();

  const logout = useLogout();

  const clickHandler = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    setShowMenu(false);
    setIsClient(true);
  }, []);

  return (
    <div className="Navbar_wrap">
      <div className="Navbar container">
        <Link href="/" className="logo">
          <Image className="logo-image" src={logo} alt="logo" />
        </Link>
        <div onClick={clickHandler} className="burger-menu">
          {showMenu ? (
            <X size={28} strokeWidth={2} />
          ) : (
            <>
              <AlignJustify size={28} strokeWidth={2} /> <span>Menu</span>
            </>
          )}
        </div>
        <nav>
          <ul className={showMenu ? "menu-list" : "menu-list-close"}>
            {menuLinks.map(({ name, url, icon: Icon }) => {
              return (
                <li key={url} className="text-start">
                  <Link
                    onClick={() => {
                      setShowMenu(!showMenu);
                    }}
                    href={url}
                    className={
                      isClient && `/${window.location.hash}` === url
                        ? "active"
                        : ""
                    }
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.75}
                      className="me-2 d-inline"
                    />
                    <span>{name}</span>
                  </Link>
                </li>
              );
            })}
            {user ? (
              <>
                {!path.startsWith("/dashboard") && (
                  <li>
                    <Link
                      href={`${
                        user?.userId ? "/dashboard" : "/authentication"
                      }`}
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      <LayoutDashboard
                        size={18}
                        strokeWidth={1.75}
                        className="me-2 d-inline"
                      />
                      <span>Dashboard</span>
                    </Link>
                  </li>
                )}
                <li onClick={() => setShowMenu(!showMenu)}>
                  <button onClick={() => logout()}>
                    <LogOut
                      size={18}
                      strokeWidth={1.75}
                      className="me-2 d-inline"
                    />
                    <span> Logout</span>
                  </button>
                </li>
              </>
            ) : !path.startsWith("/authentication") ? (
              <li>
                <Link
                  href="/authentication"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <LogIn
                    size={18}
                    strokeWidth={1.75}
                    className="me-2 d-inline"
                  />
                  <span>Login</span>
                </Link>
              </li>
            ) : null}
          </ul>
        </nav>
      </div>
    </div>
  );
}
