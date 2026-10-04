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
  projectsIntro: string;
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
  workingTitle: string;
  working: { title: string; description: string }[];
  activitiesLabel: string;
  activitiesTitle: string;
  activities: {
    year: string;
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
    bio: "Studio Computer Science all’Università di Trento. Qui raccolgo i progetti su cui lavoro, tra machine learning e sviluppo di app.",
    explore: "Progetti",
    contact: "Scrivimi",
    selected: "01 / PROGETTI",
    projectsTitle: "Progetti",
    projectsIntro: "Progetti di gruppo e personali dal 2024.",
    details: "Il progetto",
    close: "Chiudi",
    role: "Il mio contributo",
    resultsTitle: "Risultati del benchmark",
    aboutLabel: "02 / CHI SONO",
    aboutTitle: "Qualche informazione su di me.",
    about: [
      "Studio Computer Science a Trento, dopo un percorso al liceo scientifico delle scienze applicate.",
      "Nel 2025 ho partecipato a WebValley, la scuola estiva di FBK. Lì è iniziato il lavoro su Giano, che ho poi continuato con il gruppo. Negli altri progetti mi occupo soprattutto di sviluppo iOS e Python.",
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
      { label: "Apple", value: "SwiftUI, ARKit" },
      { label: "Strumenti", value: "Git, Linux, Docker, CI/CD, Appwrite" },
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
          "Tra i 18 partecipanti selezionati per due settimane su infrastrutture IT, cloud, cybersecurity, protezione dei dati, AI e DevOps.",
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
          "Tra i 12 partecipanti selezionati a livello nazionale per WebValley 2025, ho lavorato alla ricerca sui dati meteorologici con il team Giano. Il percorso comprendeva anche workshop su UX design, lavoro di squadra e public speaking.",
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
    workingTitle: "Come lavoro",
    working: [
      {
        title: "Confrontare i risultati",
        description:
          "In Giano ho confrontato il modello con BiLSTM e interpolazione, ripetendo le prove su variabili meteorologiche e tipi di lacune diversi. Mi serve a capire dove una modifica migliora il risultato.",
      },
      {
        title: "Lavorare sullo stesso codice",
        description:
          "Fyre ha client iOS, Android e web che devono comunicare con lo stesso backend. Ho lavorato alle regole comuni per lo scambio dei dati, ai test automatici e ai controlli sulle modifiche.",
      },
      {
        title: "Rendere il lavoro consultabile",
        description:
          "Per Giano ho sviluppato anche il sito che permette di esplorare le stazioni e confrontare i dati osservati con quelli ricostruiti. È un modo per mostrare cosa fa il modello, insieme al codice e agli esperimenti dietro il progetto.",
      },
    ],
    activitiesLabel: "04 / ALTRE ATTIVITÀ",
    activitiesTitle: "Altre attività",
    // Reverse chronology, using the ending year for multi-year activities.
    activities: [
      {
        year: "2026",
        date: "Settembre 2026",
        title: "Festival Informatici Senza Frontiere",
        context: "Festival · Rovereto",
        description:
          "Ho presentato la candidatura alla borsa di studio del festival.",
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
        year: "2026",
        date: "2024 — 2026",
        title: "Open day del liceo Corni",
        context: "IIS “F. Corni”",
        description:
          "Durante gli open day ho presentato a studenti e famiglie le attività curricolari ed extracurricolari di informatica del liceo.",
      },
      {
        year: "2025",
        date: "Novembre 2025",
        title: "Olimpiadi italiane di Intelligenza Artificiale",
        context: "Competizione",
        description:
          "Ho partecipato alla selezione per la finale nazionale, conclusa a 1,5 punti dalla qualificazione.",
        link: {
          label: "Sito ufficiale",
          href: "https://oia.anpc.it/",
        },
      },
      {
        year: "2025",
        date: "Giugno 2025",
        title: "A tu per tu con la scienza",
        context: "Università di Modena e Reggio Emilia",
        description:
          "Un percorso universitario di 36 ore con lezioni e laboratori di fisica, matematica e informatica.",
        link: {
          label: "Sito ufficiale dell’iniziativa",
          href: "https://www.outreach.fim.unimore.it/stage-e-scuole-estive/a-tu-per-tu-con-la-scienza/",
        },
      },
      {
        year: "2025",
        date: "Febbraio — aprile 2025",
        title: "Green Horizon",
        context: "UniMoRe · FEM · Festival PLAY",
        description:
          "Ho partecipato allo sviluppo di un videogioco educativo sulla sostenibilità, insieme a esperti di UniMoRe e sviluppatori di FEM. Il progetto è stato presentato al Festival PLAY 2025.",
        link: {
          label: "Scopri il progetto",
          href: "https://community.fem.digital/t/green-horizon-un-videogioco-sullambiente-creato-da-4-scuole/2660",
        },
      },
      {
        year: "2025",
        date: "Dicembre 2024 — aprile 2025",
        title: "Olimpiadi Italiane di Informatica",
        context: "Competizione",
        description:
          "Ho partecipato alle selezioni e mi sono qualificato alla fase regionale.",
        link: {
          label: "Sito ufficiale",
          href: "https://www.olimpiadi-informatica.it/",
        },
      },
      {
        year: "2024",
        date: "Febbraio — aprile 2024",
        title: "Navigating the digital world: do you really feel safe?",
        context: "Gazzetta di Modena · Scuola 2030",
        description:
          "Ho collaborato con ingegneri informatici alla scrittura di un articolo su privacy, sicurezza online e software open source per il programma Scuola 2030.",
        link: {
          label: "Visualizza l’articolo",
          href: "/documents/gazzetta.pdf",
        },
      },
      {
        year: "2023",
        date: "Maggio 2023",
        title: "An interview with Leonardo Ciocca",
        context: "POP CORNI",
        description:
          "Ho collaborato alla scrittura di un articolo su e.DO, il braccio robotico di COMAU pensato per introdurre i giovani studenti al mondo della robotica.",
        link: {
          label: "Leggi l’articolo",
          href: "https://cspace.spaggiari.eu//pub/MOIT0004/giornalino%20scolastico/Giornalino%20Pop-Corni%20n.6%20-%20Maggio%202023.pdf",
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
          "Un modello per ricostruire i dati mancanti delle stazioni meteo. Nato a FBK WebValley e sviluppato con il team Giano, con cui siamo finalisti al Premio Marilli.",
        tags: ["Python", "PyTorch", "ImputeFormer"],
        role: "Ricerca, sviluppo del modello e sito web",
        paragraphs: [
          "A WebValley 2025 ho lavorato con il team a un primo modello BiLSTM, usando osservazioni Meteotrentino e dati ERA5. Dopo la scuola estiva ho coordinato l’evoluzione del progetto verso ImputeFormer.",
          "Durante WebValley ho seguito anche un percorso laboratoriale con psicologi e designer di Artigianelli su UX design, lavoro di squadra e public speaking, applicati allo sviluppo del progetto.",
          "Ho lavorato alla valutazione su sei variabili meteorologiche, con 13 tipi di lacune e cinque seed di training in un benchmark riproducibile, confrontando il modello con BiLSTM e interpolazione. Ho anche costruito il sito per esplorare i risultati.",
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
          "Un’app per conoscere persone e organizzare eventi. Ho sviluppato il client iOS e lavorato al backend e alle scelte di interfaccia.",
        tags: ["SwiftUI", "Appwrite", "UI/UX"],
        role: "Direzione tecnica e di prodotto, sviluppo iOS",
        paragraphs: [
          "Fyre è un progetto di gruppo con client Swift/SwiftUI per iOS, Kotlin/Jetpack Compose per Android e React/TypeScript per il web. Mi sono occupato della direzione tecnica e di prodotto, dando forma all���interfaccia.",
          "Ho contribuito alla struttura del backend Appwrite per utenti, matching, chat ed eventi e al lavoro condiviso su contratti condivisi, test automatici, linting, build di rilascio e CI attraverso backend, web, Android e iOS.",
        ],
        links: [
          { label: "Codice su GitHub", href: "https://github.com/itsminni/fyre" },
        ],
      },
      {
        id: "arthint",
        number: "03",
        name: "ArtHint",
        category: "APP · IN SVILUPPO",
        period: "2027",
        description:
          "Un’app educativa dedicata all’arte. La pubblicazione è prevista nel 2027.",
        tags: [],
        role: "",
        paragraphs: [],
        links: [],
      },
      {
        id: "telegram-bot",
        number: "04",
        name: "Bot Telegram",
        category: "PROGETTO PRIVATO",
        period: "2024 — oggi",
        description: "Un bot Telegram per uso personale, sviluppato in Python.",
        tags: [],
        role: "",
        paragraphs: [],
        links: [],
      },
    ],
  },
  en: {
    nav: ["Projects", "About", "Background", "Contact"],
    skip: "Skip to content",
    headline: ["Gabriele", "Mininni."],
    bio: "I study Computer Science at the University of Trento. This is a collection of my work in machine learning and app development.",
    explore: "Projects",
    contact: "Get in touch",
    selected: "01 / PROJECTS",
    projectsTitle: "Projects",
    projectsIntro: "Team and personal projects since 2024.",
    details: "About the project",
    close: "Close",
    role: "My contribution",
    resultsTitle: "Benchmark results",
    aboutLabel: "02 / ABOUT",
    aboutTitle: "A little about me.",
    about: [
      "I study Computer Science in Trento after completing an applied-sciences programme at scientific high school.",
      "In 2025, I attended WebValley, FBK’s summer school. That’s where we started Giano, which I continued working on with the team. My other projects mainly involve iOS development and Python.",
    ],
    toolkit: "Skills",
    skills: [
      {
        label: "Languages",
        value: "Python, Swift, Java, C++, MATLAB, SQL, TypeScript",
      },
      {
        label: "ML & data",
        value:
          "PyTorch, PyTorch Lightning, pandas, scikit-learn, matplotlib, TensorBoard",
      },
      { label: "Apple", value: "SwiftUI, ARKit" },
      { label: "Tools", value: "Git, Linux, Docker, CI/CD, Appwrite" },
      {
        label: "Spoken",
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
          "One of 18 selected participants in a two-week programme on IT infrastructure, cloud, cybersecurity, data protection, AI and DevOps.",
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
          "One of 12 participants selected nationally for WebValley 2025, where I worked on weather data research with the Giano team. The programme also included workshops on UX design, teamwork and public speaking.",
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
    workingTitle: "How I work",
    working: [
      {
        title: "Comparing results",
        description:
          "In Giano, I compared the model with BiLSTM and interpolation, repeating the tests across different weather variables and gap patterns. This helps me see where a change improves the result.",
      },
      {
        title: "Working on shared code",
        description:
          "Fyre has iOS, Android and web clients that need to communicate with the same backend. Alongside the iOS client, I worked on shared data contracts, automated tests and checks for code changes.",
      },
      {
        title: "Making the work available to inspect",
        description:
          "For Giano, I also built the website for exploring stations and comparing observed and reconstructed data. It shows what the model does, alongside the code and the experiments behind the project.",
      },
    ],
    activitiesLabel: "04 / OTHER ACTIVITIES",
    activitiesTitle: "Other activities",
    // Reverse chronology, using the ending year for multi-year activities.
    activities: [
      {
        year: "2026",
        date: "September 2026",
        title: "Festival Informatici Senza Frontiere",
        context: "Festival · Rovereto",
        description: "I applied for the festival’s student scholarship.",
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
        year: "2026",
        date: "2024 — 2026",
        title: "Open Days at Corni High School",
        context: "IIS “F. Corni”",
        description:
          "At the school’s open days, I presented its curricular and extracurricular computer science activities to prospective students and their families.",
      },
      {
        year: "2025",
        date: "November 2025",
        title: "Italian AI Olympiad",
        context: "Competition",
        description:
          "I took part in the selection round for the national final, finishing 1.5 points short of qualification.",
        link: {
          label: "Official website",
          href: "https://oia.anpc.it/",
        },
      },
      {
        year: "2025",
        date: "June 2025",
        title: "Up Close with Science",
        context: "University of Modena and Reggio Emilia",
        description:
          "A 36-hour university programme with lectures and lab sessions in physics, mathematics and computer science.",
        link: {
          label: "Official programme website",
          href: "https://www.outreach.fim.unimore.it/stage-e-scuole-estive/a-tu-per-tu-con-la-scienza/",
        },
      },
      {
        year: "2025",
        date: "February — April 2025",
        title: "Green Horizon",
        context: "UniMoRe · FEM · PLAY Festival",
        description:
          "I helped develop an educational game about sustainability with UniMoRe experts and FEM developers. The project was presented at PLAY Festival 2025.",
        link: {
          label: "View the project",
          href: "https://community.fem.digital/t/green-horizon-un-videogioco-sullambiente-creato-da-4-scuole/2660",
        },
      },
      {
        year: "2025",
        date: "December 2024 — April 2025",
        title: "Italian Olympiad in Informatics",
        context: "Competition",
        description:
          "I took part in the selection rounds and qualified for the regional stage.",
        link: {
          label: "Official website",
          href: "https://www.olimpiadi-informatica.it/",
        },
      },
      {
        year: "2024",
        date: "February — April 2024",
        title: "Navigating the digital world: do you really feel safe?",
        context: "Gazzetta di Modena · Scuola 2030",
        description:
          "I co-authored an article on privacy, online security and open-source software with software engineers, as part of the Scuola 2030 programme.",
        link: {
          label: "View the article",
          href: "/documents/gazzetta.pdf",
        },
      },
      {
        year: "2023",
        date: "May 2023",
        title: "An interview with Leonardo Ciocca",
        context: "POP CORNI",
        description:
          "I co-authored an article about e.DO, COMAU’s robotic arm designed to introduce young students to robotics.",
        link: {
          label: "Read the article",
          href: "https://cspace.spaggiari.eu//pub/MOIT0004/giornalino%20scolastico/Giornalino%20Pop-Corni%20n.6%20-%20Maggio%202023.pdf",
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
          "A model for reconstructing missing weather station data. Started at FBK WebValley and developed with the Giano team, with whom we are finalists for the Premio Marilli.",
        tags: ["Python", "PyTorch", "ImputeFormer"],
        role: "Research, model development and website",
        paragraphs: [
          "At WebValley 2025, I worked with the team on an initial BiLSTM model using Meteotrentino observations and ERA5 data. After the summer school, I coordinated the project’s evolution toward ImputeFormer.",
          "During WebValley, I also took part in a workshop programme with psychologists and Artigianelli designers on UX design, teamwork and public speaking, applied to developing the project.",
          "I worked on evaluation across six weather variables, 13 gap patterns and five training seeds in a reproducible benchmark, comparing the model with BiLSTM and interpolation. I also built the website for exploring the results.",
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
          "An app for meeting people and organising events. I built the iOS client and worked on the backend and interface design.",
        tags: ["SwiftUI", "Appwrite", "UI/UX"],
        role: "Technical and product direction, iOS development",
        paragraphs: [
          "Fyre is a team project with Swift/SwiftUI for iOS, Kotlin/Jetpack Compose for Android and React/TypeScript for the web. I led the technical and product direction, shaped the interface and worked on the iOS client.",
          "I helped structure the Appwrite backend for users, matching, chat and events, and contributed to shared contracts, automated tests, linting, release builds and CI across the backend, web, Android and iOS clients.",
        ],
        links: [
          { label: "Code on GitHub", href: "https://github.com/itsminni/fyre" },
        ],
      },
      {
        id: "arthint",
        number: "03",
        name: "ArtHint",
        category: "APP · IN DEVELOPMENT",
        period: "2027",
        description:
          "An educational app about art. Publication is planned for 2027.",
        tags: [],
        role: "",
        paragraphs: [],
        links: [],
      },
      {
        id: "telegram-bot",
        number: "04",
        name: "Telegram Bot",
        category: "PRIVATE PROJECT",
        period: "2024 — present",
        description: "A Telegram bot for personal use, built with Python.",
        tags: [],
        role: "",
        paragraphs: [],
        links: [],
      },
    ],
  },
};
