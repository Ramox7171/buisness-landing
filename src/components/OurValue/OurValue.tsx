import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

import { SelectedPage } from "../../shared/types.helper";
import * as strings from "../../shared/mock-content.strings.json"
import { Eye, Fingerprint } from "lucide-react";
import BackgroundImage from "../../assets/MeetingWhyus.jpg";
import Counter from "../../shared/Counter";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurValue = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1300px)");

    return (
        <section id="ourvalue" className="relative w-full h-screen bg-our-value bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurValue)}
                className="relative mx-auto flex h-full w-full items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                
                <div className="flex flex-col relative mt-20 left-0 md:left-20 top-10 md:w-5/12 md:h-3/5 h-auto justify-center items-start text-white text-left p-10 rounded-lg border border-primary-300"
                    style={{
                        background: "linear-gradient(to top, rgba(0, 119, 182, 0.35), rgba(0, 180, 216, 0.7))"
                    }}>
                        
                    <div className="w-full h-full flex flex-col">
                        <p className="my-4 text-neutral-900 font-bold">{strings.ourValueSmall}</p>
                        <h2 className="mb-2 text-neutral-900 text-5xl font-bold">{strings.ourValueBig}</h2>
                        <p className="my-2">{strings.ourValueParagraph}</p>
                        <div className="my-8 w-[90%] border-t border-gray-400 mx-auto"></div>

                        <div className="flex my-4 items-center gap-4">
                            <div className="w-auto h-auto">
                                <div className="p-2 bg-primary-300 rounded-full">
                                    <Eye size={42} />
                                </div>
                            </div>
                            <div className="m-0 md:mx-4 ">
                                <p className="font-bold text-xl">{strings.ourValueTitleVision}</p>
                                <p className="text-gray-200">{strings.ourValueVisionParagraph}</p>
                            </div>
                        </div>

                        <div className="flex my-4 items-center gap-4">
                            <div className="w-auto h-auto">
                                <div className="p-2 bg-primary-300 rounded-full">
                                    <Fingerprint size={42} />
                                </div>
                            </div>
                            <div className="mx-4 ">
                                <p className="font-bold text-xl">{strings.ourValueTitleMission}</p>
                                <p className="text-gray-200">{strings.ourValueMissionParagraph}</p>
                            </div>
                        </div>
                    </div>
                </div>

                
                {isAboveMediumScreens && (
                    <div className="absolute flex justify-around bottom-0 h-[10%] w-full bg-neutral-900">
                        <Counter num={56} item={strings.ourValueCountOne} />
                        <Counter num={38} item={strings.ourValueCountTwo} />
                        <Counter showKPlus={false} num={300} speed={10} item={strings.ourValueCountThree} />
                        <Counter showKPlus={false} num={12} item={strings.ourValueCountFour} />
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default OurValue;
