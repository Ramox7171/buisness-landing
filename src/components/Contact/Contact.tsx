import { SelectedPage } from '../../shared/types.helper'
import { motion } from "framer-motion";
import * as strings from "../../shared/mock-content.strings.json";
import { companyLinks, footerLinks, services, supportLinks } from '../../shared/mock.data';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section id="contact" className="relative w-full bg-neutral-900 flex flex-col items-center mt-20">
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
        {/* Contact Section */}
        <div className="mt-12 px-6 sm:px-12 flex flex-col items-center w-full min-h-[500px] bg-news-back bg-cover">
          <p className="my-4 font-bold text-primary-100 text-center">{strings.contactHelloSmall}</p>
          <p className="my-4 font-bold text-gray-200 text-2xl sm:text-4xl">{strings.contactHelloBig}</p>
          
          {/* Input & Button */}
          <div className="mt-12 sm:mt-24 mb-4 w-full sm:w-2/3 flex flex-col sm:flex-row gap-3 sm:gap-0">
            <input
              type="text"
              placeholder="Email"
              id="email"
              className="w-full sm:w-2/3 h-12 py-2 px-4 border text-gray-200 border-neutral-700 bg-neutral-800 outline-none focus:bg-neutral-600"
            />
            <button className="w-full sm:w-1/3 h-12 bg-primary-100 font-bold border border-primary-300 hover:text-gray-200 hover:bg-primary-300 transition duration-300">
              {strings.contactNewsButton}
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full flex justify-center items-center bg-neutral-800 text-gray-200 mt-16 sm:mt-20">
          <div className="w-full max-w-6xl flex flex-col px-6 md:px-12 py-10">
            
            {/* Upper Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
              
              {/* Logo + Social Media */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold uppercase">{strings.contactRamoxLogo}</h2>
                <p className="mt-4 text-sm md:text-base font-light">{strings.lorem}</p>
                
                {/* Social Media Icons */}
                <div className="flex justify-center md:justify-start gap-4 mt-4">
                  {footerLinks.map((link) => (
                    <a key={link.title} href={link.href} target="_blank">
                      <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center hover:bg-primary-100 transition duration-200">
                        <img src={link.icon} className="w-5 h-5" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Links Section */}
              <div className="w-full md:w-1/2 flex flex-col sm:flex-row justify-between gap-6 text-center md:text-left">
                
                {/* Services */}
                <div className="flex flex-col">
                  <p className="font-bold text-xl">{strings.contactListServices}</p>
                  <ul className="flex flex-col gap-2 text-sm md:text-base font-light">
                    {services.map((service) => (
                      <li key={service.id} className="hover:text-primary-100 transition cursor-pointer">
                        {service.title}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div className="flex flex-col">
                  <p className="font-bold text-xl">{strings.contactListCompany}</p>
                  <ul className="flex flex-col gap-2 text-sm md:text-base font-light">
                    {supportLinks.map((support, index) => (
                      <li key={index} className="hover:text-primary-100 transition cursor-pointer">
                        {support}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support */}
                <div className="flex flex-col">
                  <p className="font-bold text-xl">{strings.contactListSupport}</p>
                  <ul className="flex flex-col gap-2 text-sm md:text-base font-light">
                    {companyLinks.map((company, index) => (
                      <li key={index} className="hover:text-primary-100 transition cursor-pointer">
                        {company}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Footer Bottom (Copyright) */}
            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-700 mt-10 pt-6 text-sm opacity-60 text-center sm:text-left">
              <p className="mb-2 sm:mb-0">{strings.contactCopyright} © 2025</p>
              <p>{strings.contactSuggestions}</p>
            </div>
          </div>
        </footer>

      </motion.div>
    </section>
  );
};

export default Contact;
