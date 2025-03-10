
import { SelectedPage } from '../../shared/types.helper'
import { motion } from "framer-motion";
import * as strings from "../../shared/mock-content.strings.json";
import TestimonialsSlider from './TestimonialsSlider';


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Testimonials = ({ setSelectedPage }: Props) => {
  return (
    <section id="testimonials" className="relative w-full bg-neutral-900 flex flex-col items-center justify-start pb-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Testimonials)}
        className="w-full flex flex-col items-center justify-start py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-12 flex flex-col items-center w-full">
          <p className="my-4 font-bold text-primary-100">{strings.testimonialsHelloSmall}</p>
          <TestimonialsSlider />
        </div>
      </motion.div>
    </section>




  )
}

export default Testimonials