"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./navbar.scss";
import Image from "next/image";
import logo from "../../assets/images/logo1.png";
import menu from "../../assets/images/menu.png";
import close from "../../assets/images/close.png";
import facebook from "../../assets/images/facebook-front.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import useAuthCheck from "@/hooks/useAuthCheck";
import home from "../../assets/images/home.png";
import service from "../../assets/images/services.png";
import process from "../../assets/images/process.png";
import plan from "../../assets/images/price.png";
import feedback from "../../assets/images/feedback.png";
import contact from "../../assets/images/support.png";
import dashboard from "../../assets/images/dashboard.png";
import logout from "../../assets/images/logout.png";
import login from "../../assets/images/login.png";

const menuLinks = [
  { name: "Home", url: "/#home", image: home },
  {
    name: "Services",
    url: "/#services",
    image: service,
    // dropdown: [
    //   { name: "Web Apps", url: "#services", image: home },
    //   {
    //     name: "Frontend Codes",
    //     url: "#services",
    //   },
    //   {
    //     name: "API Development",
    //     url: "#services",
    //   },
    //   {
    //     name: "Node & PHP Backend",
    //     url: "#services",
    //   },
    //   {
    //     name: "WordPress Websites",
    //     url: "#services",
    //   },
    //   {
    //     name: "E-commerce Platform",
    //     url: "#services",
    //   },
    // ],
  },
  { name: "Process", url: "/#process", image: process },
  { name: "Plans", url: "/#plans", image: plan },
  {
    name: "Feedbacks",
    url: "/#feedback",
    image: feedback,
  },
  { name: "Contact", url: "/#contact", image: contact },
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
    <div className="navbar-wrap container-fluid px-0">
      <div className="navbar container mx-0 pt-0">
        <Link href="/" className="logo">
          <Image className="logo-image" src={logo} alt="logo" />
        </Link>
        <div onClick={clickHandler} className="burger-menu">
          {showMenu ? (
            <Image className="close-icon" src={close} alt="close-icon" />
          ) : (
            <Image className="menu-icon" src={menu} alt="menu-icons" />
          )}
        </div>

        <nav>
          <ul className={showMenu ? "show-menu-list" : "hide-menu-list"}>
            {menuLinks.map((link) => {
              return (
                <li key={link.url}>
                  <Link
                    onClick={() => {
                      setShowMenu(!showMenu);
                    }}
                    href={link.url}
                  >
                    <span>
                      <Image
                        className="me-2 menu-icons"
                        src={link.image}
                        alt="logo"
                      />
                    </span>
                    {link.name}
                  </Link>
                </li>
              );
            })}
            {user && user?.userId ? (
              <div className="mt-4 pt-4">
                <hr />
                <li>
                  <Link href="/dashboard">
                    <span>
                      <Image
                        width={20}
                        height={20}
                        className="me-2"
                        src={dashboard}
                        alt="logo"
                      />
                    </span>
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard">
                    <span>
                      <Image
                        width={20}
                        height={20}
                        className="me-2"
                        src={logout}
                        alt="logo"
                      />
                    </span>
                    Logout
                  </Link>
                </li>
              </div>
            ) : (
              <li>
                <Link href="/auth">
                  {" "}
                  <span>
                    <Image
                      width={20}
                      height={20}
                      className="me-2"
                      src={login}
                      alt="logo"
                    />
                  </span>{" "}
                  Login{" "}
                </Link>
              </li>
            )}
            {/* <li>
              <a
                href="https://www.facebook.com/SoftSmartServices1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={facebook} alt="facebook-link" width={30} />
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
}
