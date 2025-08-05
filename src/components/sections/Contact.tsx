// src/components/sections/Contact.tsx

import ContactForm from "../ContactForm";
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-bold text-white uppercase">
            {t('contact.title')}
          </h1>
        </div>

          {/* Main Content Layout */}
          <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">
            {/* Left Column - Contact Info */}
            <div className="lg:flex-1 mb-8 lg:mb-0">
              <div className="space-y-6">
                {/* Contact Methods */}
                <div className=" border border-white/15 p-6 md:p-8 backdrop-blur-sm hover:bg-white/5 transition-all duration-300">
                  <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">{t('contact.getintouch')}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white/80">info@vallinx.eu</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className=" border border-white/15 p-6 md:p-8 backdrop-blur-sm hover:bg-white/5 transition-all duration-300">
                  <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">{t('contact.followus')}</h3>
                  <div className="flex flex-wrap gap-3">
                    {['LinkedIn', 'Twitter', 'Instagram', 'GitHub'].map((social) => (
                      <span
                        key={social}
                        className={social === 'GitHub' ? 
                          "px-4 py-2 border bg-white/5 border-white/15 rounded-full backdrop-blur-sm hover:bg-white/20 cursor-pointer text-sm transition-all duration-300" : 
                          "px-4 py-2 border hover:line-through bg-white/5 border-white/15 rounded-full backdrop-blur-sm hover:bg-white/20 cursor-pointer text-sm transition-all duration-300"
                        }
                      >
                        {social === 'GitHub' ? (
                          <a href="https://github.com/vallinx" target="_blank" rel="noopener noreferrer">
                            {social}
                          </a>
                        ) : (
                          <span>{social}</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className=" border border-white/15 p-6 md:p-8 backdrop-blur-sm hover:bg-white/5 transition-all duration-300">
                  <p className="text-white/40 text-xs leading-relaxed">
                    {t('contact.privacy')}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:flex-1 lg:max-w-lg">
              <div className=" border border-white/15 p-6 md:p-8 backdrop-blur-sm  transition-all duration-300">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        <style>{`
          .contact-container {
            position: relative;
            min-height: 100vh;
            width: 100%;
            background: #000;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 4rem 1rem;
            overflow: hidden;
          }
          
          @media (min-width: 640px) {
            .contact-container {
              padding: 4rem 2rem;
            }
          }
          
          @media (min-width: 1024px) {
            .contact-container {
              padding: 6rem 2rem;
            }
          }
        `}</style>
    </div>
  );
}

export default Contact;