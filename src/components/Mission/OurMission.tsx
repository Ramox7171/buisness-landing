
import { SelectedPage } from '../../shared/types.helper';
import {motion } from 'framer-motion';
import * as strings from "../../shared/mock-content.strings.json"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurMission = ({setSelectedPage}:Props) => {
  return (
    <section id="ourmission" className="md:mt-20 md:mb-20 w-full">

    <motion.div className="flex flex-col md:flex-row w-full justify-center items-center h-full"
    onViewportEnter={() => setSelectedPage(SelectedPage.OurMission)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    }}>
      <div className="w-1/2 h-auto px-8">
      <div className="flex flex-col gap-3 w-3/5 my-24 mx-12">
      <p className="mb-2 mt-4 sm:mt-0 text-left font-bold text-primary-100">{strings.ourMissionSmall}</p>
      <h1 className=" mb-2 text-4xl md:text-5xl font-montserrat font-bold text-white">{strings.ourMissionBig}</h1>
      <p className="mx-auto mt-5 mb-2 font-bold text-white">{strings.loremMedium}</p>
      <button
    className=" max-w-40 max-h-20 mt-4 px-2 py-2 bg-primary-100 text-white rounded-lg  hover:bg-primary-300 transition duration-300"
    >{strings.missonDiscover}</button>
      
      </div>
      </div>
      <div className="w-1/2 flex justify-center align-center bg-red-300 h-auto">
      <div className="flex ">
        <div>image</div><div> TEKST</div>
        <div>tekst</div><div>image</div>
        <div>tekst</div><div>image</div>
      </div>
      
      </div>
    </motion.div>
    </section>
  )
}

export default OurMission