import React from "react";
import "./button.module.scss";
import Link from "next/link";

type ButtonProps = {
  button: boolean;
  link?: string;
  mode?: string;
  children?: React.ReactNode;
  customClass?: string;
  localRoute?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
};

export default function Button({
  button,
  link,
  children,
  mode,
  customClass,
  localRoute,
  type = "button",
  disabled = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseOver,
  onMouseOut,
}: ButtonProps) {
  // console.log("button : ", button);

  if (button) {
    return (
      <button
        className={`"btn ${mode} ${customClass}`}
        type={type}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  if (!link) {
    console.error("Button component with link type requires a 'link' prop.");
    return null;
  }

  if (localRoute) {
    return (
      <Link className={`btn ${mode} ${customClass}`} href={link}>
        {children}
      </Link>
    );
  }

  return (
    <a
      className={`"btn ${mode} ${customClass}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
