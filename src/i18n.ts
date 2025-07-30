import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traduzioni
const resources = {
  en: {
    translation: {
      contact: {
        title: "Contact Us",
        description: "Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.",
        email: "Email",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully. We'll be in touch.",
        emailRequired: "This field is mandatory",
        emailInvalid: "Please enter a valid email address",
        privacy: "By sending this message, you consent to the processing of the personal data provided (email address and message) exclusively to receive a response to your request."
      },
      projects: {
        title: "Selected Works",
        giano: {
          title: "GIANO",
          description: "BiLSTM family of models for gap filling in meteorological time series"
        },
        website: {
          title: "WEBSITE",
          description: "Design and development of group website"
        },
        comingSoon: "Coming soon",
        github: "View more on GitHub"
      }
    }
  },
  it: {
    translation: {
      contact: {
        title: "Contattaci",
        description: "Hai un progetto in mente o vuoi semplicemente salutare? Ci piacerebbe sentirti. Compila il modulo qui sotto e ti contatteremo il prima possibile.",
        email: "Email",
        message: "Messaggio",
        send: "Invia Messaggio",
        sending: "Invio in corso...",
        success: "Messaggio inviato con successo. Ti contatteremo presto.",
        emailRequired: "Questo campo è obbligatorio",
        emailInvalid: "Inserisci un indirizzo email valido",
        privacy: "Mandando questo messaggio, acconsenti al trattamento dei dati personali forniti (indirizzo email e messaggio) esclusivamente per ricevere una risposta alla tua richiesta."
      },
      projects: {
        title: "Lavori Selezionati",
        giano: {
          title: "GIANO",
          description: "Famiglia di modelli BiLSTM per il riempimento di lacune nelle serie temporali meteorologiche"
        },
        website: {
          title: "SITO WEB",
          description: "Progettazione e sviluppo del sito web del gruppo"
        },
        comingSoon: "Prossimamente",
        github: "Vedi di più su GitHub"
      }
    }
  }
};

i18n
  .use(LanguageDetector) // Rileva automaticamente la lingua del browser
  .use(initReactI18next) // Integrazione con React
  .init({
    resources,
    fallbackLng: 'en', // Lingua di fallback se non viene rilevata
    debug: false, // Metti true per debug durante sviluppo
    
    detection: {
      // Ordine di rilevamento: localStorage -> navigator.language -> fallback
      order: ['navigator', 'htmlTag'],
      caches: ['localStorage'], // Salva la scelta dell'utente
    },

    interpolation: {
      escapeValue: false, // React già escapa i valori
    },
  });

export default i18n;
