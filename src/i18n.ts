import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      hero: {
        greeting: "HI, I'M",
        name: "MINNI",
        subtitle: "developer × creative",
        explore: "Explore",
        aboutMe: "About Me",
      },
      about: {
        title: "About Me",
        bio: "I'm Gabriele — developer, tinkerer, and maker of things that work (aka Minni). I love building tools at the intersection of data science and software engineering. From deep learning models for meteorological forecasting to creative side projects, I enjoy turning complex ideas into clean, working code. WebValley alumni (2025). Regional finalist, Olimpiadi Italiane di Informatica (2025). Participant, Olimpiadi Italiane di Intelligenza Artificiale (2025).",
        location: "Based in Italy",
        nickname: "aka Minni",
      },
      projects: {
        title: "Selected Works",
        giano: {
          title: "GIANO",
          description: "BiLSTM model for gap filling in meteorological time series — WebValley × MeteoTrentino",
        },
        gianoReimagined: {
          title: "GIANO Reimagined",
          description: "Transformer-based model for enhanced meteorological data imputation",
        },
        arthint: {
          title: "ArtHint",
          description: "AR art viewer with constructive analysis for building visual memory and critical eye",
        },
        fyre: {
          title: "Fyre",
          description: "Full-stack mobile dating app (high-school project) — Android, iOS, backend & database",
        },
        badvisor: {
          title: "BAdvisor",
          description: "Real-time stock trading advisor with Telegram alerts",
        },
        website: {
          title: "This Website",
          description: "Personal portfolio built with React, Vite, Tailwind & Framer Motion.",
        },
        javaWorks: {
          title: "Java Works",
          description: "Small Java projects: a utilities library and a simple library app (Swing).",
        },
        aiOlympiad: {
          title: "La scuola dopo l'alluvione",
          description: "Brief write-up of my submission to the Olimpiadi Italiane di Intelligenza Artificiale (2025).",
        },
        github: "View more on GitHub",
        groupProject: "Group project",
        personalProject: "Personal project",
      },
    },
  },
  it: {
    translation: {
      hero: {
        greeting: "CIAO, SONO",
        name: "MINNI",
        subtitle: "developer × creativo",
        explore: "Esplora",
        aboutMe: "Chi Sono",
      },
      about: {
        title: "Chi Sono",
        bio: "Sono Gabriele — sviluppatore, smanettone e creatore di cose che funzionano (aka Minni). Mi piace costruire strumenti all'intersezione tra data science e software engineering. Dai modelli di deep learning per le previsioni meteorologiche ai side project creativi, trasformo idee complesse in codice pulito e funzionante. WebValley alumni (2025). Finalista regionale, Olimpiadi Italiane di Informatica (2025). Partecipante, Olimpiadi Italiane di Intelligenza Artificiale (2025).",
        location: "Basato in Italia",
        nickname: "aka Minni",
      },
      projects: {
        title: "Lavori Selezionati",
        giano: {
          title: "GIANO",
          description: "Modello BiLSTM per il riempimento di lacune nelle serie temporali meteorologiche — WebValley × MeteoTrentino",
        },
        gianoReimagined: {
          title: "GIANO Reimagined",
          description: "Modello transformer per l'imputazione avanzata di dati meteorologici",
        },
        arthint: {
          title: "ArtHint",
          description: "Visualizzatore AR di opere d'arte con analisi costruttiva per memoria visiva e spirito critico",
        },
        fyre: {
          title: "Fyre",
          description: "App di incontri full-stack (progetto liceale) — Android, iOS, backend e database",
        },
        badvisor: {
          title: "BAdvisor",
          description: "Advisor real-time per il trading azionario con segnali su Telegram",
        },
        website: {
          title: "Questo Sito",
          description: "Portfolio personale costruito con React, Vite, Tailwind e Framer Motion.",
        },
        javaWorks: {
          title: "Lavori Java",
          description: "Piccoli progetti Java: una libreria di utility e una semplice app per biblioteca (Swing).",
        },
        aiOlympiad: {
          title: "La scuola dopo l'alluvione",
          description: "Breve pagina sulla mia submission alle Olimpiadi Italiane di Intelligenza Artificiale (2025).",
        },
        github: "Vedi di più su GitHub",
        groupProject: "Progetto di gruppo",
        personalProject: "Progetto personale",
      },
    },
  },
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
