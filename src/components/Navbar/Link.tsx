import { SelectedPage } from "../../shared/types.helper";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setMenuIsToggled?: (value: boolean) => void
};

const Link = ({ page, selectedPage, setSelectedPage, setMenuIsToggled }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;



  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-300" : ""}
        transition duration-500 hover:text-primary-100
      `}
      href={`#${lowerCasePage}`}
      onClick={() => {

        setSelectedPage(lowerCasePage);
        if (setMenuIsToggled) {
          setMenuIsToggled(false);
        }


      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;