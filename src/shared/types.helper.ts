

export enum SelectedPage {
    Home = "home",
    OurMission= "ourmission",
    WhyUs = "whyus",
    OurValue = "ourvalue",
    Services = "services",
    Testimonials = "testimonials",
    ContactUs = "contact",

    
  }

  export interface SLink {
    icon: React.ReactElement;
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

  export interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactElement; 
    buttonText: string;
  }
  
  