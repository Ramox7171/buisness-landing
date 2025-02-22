import { ImgLogo, SelectedPage, SLink } from "../../shared/types.helper";
import { motion } from "framer-motion";
import homePageImg from "../../assets/MeetingHomepage.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import * as strings from "../../shared/mock-content.strings.json"
import { links } from "../../shared/mock.data";
import { Workflow } from "lucide-react";
import { logos } from "../../shared/mock.data";




type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1265px)");
    return (
        <section id="home" className="relative w-full h-screen">

            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-1 bg-opacity-10"
                style={{ backgroundImage: `url(${homePageImg})` }}
            />


            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 -z-1" />

            <motion.div
                className="relative mx-auto flex h-full w-full items-center justify-center"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >

                <div className="  flex flex-col relative md:w-5/12 h-full  justify-center items-center text-white text-left p-10 bg-black bg-opacity-50 rounded-lg">
                    {isAboveMediumScreens && (
                        <div className="w-full h-auto flex flex-row gap-4 absolute top-1/2 right-[calc(50%+20px)] justify-center items-center -rotate-90 text-white bg-none z-10">
                            {links.map((link: SLink) => (
                                <a
                                    href={link.href}
                                    key={link.title}
                                    className="flex items-center gap-2 font-bold hover:text-primary-100 transition duration-300"
                                >
                                    <Workflow className="w-5 h-5 font-bold" />

                                    {link.title}
                                </a>
                            ))}
                        </div>

                    )}

                    <div className=" flex-col justify-end bg-none">

                        <p className="mx-auto mb-2 font-bold text-primary-100">{strings.welcomeTextSmall}</p>
                        <h1 className=" mb-2 text-4xl md:text-5xl font-montserrat font-bold">{strings.welcomeTextBig}</h1>
                        <p>{strings.lorem}</p>
                        <button
                            className="mt-4 px-5 py-2 bg-primary-100 text-white rounded-lg  hover:bg-primary-300 transition duration-300"
                        >{strings.learnMore}</button>

                    </div>

                </div>
                {isAboveMediumScreens && (
                    <div className="absolute flex flex-col bottom-0 bg-black items-center w-full h-[calc(12.5%)]">
                        <div className="text-white font-sans italic">{strings.trustedBy}</div>
                        <div className="flex mt-4 px-12 w-full h-auto items-center justify-evenly">
                        {logos.map((logo:ImgLogo)=>(
                            <img className="w-auto h-12" src={logo.image} alt={logo.alt} key={logo.alt} />
                        ))}

                        </div>

                    </div>
                )}
            </motion.div>
        </section>
    );
};



export default Home