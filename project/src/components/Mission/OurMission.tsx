import { SelectedPage } from '../../shared/types.helper';
import { motion } from 'framer-motion';
import * as strings from "../../shared/mock-content.strings.json";
import biznes from "../../assets/biznes.png";
import consultant from "../../assets/consultant.png";
import phone from "../../assets/phone.png";
import useMediaQuery from '../../hooks/useMediaQuery';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurMission = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1265px)");

  return (
    <section id="ourmission" className="w-full min-h-screen flex items-center overflow-hidden">
      <motion.div
        className="flex flex-col md:flex-row flex-wrap w-full justify-center items-center h-full"
        onViewportEnter={() => setSelectedPage(SelectedPage.OurMission)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}>

        <div className="md:w-1/2 w-5/6 h-auto md:px-8 px-0">
          <div className="flex flex-col gap-3 w-3/5 my-24 mx-12">
            <p className="mb-2 mt-4 sm:mt-0 text-left font-bold text-primary-100">{strings.ourMissionSmall}</p>
            <h1 className="mb-2 text-4xl md:text-5xl font-montserrat font-bold text-white">{strings.ourMissionBig}</h1>
            <p className="mx-auto mt-5 mb-2 font-bold text-white">{strings.loremMedium}</p>
            <button className="max-w-40 max-h-20 mt-4 px-2 py-2 bg-primary-100 text-white rounded-lg hover:bg-primary-300 transition duration-300">
              {strings.missonDiscover}
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center h-auto">
          {isAboveMediumScreens ? (
            <div className="flex flex-col w-[800px] bg-neutral-900 mx-auto">
              <div className="flex flex-row items-center gap-5 hover:cursor-pointer hover:border hover:border-primary-300">
                <img src={phone} className="w-[400px]" />
                <div className="m-2 text-white w-full">
                  <p className="text-4xl font-bold mb-4">{strings.missionPhoneBig}</p>
                  <p>{strings.missionPhoneSmall}</p>
                </div>
              </div>

              <div className="flex">
                <div className="flex items-center justify-between w-full bg-neutral-700 hover:cursor-pointer hover:border hover:border-primary-300">
                  <img src={biznes} className="w-[150px]" />
                  <div className="flex flex-col w-full px-4 text-white gap-3">
                    <p className="text-xl font-bold">{strings.missionMeetingBig}</p>
                    <p>{strings.missionMeetingSmall}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full bg-neutral-800 hover:cursor-pointer hover:border hover:border-primary-300">
                  <div className="flex flex-col px-4 text-white gap-3">
                    <p className="text-xl font-bold">{strings.missionConsulBig}</p>
                    <p>{strings.missionConsulSmall}</p>
                  </div>
                  <img src={consultant} className="w-[150px]" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full gap-6 h-auto md:py-2 p-0 text-white">
              <div className="option flex flex-row w-full gap-2 hover:text-primary-100 hover:cursor-pointer">
                <img src={phone} className="w-1/3 h-1/3" />
                <div className="flex flex-col flex-1">
                  <p className="text-xl font-bold mb-4">{strings.missionPhoneBig}</p>
                  <p>{strings.missionPhoneSmall}</p>
                </div>
              </div>
              <div className="option flex flex-row w-full gap-2 hover:text-primary-100 hover:cursor-pointer">
                <img src={biznes} className="w-1/3 h-1/3" />
                <div className="flex flex-col flex-1">
                  <p className="text-xl font-bold mb-4">{strings.missionMeetingBig}</p>
                  <p>{strings.missionMeetingSmall}</p>
                </div>
              </div>
              <div className="option flex flex-row w-full gap-2 hover:text-primary-100 hover:cursor-pointer">
                <img src={consultant} className="w-1/3 h-1/3" />
                <div className="flex flex-col flex-1">
                  <p className="text-xl font-bold mb-4">{strings.missionConsulBig}</p>
                  <p>{strings.missionConsulSmall}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  )
}

export default OurMission;