import { SelectedPage } from "../../shared/types.helper";
import { motion } from "framer-motion";
import * as strings from "../../shared/mock-content.strings.json";
import { Check, Mic } from "lucide-react";
import { reasons } from "../../shared/mock.data";
import useMediaQuery from "../../hooks/useMediaQuery";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const WhyUs = ({ setSelectedPage }: Props) => {


    const isAboveMediumScreens = useMediaQuery("(min-width: 1265px)")

    return (
        <section id="whyus" className="mb-10 mt-5 w-full h-auto">
            <motion.div className="flex h-full"
                onViewportEnter={() => setSelectedPage(SelectedPage.WhyUs)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}>
                <div className="relative flex flex-col md:flex-row w-full h-auto mt-24 p-2 md:p-16 bg-neutral-900">


                    <div className="mt-10 md:w-1/2">
                        <p className="font-bold text-primary-100">{strings.whyUsWelcomeSmall}</p>
                        <p className="font-bold text-6xl text-gray-200 mt-5">{strings.whyUsWelcomeBig}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-auto mt-6">
                            {reasons.map((reason, id) => (
                                <div key={id} className="flex flex-col gap-2  p-4">
                                    <div className="w-[45px] p-2 bg-primary-300 rounded-full flex items-center justify-center">
                                        <Check size={24} strokeWidth={3} color="white" />
                                    </div>
                                    <p className="text-gray-200 text-xl font-bold">{reason.title}</p>
                                    <p className="text-gray-200">{reason.reason}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="relative h-full w-full flex justify-center items-center">


                        {isAboveMediumScreens ? (<>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-call-man bg-cover bg-center opacity-75 h-full w-[50%] z-0"></div>


                            <div className="absolute right-24 flex flex-col items-center justify-center gap-4 w-1/4 h-1/2 border bg-primary-100 border-primary-300 z-10 shadow-md"
                            >
                                <div className="w-[60px] p-2 bg-primary-300 rounded-full flex items-center justify-center">
                                    <Mic size={42} color="white" />
                                </div>
                                <p className="text-gray-200 text-2xl font-bold">{strings.whyUsCall}</p>
                                <p className="text-gray-200 text-2xl font-bold">{strings.whyUsNumber}</p>
                                <motion.button className="w-1/2 h-10 text-gray-200 font-bold bg-primary-300 rounded-sm hover:text-neutral-900 hover:border hover:border-neutral-50"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ repeat: Infinity, duration: 300, ease: "easeInOut" }}
                                >
                                    {strings.whyUsButton}
                                </motion.button>
                            </div>
                        </>) : (<div className="mt-2 mb-2 flex flex-col items-center justify-center gap 2">
                            <p className="text-2xl text-gray-200 font-bold">{strings.whyUsCall}:</p>
                            <motion.button
                                className="mt-2 p-2 w-auto h-1/4 font-bold text-gray-200 bg-primary-300 rounded-sm hover:text-neutral-900 hover:border hover:border-neutral-50"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ repeat: Infinity, duration: 200, ease: "easeInOut" }}
                            >
                                {strings.whyUsButton}
                            </motion.button>
                        </div>)}

                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default WhyUs;
