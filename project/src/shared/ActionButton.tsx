import React from "react";
import { SelectedPage } from "./types.helper";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  classes?: string;
  href?: string;
};

const ActionButton = ({ children, setSelectedPage, classes = "", href }: Props) => {
  const targetId = (href || `#${SelectedPage.ContactUs}`).replace(/^#/, "");

  return (
    <a
      className={`rounded-md bg-primary-100 px-10 py-2 hover:bg-primary-300 hover:text-white transition duration-300 ${classes}`.trim()}
      href={href || `#${SelectedPage.ContactUs}`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        setSelectedPage(SelectedPage.ContactUs);
      }}
    >
      {children}
    </a>
  );
};

export default ActionButton;
