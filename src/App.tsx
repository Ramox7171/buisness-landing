import { useEffect,useState } from "react";


import { SelectedPage } from "./shared/types.helper";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import OurMission from "./components/Mission/OurMission";
import OurValue from "./components/OurValue/OurValue";
import WhyUs from "./components/WhyUs/WhyUs";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

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
      <WhyUs setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage}/>
      <Testimonials setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
        
      </div>
    </>
  )
}

export default App
