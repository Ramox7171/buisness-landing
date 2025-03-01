
import { SelectedPage } from '../../shared/types.helper'
import { motion } from "framer-motion";
import * as strings from "../../shared/mock-content.strings.json";
import { services } from '../../shared/mock.data';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Services = ({ setSelectedPage }: Props) => {
    return (
        <section id="services" className="relative w-full min-h-screen bg-neutral-900 flex flex-col items-center justify-center">
  <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
    className="w-full flex flex-col items-center justify-center py-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    }}
  >
    <div className="mt-6 flex flex-col items-center w-full h-auto">
      <p className="my-2 font-bold text-primary-100">{strings.servicesHelloSmall}</p>
      <p className="mt-4 mb-2 font-bold text-gray-200 text-4xl">{strings.servicesHelloBig}</p>
    </div>
    
    <div className="w-5/6 flex flex-wrap justify-center gap-6">
      {services.map((service) => (
        <div
          key={service.id}
          className="p-6 w-full sm:w-[45%] md:w-[30%] flex flex-col items-center border-neutral-700 border-2 rounded-lg bg-neutral-800"
        >
          <div className="mt-2 mb-4 px-4 py-4 bg-primary-100 rounded-full flex items-center justify-center">
            {service.icon}
          </div>
          <p className="font-bold text-xl text-gray-200 text-center">{service.title}</p>
          <p className="mt-2 mb-4 text-gray-400 text-center">{service.description}</p>
          <button className="mt-2 px-4 py-2 w-auto font-bold text-gray-200 bg-primary-100 rounded-md hover:bg-primary-300 transition">
            {service.buttonText}
          </button>
        </div>
      ))}
    </div>
  </motion.div>
</section>


)}

export default Services