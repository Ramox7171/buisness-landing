import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types.helper";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  classes?: string;
  href?: string;
};

const ActionButton = ({ children, setSelectedPage, classes = "", href }: Props) => {
  return (
    <AnchorLink
      className={`rounded-md bg-primary-100 px-10 py-2 hover:bg-primary-300 hover:text-white transition duration-300 ${classes}`.trim()}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={href || `#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
