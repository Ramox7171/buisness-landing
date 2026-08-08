import { SelectedPage } from "../../shared/types.helper";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  setMenuIsToggled?: (value: boolean) => void
};

const Link = ({ page, selectedPage, setSelectedPage, setMenuIsToggled }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <a
      className={`${selectedPage === lowerCasePage ? "text-primary-300" : ""}
        transition duration-500 hover:text-primary-100
      `}
      href={`#${lowerCasePage}`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(lowerCasePage)?.scrollIntoView({ behavior: "smooth" });

        setSelectedPage(lowerCasePage);
        if (setMenuIsToggled) {
          setMenuIsToggled(false);
        }
      }}
    >
      {page}
    </a>
  );
};

export default Link;