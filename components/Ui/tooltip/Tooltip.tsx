import React from "react";
import classes from "./Tooltip.module.scss";

type TooltipProps = {
  message: string;
  placement?: "top" | "right" | "bottom" | "left";
  children?: React.ReactNode;
};

export default function Tooltip({
  message,
  placement = "right",
  children,
}: TooltipProps) {
  return (
    <div
      className={`border-0 ${classes.tooltip_wrap}`}
      data-placement={placement}
    >
      <div className={classes.tooltip}>
        {message && <span>{message}</span>}{" "}
        {children && <span>{children}</span>}
      </div>
    </div>
  );
}
