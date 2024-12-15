import React from "react";
import "./button.module.scss";

type ButtonProps = {
  button: boolean;
  link?: string;
  mode?: string;
  children?: React.ReactNode;
  customClass?: string;
};

export default function Button({
  button,
  link,
  children,
  mode,
  customClass,
}: ButtonProps) {
  console.log("button : ", button);

  if (button) {
    return (
      <button className={`"btn ${mode} ${customClass}`}> {children} </button>
    );
  }

  if (!link) {
    console.error("Button component with link type requires a 'link' prop.");
    return null;
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
