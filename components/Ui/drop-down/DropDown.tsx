import React, { ReactNode } from "react";
import { Button, Menu, Portal } from "@chakra-ui/react";
import classes from "./DropDown.module.scss";
import Image, { StaticImageData } from "next/image";

type DropdownItem = {
  label: string | React.ReactNode;
  value: string;
  img: StaticImageData | string;
};

type PlanProps = {
  btnText?: string | ReactNode;
  dropDownClass?: string;
  dropDownList?: DropdownItem[];
  btnClass?: string;
  OnClick?: (val: string) => void;
};

export default function Dropdown({
  btnText,
  dropDownClass,
  dropDownList,
  btnClass,

  OnClick,
}: PlanProps) {
  return (
    <Menu.Root>
      <Menu.Trigger style={{ outline: "none" }} asChild>
        <Button
          variant="outline"
          className={` ${btnClass} ${classes.dropdownButton}`}
        >
          {btnText}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content className={`${dropDownClass} ${classes.links_wrap}`}>
            {dropDownList &&
              dropDownList.map((item, i) => (
                <Menu.Item
                  key={i}
                  className={classes.link}
                  value={item.value}
                  onClick={() => OnClick?.(item.value)}
                >
                  <Image src={item.img} width={20} alt={item.value} />
                  <span className="inline-block"> {item.label}</span>
                </Menu.Item>
              ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
