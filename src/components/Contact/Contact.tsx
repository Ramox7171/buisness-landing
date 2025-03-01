
import { SelectedPage } from '../../shared/types.helper'
import { motion } from "framer-motion";
import * as strings from "../../shared/mock-content.strings.json";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ({ setSelectedPage }: Props) => {
    return (
        <section id="contact" className="relative w-full min-h-screen bg-neutral-900 flex flex-col items-center justify-start">
  <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
    className="w-full flex flex-col items-center sm:items-start justify-start py-12 px-4"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    }}
  >
    <div className="mt-12 px-2 flex flex-col items-center w-full h-[500px] bg-news-back bg-cover">
      <p className="my-4 font-bold text-primary-100">{strings.contactHelloSmall}</p>
      <p className="my-4 font-bold text-gray-200 text-4xl">{strings.contactHelloBig}</p>
      <div className="mt-24 mb-4 flex  justify-center items-center w-1/2 h-auto sm:w-full">
      <input type="text" placeholder="Email" id='email'
      className=" w-2/3 h-full py-2 px-2 border text-gray-200 border-neutral-700 bg-neutral-800 outline-none focus:bg-neutral-600 autofill:bg-primary-100 sm:w-full"
      />
      <button className="bg-primary-100 font-bold px-auto py-auto w-1/3 h-full border border-primary-300 hover:text-gray-200 hover:bg-primary-300 transition duration-300">{strings.contactNewsButton}</button>
      </div>
    </div>
    
    
    
  </motion.div>
</section>


)}

export default Contact;