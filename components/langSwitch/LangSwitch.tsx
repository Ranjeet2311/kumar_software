import * as React from "react";
import { useTranslation } from "react-i18next";
import de from "@/assets/flags/de.svg";
import si from "@/assets/flags/si.svg";
import us from "@/assets/flags/us.svg";
import Dropdown from "../Ui/drop-down/DropDown";
import { Languages } from "lucide-react";
import classes from "./LangSwitch.module.scss";

const language = [
  { value: "slo", label: "Sl", img: si },
  { value: "gr", label: "Ge", img: de },
  { value: "en", label: "En", img: us },
];

export default function LangSwitch() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { i18n } = useTranslation();
  const open = Boolean(anchorEl);

  const { t } = useTranslation();

  const LangText = t("nav.language");

  const handleLanguageChange = (val: string) => {
    console.log(`Lang click : `, val);
    i18n.changeLanguage(val);
  };

  return (
    <Dropdown
      OnClick={handleLanguageChange}
      btnClass={classes.linkButton_text}
      dropDownList={language}
      dropDownClass={classes.dropDownList}
      btnText={
        <>
          <Languages size={18} />{" "}
          <p className="inline-block mb-0">{LangText}</p>
        </>
      }
    />
  );
}
