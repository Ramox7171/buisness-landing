import { ImgLogo, SLink, TReason } from "./types.helper";
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
        icon: <Circle size={10} />
    },
]

export const logos: ImgLogo[] = [
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

export const reasons: TReason[] = [
    {
        title: "Expertise that delivers.",
        reason: "Dolor sit amet, consectetur adipiscing elit. Nulla facilisi, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        id: Math.random()
    },
    {
        title: "Innovative and ahead.",
        reason: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Maecenas tincidunt, nunc id laoreet posuere, sapien nunc varius nunc, in tincidunt dui nulla ut elit.",
        id: Math.random()
    },
    {
        title: "Results-oriented.",
        reason: "Fusce vehicula justo eget felis tincidunt, at scelerisque justo tincidunt. Proin suscipit, nunc ut fermentum luctus, orci ligula efficitur metus, eget pulvinar ligula turpis vel velit.",
        id: Math.random()
    },
    {
        title: "Exceptional support",
        reason:"Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Etiam sed diam nec justo cursus vulputate sit amet et odio.",
        id: Math.random()
    }
    
    
];
