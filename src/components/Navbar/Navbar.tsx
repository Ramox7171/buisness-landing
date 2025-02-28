import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png"
import Link from "./Link";
import { SelectedPage } from "../../shared/types.helper";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import * as strings from "../../shared/mock-content.strings.json";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1265px)");
  const navbarBackground = isTopOfPage ? "bg-black" : "bg-black/[0.3] drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 text-white`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Mission"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Value"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Why us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Services"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Testimonials"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>

                  <ActionButton setSelectedPage={setSelectedPage}>
                    {strings.becomeMember}
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-none p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-full bg-black/[0.9] drop-shadow-xl">
          <div className="flex justify-start items-center p-12">
              <img src={Logo} />
            </div>
          
          

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl text-neutral-300">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuIsToggled={setIsMenuToggled}
            />
            <Link
              page="Our Mission"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuIsToggled={setIsMenuToggled}
            />
            <Link
              page="Our Value"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuIsToggled={setIsMenuToggled}
            />
            <Link
              page="Why us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuIsToggled={setIsMenuToggled}
            />
            <Link
              page="Services"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuIsToggled={setIsMenuToggled}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuIsToggled={setIsMenuToggled}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setMenuIsToggled={setIsMenuToggled}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;