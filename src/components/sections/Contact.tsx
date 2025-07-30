import ContactForm from "../ContactForm";
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex  justify-between items-center bg-black px-8 py-16">
      <div className="min-w-3xl flex mx-auto  justify-between">
        <div className="flex flex-col justify-around">
          <div className="border border-white/10 p-8 rounded-lg">
            <h2 className="text-white text-3xl font-light tracking-widest  uppercase">
              {t('contact.title')}
            </h2>
            <p className="text-white/60 mt-4 max-w-sm">
              {t('contact.description')}
            </p>
          </div>

          <div className="border border-white/10 p-8 rounded-lg mt-8">
            <p className="text-white/40 text-xs leading-relaxed max-w-sm">
              {t('contact.privacy')}
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
