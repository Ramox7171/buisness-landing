

export enum SelectedPage {
    Home = "home",
    OurMission= "ourmission",
    WhyUs = "whyus",
    ContactUs = "contactus",
    
  }

  export interface SLink {
    icon: React.ReactNode;
    title: string;
    href: string; 
  }

  export interface ImgLogo {
    alt: string;
    image: string;
  }
  