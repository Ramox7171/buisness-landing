
import { SelectedPage } from '../../shared/types.helper'
import { motion } from "framer-motion";
import * as strings from "../../shared/mock-content.strings.json";
import { companyLinks, footerLinks, services, supportLinks } from '../../shared/mock.data';



type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Contact = ({ setSelectedPage }: Props) => {
  return (
    <section id="contact" className="relative w-full bg-neutral-900 flex flex-col items-center mt-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="w-full h-screen flex flex-col items-center sm:items-start justify-start py-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-12 px-12 flex flex-col items-center w-full min-h-[500px] bg-news-back bg-cover">
          <p className="my-4 font-bold text-primary-100 text-center">{strings.contactHelloSmall}</p>
          <p className="my-4 font-bold text-gray-200 text-4xl">{strings.contactHelloBig}</p>
          <div className="mt-24 mb-4 mx-12 flex justify-center items-center w-full sm:w-full">
            <input
              type="text"
              placeholder="Email"
              id='email'
              className="w-2/3 h-12 py-2 px-2 border text-gray-200 border-neutral-700 bg-neutral-800 outline-none focus:bg-neutral-600 sm:w-full"
            />
            <button className="bg-primary-100 font-bold w-1/3 h-12 border border-primary-300 hover:text-gray-200 hover:bg-primary-300 transition duration-300">
              {strings.contactNewsButton}
            </button>
          </div>
        </div>
        <footer className="w-full h-full flex justify-center items-center">
          {/* Footer */}

          <div
            className="w-full h-full  flex flex-col"
          >
            {/* MAIN FOOTER CONTAINER */}
            <div className="mx-auto flex items-center justify-around">
              {/* UPPER */}
              <div className=" w-1/2 h-auto mt-16 p-16 flex flex-col text-gray-200">
                {/* LOGO AND ICONS AND SMALL IPSUM */}
                <h2 className="text-5xl font-montserrat font-bold uppercase">{strings.contactRamoxLogo}</h2>
                <p className="mt-6 font-bold w-5/6">{strings.lorem}</p>
                <div className=" w-5/6 mt-4 flex gap-5">
                  {footerLinks.map((link) => (
                    <a key={link.title} href={link.href} target='_blank'>
                      <div className="w-12 h-12 bg-neutral-400 rounded-full flex items-center justify-center p-1 hover:bg-primary-100 transition duration-200">
                        <img src={link.icon} className="w-6 h-6" />
                      </div>
                    </a>
                  ))}

                </div>



              </div>

              <div className="w-1/2 flex justify-evenly gap-10 mt-16 p-16 text-gray-200 ">
                {/* LINKS */}
                <div className="flex flex-col">
                  <p className="font-bold text-2xl mb-2 mt-2">{strings.contactListServices}</p>
                <ul className="flex flex-col justify-center gap-2 font-light font-dmsans">
                  {services.map((service) => (
                    <li key={service.id} className="hover:cursor-pointer hover:text-primary-100 transition duration-200">
                      {service.title}
                    </li>
                  ))}
                </ul>
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-2xl mb-2 mt-2">{strings.contactListCompany}</p>
                <ul className="flex flex-col justify-center gap-2 font-light font-dmsans">
                  {supportLinks.map((support,index) => (
                    <li key={index} className="hover:cursor-pointer hover:text-primary-100 transition duration-200" >
                      {support}
                    </li>
                  ))}
                </ul>
                </div>
                
                <div className="flex flex-col">
                  <p className="font-bold text-2xl mb-2 mt-2">{strings.contactListSupport}</p>
                <ul className="flex flex-col justify-center gap-2 font-light font-dmsans">
                  {companyLinks.map((company,index) => (
                    <li key={index} className="hover:cursor-pointer hover:text-primary-100 transition duration-200" >
                      {company}
                    </li>
                  ))}
                </ul>
                </div>

              </div>

            </div>

            <div className="flex justify-between items-center p-6 w-full border-t border-t-gray-600">
              {/* SMALL copyright */}
              <p className="text-gray-200 font-light font-dmsans opacity-60">{strings.contactCopyright}</p>
              <div className="inline-block">
              <p className="text-gray-200 font-light font-dmsans opacity-60">{strings.contactSuggestions}</p>
              
              </div>
              
            </div>

          </div>
        </footer>
      </motion.div>
    </section>



  )
}

export default Contact;