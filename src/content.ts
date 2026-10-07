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
    bio: "Studente di Computer Science all’Università di Trento, con progetti nell’ambito del machine learning e dello sviluppo di app.",
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
    aboutTitle: "Profilo e interessi.",
    about: [
      "Formazione in Computer Science presso l’Università di Trento, dopo il diploma al liceo scientifico, opzione scienze applicate.",
      "Partecipazione a WebValley 2025, la scuola estiva di FBK da cui è nato Giano, proseguito con il gruppo di ricerca. Le altre attività progettuali si concentrano sullo sviluppo iOS e sulla programmazione in Python.",
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
          "Selezione tra i 18 partecipanti a un percorso di due settimane su infrastrutture IT, cloud, cybersecurity, protezione dei dati, AI e DevOps.",
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
          "Selezione tra i 12 partecipanti a livello nazionale per WebValley 2025 e attività di ricerca sui dati meteorologici con il team Giano. Il percorso comprendeva workshop su UX design, lavoro di squadra e public speaking.",
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
    workingTitle: "Metodo di lavoro",
    working: [
      {
        title: "Confrontare i risultati",
        description:
          "Valutazione del modello Giano rispetto a BiLSTM e interpolazione, con prove su diverse variabili meteorologiche e tipologie di lacune per misurare l’effetto delle modifiche.",
      },
      {
        title: "Lavorare sullo stesso codice",
        description:
          "Definizione di contratti comuni per lo scambio dei dati tra i client iOS, Android e web di Fyre e il backend, con test automatici e controlli sulle modifiche al codice.",
      },
      {
        title: "Rendere il lavoro consultabile",
        description:
          "Sviluppo del sito di Giano per esplorare le stazioni e confrontare i dati osservati con quelli ricostruiti, rendendo consultabili i risultati insieme al codice e agli esperimenti del progetto.",
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
        year: "2026",
        date: "2024 — 2026",
        title: "Open day del liceo Corni",
        context: "IIS “F. Corni”",
        description:
          "Presentazione delle attività curricolari ed extracurricolari di informatica del liceo a studenti e famiglie durante gli open day.",
      },
      {
        year: "2025",
        date: "Novembre 2025",
        title: "Olimpiadi italiane di Intelligenza Artificiale",
        context: "Competizione",
        description:
          "Partecipazione alla selezione per la finale nazionale, conclusa a 1,5 punti dalla qualificazione.",
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
          "Percorso universitario di 36 ore con lezioni e laboratori di fisica, matematica e informatica.",
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
          "Contributo allo sviluppo di un videogioco educativo sulla sostenibilità, in collaborazione con esperti di UniMoRe e sviluppatori di FEM. Progetto presentato al Festival PLAY 2025.",
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
          "Partecipazione alle selezioni e qualificazione alla fase regionale.",
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
          "Collaborazione con ingegneri informatici alla redazione di un articolo su privacy, sicurezza online e software open source nell’ambito del programma Scuola 2030.",
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
          "Contributo alla redazione di un articolo su e.DO, il braccio robotico di COMAU pensato per introdurre i giovani studenti alla robotica.",
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
          "Modello per la ricostruzione dei dati mancanti delle stazioni meteorologiche, nato a FBK WebValley e sviluppato con il team Giano, finalista al Premio Marilli.",
        tags: ["Python", "PyTorch", "ImputeFormer"],
        role: "Ricerca, sviluppo del modello e sito web",
        paragraphs: [
          "Sviluppo con il team di un primo modello BiLSTM durante WebValley 2025, utilizzando osservazioni Meteotrentino e dati ERA5. Successivo coordinamento dell’evoluzione del progetto verso ImputeFormer.",
          "Partecipazione a un percorso laboratoriale con psicologi e designer di Artigianelli su UX design, lavoro di squadra e public speaking, applicati allo sviluppo del progetto.",
          "Valutazione su sei variabili meteorologiche, 13 tipologie di lacune e cinque seed di training in un benchmark riproducibile, con confronto rispetto a BiLSTM e interpolazione. Sviluppo del sito web per l’esplorazione dei risultati.",
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
          "Progetto di gruppo con client Swift/SwiftUI per iOS, Kotlin/Jetpack Compose per Android e React/TypeScript per il web. Direzione tecnica e di prodotto, progettazione dell’interfaccia e sviluppo del client iOS.",
          "Contributo alla struttura del backend Appwrite per utenti, matching, chat ed eventi e alla definizione di contratti condivisi, test automatici, linting, build di rilascio e CI per backend e client web, Android e iOS.",
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
          "App educativa dedicata all’arte, con pubblicazione prevista nel 2027.",
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
        description: "Bot Telegram per uso personale, sviluppato in Python.",
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
    bio: "Computer Science student at the University of Trento, with projects in machine learning and app development.",
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
    aboutTitle: "Profile and interests.",
    about: [
      "Computer Science studies at the University of Trento, following a scientific high-school diploma in applied sciences.",
      "Participation in WebValley 2025, FBK’s summer school where Giano began, followed by continued work with the research team. Other projects focus on iOS development and Python programming.",
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
          "Selected as one of 12 participants nationally for WebValley 2025, with research on weather data as part of the Giano team. The programme included workshops on UX design, teamwork and public speaking.",
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
    workingTitle: "Working approach",
    working: [
      {
        title: "Comparing results",
        description:
          "Evaluation of the Giano model against BiLSTM and interpolation, with tests across different weather variables and gap patterns to measure the effect of changes.",
      },
      {
        title: "Working on shared code",
        description:
          "Definition of shared data contracts between Fyre’s iOS, Android and web clients and the backend, supported by automated tests and checks for code changes.",
      },
      {
        title: "Making the work available to inspect",
        description:
          "Development of the Giano website for exploring stations and comparing observed and reconstructed data, making results available alongside the project’s code and experiments.",
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
        year: "2026",
        date: "2024 — 2026",
        title: "Open Days at Corni High School",
        context: "IIS “F. Corni”",
        description:
          "Presentation of the school’s curricular and extracurricular computer science activities to prospective students and their families during open days.",
      },
      {
        year: "2025",
        date: "November 2025",
        title: "Italian AI Olympiad",
        context: "Competition",
        description:
          "Participation in the selection round for the national final, finishing 1.5 points short of qualification.",
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
          "36-hour university programme with lectures and lab sessions in physics, mathematics and computer science.",
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
          "Contribution to the development of an educational game about sustainability, in collaboration with UniMoRe experts and FEM developers. Project presented at PLAY Festival 2025.",
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
          "Participation in the selection rounds and qualification for the regional stage.",
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
          "Co-authorship of an article on privacy, online security and open-source software with software engineers, as part of the Scuola 2030 programme.",
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
          "Co-authorship of an article about e.DO, COMAU’s robotic arm designed to introduce young students to robotics.",
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
          "Model for reconstructing missing weather station data, started at FBK WebValley and developed with the Giano team, a finalist for the Premio Marilli.",
        tags: ["Python", "PyTorch", "ImputeFormer"],
        role: "Research, model development and website",
        paragraphs: [
          "Development of an initial BiLSTM model with the team during WebValley 2025, using Meteotrentino observations and ERA5 data. Subsequent coordination of the project’s evolution toward ImputeFormer.",
          "Participation in a workshop programme with psychologists and Artigianelli designers on UX design, teamwork and public speaking, applied to developing the project.",
          "Evaluation across six weather variables, 13 gap patterns and five training seeds in a reproducible benchmark, comparing the model with BiLSTM and interpolation. Website development for exploring the results.",
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
          "Team project with Swift/SwiftUI for iOS, Kotlin/Jetpack Compose for Android and React/TypeScript for the web. Technical and product direction, interface design and iOS client development.",
          "Contribution to the Appwrite backend structure for users, matching, chat and events, and to shared contracts, automated tests, linting, release builds and CI for the backend and web, Android and iOS clients.",
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
          "Educational app about art, with publication planned for 2027.",
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
        description: "Telegram bot for personal use, built with Python.",
        tags: [],
        role: "",
        paragraphs: [],
        links: [],
      },
    ],
  },
};
