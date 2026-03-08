// src/components/sections/Contact.tsx

import ContactForm from "../ContactForm";
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-container">
  <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-white uppercase font-bold mb-6 text-[clamp(2.25rem,7vw,5.5rem)] leading-[0.95] tracking-tight">
            {t('contact.title')}
          </h1>
        </div>

          {/* Main Content Layout */}
          <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start gap-8">
            {/* Left Column - Contact Info */}
            <div className="lg:flex-1 mb-8 lg:mb-0">
              <div className="space-y-6">
                {/* Contact Methods */}
                <div className=" border border-white/15 p-5 sm:p-6 md:p-8 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 rounded-lg">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-4">{t('contact.getintouch')}</h3>
                  <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <a href="https://github.com/itsminni" target="_blank" rel="noopener noreferrer" className="text-white/80 underline">GitHub: @itsminni</a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className=" border border-white/15 p-5 sm:p-6 md:p-8 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 rounded-lg">
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-4">{t('contact.followus')}</h3>
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
                          <a href="https://github.com/itsminni" target="_blank" rel="noopener noreferrer">
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
                <div className=" border border-white/15 p-5 sm:p-6 md:p-8 backdrop-blur-sm hover:bg-white/5 transition-all duration-300 rounded-lg">
                  <p className="text-white/40 text-[11px] sm:text-xs leading-relaxed">
                    {t('contact.privacy')}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:flex-1 lg:max-w-lg order-first lg:order-none">
              <div className=" border border-white/15 p-5 sm:p-6 md:p-8 backdrop-blur-sm  transition-all duration-300 rounded-lg">
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