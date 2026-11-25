export type Language = "it" | "en";
export type Project = {
  id: string;

  name: string;
  period: string;
  description: string;
  role: string;
  highlights: string[];
  links: { label: string; href: string }[];
  results?: {
    title: string;
    description: string;
    metrics: { label: string; value: string }[];
  }[];
};

export type Content = {
  nav: string[];
  skip: string;
  headline: [string, string];
  bio: string;
  explore: string;
  contact: string;
  projectsTitle: string;
  featuredProjectsTitle: string;
  otherProjectsTitle: string;
  otherProjects: {
    id: string;
    name: string;
    status: string;
    description: string;
  }[];
  details: string;
  close: string;
  role: string;
  resultsTitle: string;
  aboutTitle: string;
  about: string[];
  toolkit: string;
  skills: { label: string; value: string }[];
  journeyTitle: string;
  journey: {
    date: string;
    title: string;
    place: string;
    description: string;
    link?: { label: string; href: string };
    links?: { label: string; href: string }[];
  }[];
  activitiesTitle: string;
  activities: {
    date: string;
    title: string;
    context: string;
    description: string;
    link?: { label: string; href: string };
    links?: { label: string; href: string }[];
  }[];
  contactTitle: string;
  contactText: string;
  projects: Project[];
};

export const content: Record<Language, Content> = {
  it: {
    nav: ["Progetti", "Chi sono", "Percorso", "Contatti"],
    skip: "Vai al contenuto",
    headline: ["Gabriele", "Mininni"],
    bio: "Studente al primo anno di Computer Science all’Università di Trento, con esperienza in ricerca sul machine learning e sviluppo di applicazioni.",
    explore: "Progetti",
    contact: "Scrivimi",
    projectsTitle: "Progetti",
    featuredProjectsTitle: "Progetti principali",
    otherProjectsTitle: "Altri progetti",
    otherProjects: [
      {
        id: "arthint",
        name: "ArtHint",
        status: "In sviluppo",
        description:
          "App educativa dedicata all’arte, sviluppata come progetto personale.",
      },
      {
        id: "telegram-bot",
        name: "Bot Telegram",
        status: "Progetto privato",
        description: "Bot Telegram per uso personale, sviluppato in Python.",
      },
    ],
    details: "Dettagli",
    close: "Chiudi",
    role: "Il mio contributo",
    resultsTitle: "Risultati del benchmark",
    aboutTitle: "Profilo e interessi.",
    about: [
      "Mi interessano l’ingegneria del software e il machine learning, soprattutto per le loro applicazioni nelle scienze naturali.",
      "La ricerca e lo sviluppo di app in gruppo sono un modo per costruire strumenti utili, confrontare le scelte tecniche ed esplorare ambiti diversi dell’informatica.",
    ],
    toolkit: "Competenze",
    skills: [
      {
        label: "Linguaggi",
        value: "Python, Swift, Java, C++, MATLAB, SQL, TypeScript",
      },
      {
        label: "ML & dati",
        value:
          "PyTorch, PyTorch Lightning, pandas, scikit-learn, matplotlib, TensorBoard",
      },
      { label: "Framework e piattaforme", value: "SwiftUI, ARKit, Appwrite" },
      { label: "Strumenti", value: "Git, Linux, Docker, CI/CD" },
      {
        label: "Lingue",
        value: "Italiano: madrelingua · Inglese: Cambridge C1 Advanced",
      },
    ],
    journeyTitle: "Studi ed esperienze",
    journey: [
      {
        date: "2026 — oggi",
        title: "Laurea in Computer Science",
        place: "Università di Trento",
        description:
          "Laurea triennale in corso, con insegnamenti in lingua inglese.",
      },
      {
        date: "Luglio 2026",
        title: "SORINT Summer Campus",
        place: "SORINT",
        description:
          "Percorso di due settimane per 18 partecipanti selezionati, su infrastrutture IT, cloud, cybersecurity, protezione dei dati, AI e DevOps.",
        link: {
          label: "Scopri SORINT4School",
          href: "https://www.sorint.com/en/our-culture/sorint4school/",
        },
      },
      {
        date: "2025 — 2026",
        title: "WebValley & Giano",
        place: "Fondazione Bruno Kessler",
        description:
          "Selezione tra i 12 partecipanti a livello nazionale per WebValley 2025. Ricerca sui dati meteorologici con il team Giano, proseguita dopo la scuola estiva.",
        link: {
          label: "Sito ufficiale WebValley",
          href: "https://webvalley.fbk.eu",
        },
        links: [
          {
            label: "Articolo finale WebValley 2025",
            href: "https://magazine.fbk.eu/en/news/challenges-that-make-you-grow/",
          },
        ],
      },
      {
        date: "Febbraio 2025",
        title: "Tirocinio in sviluppo software",
        place: "QUIX S.R.L.",
        description: "40 ore di programmazione Java e lavoro in team.",
      },
      {
        date: "2021 — 2026",
        title: "Liceo scientifico · Scienze applicate",
        place: "IIS “F. Corni”",
        description: "Diploma di liceo scientifico, opzione scienze applicate.",
      },
    ],
    activitiesTitle: "Attività selezionate",
    // Selected activities in reverse chronology.
    activities: [
      {
        date: "2026",
        title: "Festival Informatici Senza Frontiere",
        context: "Festival · Rovereto",
        description:
          "Assegnazione di una borsa di partecipazione per il Festival Informatici Senza Frontiere 2026.",
        link: {
          label: "Sito ufficiale del festival",
          href: "https://festival.informaticisenzafrontiere.org/",
        },
        links: [
          {
            label: "Leggi l’elaborato della candidatura",
            href: "/documents/festival-scholarship.pdf",
          },
        ],
      },
      {
        date: "Febbraio — aprile 2025",
        title: "Green Horizon",
        context: "UniMoRe · FEM · Festival PLAY",
        description:
          "Sviluppo collaborativo di un gioco educativo sulla sostenibilità con esperti di UniMoRe e sviluppatori di FEM, presentato al Festival PLAY 2025.",
        link: {
          label: "Scopri il progetto",
          href: "https://community.fem.digital/t/green-horizon-un-videogioco-sullambiente-creato-da-4-scuole/2660",
        },
      },
      {
        date: "Dicembre 2024 — aprile 2025",
        title: "Olimpiadi Italiane di Informatica",
        context: "Competizione",
        description: "Qualificazione alla fase regionale.",
        link: {
          label: "Sito ufficiale",
          href: "https://www.olimpiadi-informatica.it/",
        },
      },
      {
        date: "Febbraio — aprile 2024",
        title: "Navigating the digital world: do you really feel safe?",
        context: "Gazzetta di Modena · Scuola 2030",
        description:
          "Coautore di un articolo su privacy, sicurezza online e software open source, scritto con ingegneri informatici per Scuola 2030.",
        link: {
          label: "Visualizza l’articolo",
          href: "/documents/gazzetta.pdf",
        },
      },
    ],
    contactTitle: "Contatti",
    contactText: "Puoi contattarmi via email.",
    projects: [
      {
        id: "giano",

        name: "Giano",
        period: "2025 — 2026",
        description:
          "Progetto di ricostruzione dei dati mancanti delle stazioni meteorologiche, nato a FBK WebValley. La versione 2.0 usa un modello multivariabile. Giano è arrivato in finale al Premio G.F. Marilli 2026.",
        role: "Ricerca, sviluppo del modello e sito web",
        highlights: [
          "Sviluppo con il team del prototipo BiLSTM a WebValley 2025, usando osservazioni Meteotrentino e dati ERA5. Coordinamento della successiva evoluzione verso un ensemble multivariabile basato su ImputeFormer.",
          "Partecipazione a un percorso laboratoriale con psicologi e designer di Artigianelli su UX design, lavoro di squadra e public speaking, applicati allo sviluppo del progetto.",
          "Pubblicazione di pesi, codice e notebook per riprodurre addestramento, ricostruzione e valutazione.",
          "Sviluppo del sito bilingue per esplorare le stazioni e confrontare le misure con i valori ricostruiti.",
        ],
        results: [
          {
            title: "Ricostruzione in Trentino",
            description:
              "Errore medio assoluto sulle ore nascoste in 480 interruzioni simulate nel 2020, da 1 ora a 90 giorni, con contesto locale e riferimento di stazione attivi. L’errore dell’umidità è in punti percentuali.",
            metrics: [
              { label: "Temperatura", value: "1,894 °C" },
              { label: "Umidità relativa", value: "12,573 %" },
              { label: "Pressione", value: "4,358 hPa" },
              { label: "Precipitazione", value: "0,112 mm" },
            ],
          },
          {
            title: "Test su stazioni tedesche nel 2026",
            description:
              "Con le stazioni vicine attive, Giano ha ridotto l’errore rispetto all’interpolazione per tutte e sei le variabili nei buchi di 7, 30 e 90 giorni.",
            metrics: [
              { label: "Stazioni", value: "16" },
              { label: "Interruzioni simulate", value: "432" },
            ],
          },
        ],
        links: [
          {
            label: "Esplora il sito",
            href: "https://itsminni.github.io/giano/",
          },
          {
            label: "Codice su GitHub",
            href: "https://github.com/itsminni/giano",
          },
          {
            label: "Release 2.0",
            href: "https://github.com/itsminni/giano/releases/tag/v2.0.0",
          },
        ],
      },
      {
        id: "fyre",

        name: "Fyre",
        period: "2026",
        description:
          "App per conoscere persone, chattare e organizzare eventi. Un progetto di gruppo per iOS, Android e web.",
        role: "Architettura, UI/UX, sviluppo iOS e backend",
        highlights: [
          "Ho contribuito a definire l’architettura di Fyre e le scelte di design che guidano l’esperienza d’uso.",
          "Ho sviluppato l’app iOS in Swift e SwiftUI e ho gestito il backend su Appwrite.",
          "Il resto del team ha sviluppato l’app Android in Kotlin e la versione web.",
        ],
        links: [
          { label: "Codice su GitHub", href: "https://github.com/itsminni/fyre" },
        ],
      },
    ],
  },
  en: {
    nav: ["Projects", "About", "Background", "Contact"],
    skip: "Skip to content",
    headline: ["Gabriele", "Mininni"],
    bio: "First-year Computer Science student at the University of Trento, with practical experience in machine learning research and application development.",
    explore: "Projects",
    contact: "Get in touch",
    projectsTitle: "Projects",
    featuredProjectsTitle: "Featured projects",
    otherProjectsTitle: "Other projects",
    otherProjects: [
      {
        id: "arthint",
        name: "ArtHint",
        status: "In development",
        description:
          "Educational app about art, developed as a personal project.",
      },
      {
        id: "telegram-bot",
        name: "Telegram Bot",
        status: "Private project",
        description: "Telegram bot for personal use, built with Python.",
      },
    ],
    details: "Details",
    close: "Close",
    role: "My contribution",
    resultsTitle: "Benchmark results",
    aboutTitle: "Profile and interests.",
    about: [
      "I’m interested in software engineering and machine learning, particularly their applications in the natural sciences.",
      "Research and collaborative app development are ways to build useful tools, discuss technical choices and explore different areas of computer science.",
    ],
    toolkit: "Skills",
    skills: [
      {
        label: "Programming",
        value: "Python, Swift, Java, C++, MATLAB, SQL, TypeScript",
      },
      {
        label: "ML & data",
        value:
          "PyTorch, PyTorch Lightning, pandas, scikit-learn, matplotlib, TensorBoard",
      },
      { label: "Frameworks & platforms", value: "SwiftUI, ARKit, Appwrite" },
      { label: "Tools", value: "Git, Linux, Docker, CI/CD" },
      {
        label: "Spoken languages",
        value: "Italian: native · English: Cambridge C1 Advanced",
      },
    ],
    journeyTitle: "Education & experience",
    journey: [
      {
        date: "2026 — present",
        title: "BSc in Computer Science",
        place: "University of Trento",
        description: "BSc in progress, taught in English.",
      },
      {
        date: "July 2026",
        title: "SORINT Summer Campus",
        place: "SORINT",
        description:
          "Selected as one of 18 participants in a two-week programme on IT infrastructure, cloud, cybersecurity, data protection, AI and DevOps.",
        link: {
          label: "Learn about SORINT4School",
          href: "https://www.sorint.com/en/our-culture/sorint4school/",
        },
      },
      {
        date: "2025 — 2026",
        title: "WebValley & Giano",
        place: "Fondazione Bruno Kessler",
        description:
          "Selected as one of 12 participants nationally for WebValley 2025. Research on weather data with the Giano team continued after the summer school.",
        link: {
          label: "Official WebValley website",
          href: "https://webvalley.fbk.eu",
        },
        links: [
          {
            label: "WebValley 2025 final article",
            href: "https://magazine.fbk.eu/en/news/challenges-that-make-you-grow/",
          },
        ],
      },
      {
        date: "February 2025",
        title: "Software development internship",
        place: "QUIX S.R.L.",
        description: "40 hours of Java programming and collaborative development.",
      },
      {
        date: "2021 — 2026",
        title: "Scientific high school · Applied sciences",
        place: "IIS “F. Corni”",
        description: "Scientific high-school diploma, applied-sciences track.",
      },
    ],
    activitiesTitle: "Selected activities",
    // Selected activities in reverse chronology.
    activities: [
      {
        date: "2026",
        title: "Festival Informatici Senza Frontiere",
        context: "Festival · Rovereto",
        description:
          "Awarded a participation scholarship for the Festival Informatici Senza Frontiere 2026.",
        link: {
          label: "Official festival website",
          href: "https://festival.informaticisenzafrontiere.org/",
        },
        links: [
          {
            label: "Read the scholarship essay",
            href: "/documents/festival-scholarship.pdf",
          },
        ],
      },
      {
        date: "February — April 2025",
        title: "Green Horizon",
        context: "UniMoRe · FEM · PLAY Festival",
        description:
          "Collaborative development of an educational game about sustainability with UniMoRe experts and FEM developers, presented at PLAY Festival 2025.",
        link: {
          label: "View the project",
          href: "https://community.fem.digital/t/green-horizon-un-videogioco-sullambiente-creato-da-4-scuole/2660",
        },
      },
      {
        date: "December 2024 — April 2025",
        title: "Italian Olympiad in Informatics",
        context: "Competition",
        description: "Qualification for the regional stage.",
        link: {
          label: "Official website",
          href: "https://www.olimpiadi-informatica.it/",
        },
      },
      {
        date: "February — April 2024",
        title: "Navigating the digital world: do you really feel safe?",
        context: "Gazzetta di Modena · Scuola 2030",
        description:
          "Co-authored an article on privacy, online security and open-source software with software engineers for Scuola 2030.",
        link: {
          label: "View the article",
          href: "/documents/gazzetta.pdf",
        },
      },
    ],
    contactTitle: "Contact",
    contactText: "You can contact me by email.",
    projects: [
      {
        id: "giano",

        name: "Giano",
        period: "2025 — 2026",
        description:
          "A project to reconstruct missing weather station data, started at FBK WebValley. Version 2.0 uses a multivariate model. Giano reached the final of the Premio G.F. Marilli 2026.",
        role: "Research, model development and website",
        highlights: [
          "Development of the BiLSTM prototype with the team at WebValley 2025 using Meteotrentino observations and ERA5 data. Coordination of the subsequent move to a multivariate ensemble based on ImputeFormer.",
          "Participation in a workshop programme with psychologists and Artigianelli designers on UX design, teamwork and public speaking, applied to developing the project.",
          "Publication of model weights, code and notebooks to reproduce training, reconstruction and evaluation.",
          "Development of the bilingual website to explore stations and compare measurements with reconstructed values.",
        ],
        results: [
          {
            title: "Gap filling in Trentino",
            description:
              "Mean absolute error on the hidden observations from 480 simulated outages in 2020, lasting from one hour to 90 days, with both station options enabled. Humidity error is measured in percentage points.",
            metrics: [
              { label: "Temperature", value: "1.894 °C" },
              { label: "Relative humidity", value: "12.573 %" },
              { label: "Pressure", value: "4.358 hPa" },
              { label: "Precipitation", value: "0.112 mm" },
            ],
          },
          {
            title: "2026 test on German stations",
            description:
              "With neighbouring stations reporting, Giano had lower error than interpolation on all six variables for gaps of 7, 30 and 90 days.",
            metrics: [
              { label: "Stations", value: "16" },
              { label: "Simulated outages", value: "432" },
            ],
          },
        ],
        links: [
          {
            label: "Explore the website",
            href: "https://itsminni.github.io/giano/",
          },
          {
            label: "Code on GitHub",
            href: "https://github.com/itsminni/giano",
          },
          {
            label: "Release 2.0",
            href: "https://github.com/itsminni/giano/releases/tag/v2.0.0",
          },
        ],
      },
      {
        id: "fyre",

        name: "Fyre",
        period: "2026",
        description:
          "An app for meeting people, chatting and organising events, built as a team for iOS, Android and web.",
        role: "Architecture, UI/UX, iOS development and backend",
        highlights: [
          "I helped define Fyre’s architecture and shape its design and user experience.",
          "I built the iOS app in Swift and SwiftUI and managed the Appwrite backend.",
          "The rest of the team built the Android app in Kotlin and the web version.",
        ],
        links: [
          { label: "Code on GitHub", href: "https://github.com/itsminni/fyre" },
        ],
      },
    ],
  },
};
