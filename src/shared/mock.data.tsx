import { ImgLogo, SLink } from "./types.helper";
import { Circle } from "lucide-react";
import logo1 from "../assets/logoipsum-263.png";
import logo2 from "../assets/logoipsum-286.png";
import logo3 from "../assets/logoipsum-332.png";
import logo4 from "../assets/logoipsum-336.png";




export const links: SLink[] = [
{
    title: "Facebook",
    href: "www.facebook.com",
    icon: <Circle size={10} />
},
{
    title: "Instagram",
    href: "www.instagram.com",
    icon: <Circle size={10} />
},
{
    title: "TikTok",
    href: "www.tiktok.com",
    icon: <Circle size={10}/>
},
]

export const logos:ImgLogo[] = [
    {
        image: logo1,
        alt: "logo1"
    },
    {
        image: logo2,
        alt: "logo2"
    },
    {
        image: logo3,
        alt: "logo3"
    },
    {
        image: logo4,
        alt: "logo4"
    },
    
]
