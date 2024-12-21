"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./navbar.scss";
import Image from "next/image";
import logo from "../../assets/images/logo1.png";
import burger from "../../assets/images/buger.svg";
import close from "../../assets/images/close.svg";
import facebook from "../../assets/images/facebook-front.png";

const menuLinks = [
  { name: "Home", url: "#home" },
  {
    name: "Services",
    url: "#services",
    dropdown: [
      { name: "Web Apps", url: "#services" },
      { name: "Frontend Codes", url: "#services" },
      { name: "API Development", url: "#services" },
      { name: "Node & PHP Backend", url: "#services" },
      { name: "WordPress Websites", url: "#services" },
      { name: "E-commerce Platform", url: "#services" },
    ],
  },
  { name: "Process", url: "#process" },
  { name: "Plans", url: "#plans" },
  { name: "Feedbacks", url: "#feedback" },
  { name: "Contact", url: "#contact" },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  // const [showDropDown, setShowDropDown] = useState(false);

  const clickHandler = () => {
    setShowMenu(!showMenu);
  };

  // const handleMouseEnter = () => {
  //   console.log("Mouse Enter");
  //   return setShowDropDown(true);
  // };

  // const handleMouseLeave = () => {
  //   console.log("Mouse leave");
  //   return setShowDropDown(false);
  // };

  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <div className="top-wrap">
      <div className="Navbar-wrap container">
        <Link href="/" className="logo">
          <Image className="logo-image" src={logo} alt="logo" />
        </Link>
        <div onClick={clickHandler} className="burger-menu">
          {/* <Image
            src={close}
            alt="close-icon"
            className={showMenu ? "" : "hidden"}
          />
          <Image
            src={burger}
            alt="menu-icons"
            className={!showMenu ? "" : "hidden"}
          /> */}
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
                <>
                  <li
                    key={link.url}
                    // onClick={link.dropdown ? handleMouseEnter : null}
                  >
                    <Link
                      onClick={() => {
                        setShowMenu(!showMenu);
                      }}
                      href={link.url}
                    >
                      {link.name}
                    </Link>
                    {/* {showDropDown && link.dropdown && (
                      <ul className="dropdown" onMouseLeave={handleMouseLeave}>
                        {link.dropdown.map((link) => (
                          <DropDown key={link.name}>
                            <li>
                              <Link href={link.url}> {link.name} </Link>
                            </li>
                          </DropDown>
                        ))}
                      </ul>
                    )} */}
                  </li>
                </>
              );
            })}
            <li>
              <a
                href="https://www.facebook.com/SoftSmartServices1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={facebook} alt="facebook-link" width={30} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
