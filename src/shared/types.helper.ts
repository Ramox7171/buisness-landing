

export enum SelectedPage {
    Home = "home",
    OurMission= "ourmission",
    WhyUs = "whyus",
    OurValue = "ourvalue",
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

  export type TReason = {
    title: string,
    reason: string,
    id: number;


  }
  