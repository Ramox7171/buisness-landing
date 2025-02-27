import { useEffect,useState } from "react";


import { SelectedPage } from "./shared/types.helper";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import OurMission from "./components/Mission/OurMission";
import OurValue from "./components/OurValue/OurValue";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home);

    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
      const scrollHandler = () => {
        if (window.scrollY === 0) {
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.Home);
        }
        if (window.scrollY !== 0) setIsTopOfPage(false);
      };
      window.addEventListener("scroll", scrollHandler);
      return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

  return (
    <>
      <div className="flex-col">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <OurMission setSelectedPage={setSelectedPage} />
      <OurValue setSelectedPage={setSelectedPage} />
        
      </div>
    </>
  )
}

export default App
