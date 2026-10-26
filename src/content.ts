export type Language = "it" | "en";
export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  period: string;
  description: string;
  tags: string[];
  role: string;
  paragraphs: string[];
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
  selected: string;
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
  aboutLabel: string;
  aboutTitle: string;
  about: string[];
  toolkit: string;
  skills: { label: string; value: string }[];
  journeyLabel: string;
  journeyTitle: string;
  journey: {
    date: string;
    title: string;
    place: string;
    description: string;
    link?: { label: string; href: string };
    links?: { label: string; href: string }[];
  }[];
  activitiesLabel: string;
  activitiesTitle: string;
  activities: {
    date: string;
    title: string;
    context: string;
    description: string;
    link?: { label: string; href: string };
    links?: { label: string; href: string }[];
  }[];
  contactLabel: string;
  contactTitle: string;
  contactText: string;
  top: string;
  projects: Project[];
};

export const content: Record<Language, Content> = {
  it: {
    nav: ["Progetti", "Chi sono", "Percorso", "Contatti"],
    skip: "Vai al contenuto",
    headline: ["Gabriele", "Mininni."],
    bio: "Studente al primo anno di Computer Science all’Università di Trento, con esperienza in ricerca sul machine learning e sviluppo di applicazioni.",
    explore: "Progetti",
    contact: "Scrivimi",
    selected: "01 / PROGETTI",
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
    details: "Il progetto",
    close: "Chiudi",
    role: "Il mio contributo",
    resultsTitle: "Risultati del benchmark",
    aboutLabel: "02 / CHI SONO",
    aboutTitle: "Profilo e interessi.",
    about: [
      "Mi interessano l’ingegneria del software, il machine learning e le loro applicazioni pratiche.",
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
    journeyLabel: "03 / PERCORSO",
    journeyTitle: "Studi ed esperienze",
    journey: [
      {
        date: "2026 — oggi",
        title: "Computer Science",
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
    activitiesLabel: "04 / ALTRE ATTIVITÀ",
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
    contactLabel: "05 / CONTATTI",
    contactTitle: "Contatti",
    contactText: "Puoi contattarmi via email.",
    top: "Torna su",
    projects: [
      {
        id: "giano",
        number: "01",
        name: "Giano",
        category: "MACHINE LEARNING · RICERCA",
        period: "2025 — 2026",
        description:
          "Modello per la ricostruzione dei dati mancanti delle stazioni meteorologiche, nato a FBK WebValley e sviluppato con il team Giano, finalista al Premio Marilli.",
        tags: ["Python", "PyTorch", "ImputeFormer"],
        role: "Ricerca, sviluppo del modello e sito web",
        paragraphs: [
          "Sviluppo con il team di un primo modello BiLSTM durante WebValley 2025, utilizzando osservazioni Meteotrentino e dati ERA5. Successivo coordinamento dell’evoluzione del progetto verso ImputeFormer.",
          "Partecipazione a un percorso laboratoriale con psicologi e designer di Artigianelli su UX design, lavoro di squadra e public speaking, applicati allo sviluppo del progetto.",
          "Valutazione su sei variabili meteorologiche, 13 tipologie di lacune e cinque seed di training in un benchmark riproducibile, con confronto rispetto a BiLSTM e interpolazione.",
          "Sviluppo del sito di Giano per esplorare le stazioni e confrontare i dati osservati con quelli ricostruiti, rendendo consultabili i risultati insieme al codice e agli esperimenti del progetto.",
        ],
        results: [
          {
            title: "Ricostruzione dei dati mancanti",
            description:
              "Su lacune consecutive di 24 ore, riduzione dell’errore medio assoluto (MAE) rispetto a BiLSTM nel confronto a parità di condizioni.",
            metrics: [
              { label: "Temperatura", value: "20,4%" },
              { label: "Umidità", value: "22,2%" },
              { label: "Pressione", value: "48,3%" },
            ],
          },
          {
            title: "Effetto sulle previsioni",
            description:
              "Riduzione del MAE nelle previsioni usando le serie storiche ricostruite, rispetto alle serie con dati mancanti.",
            metrics: [
              { label: "Temperatura", value: "15,7%" },
              { label: "Umidità", value: "17,1%" },
              { label: "Pressione", value: "45,3%" },
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
        ],
      },
      {
        id: "fyre",
        number: "02",
        name: "Fyre",
        category: "APP · IOS, ANDROID & WEB",
        period: "2026",
        description:
          "App per conoscere persone e organizzare eventi, con sviluppo del client iOS e contributi al backend e alla progettazione dell’interfaccia.",
        tags: ["SwiftUI", "Appwrite", "UI/UX"],
        role: "Direzione tecnica e di prodotto, sviluppo iOS",
        paragraphs: [
          "Il team sviluppa client Swift/SwiftUI per iOS, Kotlin/Jetpack Compose per Android e React/TypeScript per il web. Il mio contributo comprende la direzione tecnica e di prodotto, la progettazione dell’interfaccia e lo sviluppo del client iOS.",
          "Contributo alla struttura del backend Appwrite per utenti, matching, chat ed eventi e alla definizione di contratti condivisi, test automatici, linting, build di rilascio e CI per backend e client web, Android e iOS.",
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
    headline: ["Gabriele", "Mininni."],
    bio: "First-year Computer Science student at the University of Trento, with practical experience in machine learning research and application development.",
    explore: "Projects",
    contact: "Get in touch",
    selected: "01 / PROJECTS",
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
    details: "About the project",
    close: "Close",
    role: "My contribution",
    resultsTitle: "Benchmark results",
    aboutLabel: "02 / ABOUT",
    aboutTitle: "Profile and interests.",
    about: [
      "I’m interested in software engineering, machine learning and their practical applications.",
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
    journeyLabel: "03 / BACKGROUND",
    journeyTitle: "Education & experience",
    journey: [
      {
        date: "2026 — present",
        title: "Computer Science",
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
    activitiesLabel: "04 / OTHER ACTIVITIES",
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
    contactLabel: "05 / CONTACT",
    contactTitle: "Contact",
    contactText: "You can contact me by email.",
    top: "Back to top",
    projects: [
      {
        id: "giano",
        number: "01",
        name: "Giano",
        category: "MACHINE LEARNING · RESEARCH",
        period: "2025 — 2026",
        description:
          "Model for reconstructing missing weather station data, started at FBK WebValley and developed with the Giano team, a finalist for the Premio Marilli.",
        tags: ["Python", "PyTorch", "ImputeFormer"],
        role: "Research, model development and website",
        paragraphs: [
          "Development of an initial BiLSTM model with the team during WebValley 2025, using Meteotrentino observations and ERA5 data. Subsequent coordination of the project’s evolution toward ImputeFormer.",
          "Participation in a workshop programme with psychologists and Artigianelli designers on UX design, teamwork and public speaking, applied to developing the project.",
          "Evaluation across six weather variables, 13 gap patterns and five training seeds in a reproducible benchmark, comparing the model with BiLSTM and interpolation.",
          "Development of the Giano website for exploring stations and comparing observed and reconstructed data, making results available alongside the project’s code and experiments.",
        ],
        results: [
          {
            title: "Reconstructing missing data",
            description:
              "On consecutive 24-hour gaps, reduction in mean absolute error (MAE) compared with BiLSTM under the same evaluation conditions.",
            metrics: [
              { label: "Temperature", value: "20.4%" },
              { label: "Humidity", value: "22.2%" },
              { label: "Pressure", value: "48.3%" },
            ],
          },
          {
            title: "Effect on forecasting",
            description:
              "Reduction in forecast MAE when using reconstructed historical series instead of series with missing data.",
            metrics: [
              { label: "Temperature", value: "15.7%" },
              { label: "Humidity", value: "17.1%" },
              { label: "Pressure", value: "45.3%" },
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
        ],
      },
      {
        id: "fyre",
        number: "02",
        name: "Fyre",
        category: "APP · IOS, ANDROID & WEB",
        period: "2026",
        description:
          "App for meeting people and organising events, with iOS client development and contributions to the backend and interface design.",
        tags: ["SwiftUI", "Appwrite", "UI/UX"],
        role: "Technical and product direction, iOS development",
        paragraphs: [
          "The team develops clients in Swift/SwiftUI for iOS, Kotlin/Jetpack Compose for Android and React/TypeScript for the web. My contribution covers technical and product direction, interface design and iOS client development.",
          "Contribution to the Appwrite backend structure for users, matching, chat and events, and to shared contracts, automated tests, linting, release builds and CI for the backend and web, Android and iOS clients.",
        ],
        links: [
          { label: "Code on GitHub", href: "https://github.com/itsminni/fyre" },
        ],
      },
    ],
  },
};
