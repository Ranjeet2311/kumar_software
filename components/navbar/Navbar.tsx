"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./navbar.scss";
import Image from "next/image";
import logo from "../../assets/images/logo1.png";
import burger from "../../assets/images/buger.svg";
import close from "../../assets/images/close.svg";
import facebook from "../../assets/images/facebook-front.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import useAuthCheck from "@/hooks/useAuthCheck";

const menuLinks = [
  { name: "Home", url: "/#home" },
  {
    name: "Services",
    url: "/#services",
    dropdown: [
      { name: "Web Apps", url: "#services" },
      { name: "Frontend Codes", url: "#services" },
      { name: "API Development", url: "#services" },
      { name: "Node & PHP Backend", url: "#services" },
      { name: "WordPress Websites", url: "#services" },
      { name: "E-commerce Platform", url: "#services" },
    ],
  },
  { name: "Process", url: "/#process" },
  { name: "Plans", url: "/#plans" },
  { name: "Feedbacks", url: "/#feedback" },
  { name: "Contact", url: "/#contact" },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const user = useSelector((state: RootState) => state.user.user);

  useAuthCheck();

  const clickHandler = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <div className="Navbar_wrap">
      <div className="Navbar container">
        <Link href="/" className="logo">
          <Image className="logo-image" src={logo} alt="logo" />
        </Link>
        <div onClick={clickHandler} className="burger-menu">
          {showMenu ? (
            <Image src={close} alt="close-icon" />
          ) : (
            <Image src={burger} alt="menu-icons" />
          )}
        </div>
        <nav>
          <ul className={showMenu ? "menu-list" : "menu-list-close"}>
            {menuLinks.map((link) => {
              return (
                <li key={link.url}>
                  <Link
                    onClick={() => {
                      setShowMenu(!showMenu);
                    }}
                    href={link.url}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            {user && user?.userId && (
              <li>
                <Link href="/dashboard">👤 Dashboard</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
