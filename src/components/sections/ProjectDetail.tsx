import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface ProjectInfo {
  titleKey: string;
  descKey: string;
  tags: string[];
  isGroup?: boolean;
  collaborators?: string[];
  details: { en: React.ReactNode; it: React.ReactNode };
  features?: { en: string[]; it: string[] };
}

const projectData: Record<string, ProjectInfo> = {
  giano: {
    titleKey: 'projects.giano.title',
    descKey: 'projects.giano.description',
    tags: ['Python', 'Deep Learning', 'BiLSTM', 'MeteoTrentino', 'WebValley'],
    isGroup: true,
    collaborators: ['WebValley team', 'MeteoTrentino'],
    details: {
      en: (
        <>
          <p>
            Reconstructing weather time series is essential to understand climate variability and changes. MeteoTrentino challenged WebValley students to address a 4.43% data gap in their weather station network. To fill these gaps we developed a deep learning model that reconstructs variables such as temperature and wind speed over time. We worked with a dataset of over 281 million entries split into training (30 years), validation (6 years) and testing (6 years).
          </p>
          <p>
            The result was GIANO, a bidirectional model that leverages both preceding and following observations to impute missing values effectively.
          </p>
        </>
      ),
      it: (
        <>
          <p>
            La ricostruzione delle serie temporali meteorologiche è fondamentale per comprendere la variabilità climatica. MeteoTrentino ha sfidato gli studenti di WebValley ad affrontare un gap del 4,43% nella rete di stazioni. Per colmare queste lacune abbiamo sviluppato un modello di deep learning per ricostruire variabili come temperatura e velocità del vento nel tempo, lavorando su un dataset di oltre 281 milioni di record suddiviso in training (30 anni), validazione (6 anni) e test (6 anni).
          </p>
          <p>
            Il risultato è GIANO, un modello bidirezionale che sfrutta osservazioni precedenti e successive per imputare efficacemente i valori mancanti.
          </p>
        </>
      ),
    },
    features: {
      en: [
        'BiLSTM architecture for bidirectional temporal analysis',
        'Gap filling for temperature, wind speed and other variables',
        'Trained on 281M+ meteorological records',
      ],
      it: [
        'Architettura BiLSTM per analisi temporale bidirezionale',
        'Riempimento lacune per temperatura, velocità del vento e altre variabili',
        'Addestrato su 281M+ record meteorologici',
      ],
    },
  },

  'giano-reimagined': {
    titleKey: 'projects.gianoReimagined.title',
    descKey: 'projects.gianoReimagined.description',
    tags: ['Python', 'Transformer', 'PyTorch Lightning'],
    details: {
      en: (
        <>
          <p>
            GIANO Reimagined rebuilds the original gap-filling approach using modern transformer-based components. The core ImputeFormer model introduces bidirectional attention, spatial encodings and uncertainty estimation to improve accuracy on heterogeneous meteorological datasets.
          </p>
        </>
      ),
      it: (
        <>
          <p>
            GIANO Reimagined ricostruisce l'approccio di gap-filling usando componenti moderne basate su transformer. Il modello ImputeFormer introduce attenzione bidirezionale, codifiche spaziali e quantificazione dell'incertezza per migliorare l'accuratezza su dataset meteorologici eterogenei.
          </p>
        </>
      ),
    },
    features: {
      en: [
        'Bidirectional transformer (ImputeFormer)',
        'Spatial encoding for station correlation',
        'Uncertainty quantification and probabilistic outputs',
      ],
      it: [
        'Transformer bidirezionale (ImputeFormer)',
        'Codifica spaziale per correlazione tra stazioni',
        "Quantificazione dell'incertezza e output probabilistici",
      ],
    },
  },

  badvisor: {
    titleKey: 'projects.badvisor.title',
    descKey: 'projects.badvisor.description',
    tags: ['Python', 'Trading', 'Telegram Bot', 'Real-time'],
    details: {
      en: (
        <>
          <p>
            BAdvisor is a Python script that assists in stock trading by analyzing parameters computed from real-time market data and sending advice via Telegram.
          </p>
        </>
      ),
      it: (
        <>
          <p>
            BAdvisor è uno script Python che aiuta nel trading azionario analizzando parametri ricavati da dati di mercato in tempo reale e inviando consigli tramite Telegram.
          </p>
        </>
      ),
    },
  },

  arthint: {
    titleKey: 'projects.arthint.title',
    descKey: 'projects.arthint.description',
    tags: ['Swift', 'RealityKit', 'ARKit', 'iOS'],
    details: {
      en: (
        <>
          <p>
            ArtHint is an iOS app built in Swift using RealityKit to display artworks in augmented reality and guide users through a constructive analysis to build visual memory and critical skills.
          </p>
        </>
      ),
      it: (
        <>
          <p>
            ArtHint è un'app iOS in Swift che usa RealityKit per visualizzare opere in realtà aumentata e guidare l'utente in un'analisi costruttiva per sviluppare memoria visiva e spirito critico.
          </p>
        </>
      ),
    },
    features: {
      en: [
        'AR visualization with RealityKit',
        'Guided analysis flows for art education',
      ],
      it: [
        'Visualizzazione AR con RealityKit',
        "Flussi di analisi guidata per l'educazione all'arte",
      ],
    },
  },

  fyre: {
    titleKey: 'projects.fyre.title',
    descKey: 'projects.fyre.description',
    tags: ['Android', 'iOS', 'Backend', 'Database'],
    isGroup: true,
    details: {
      en: (
        <>
          <p>
            Fyre is a high-school group project building a full-stack mobile dating app: backend API, database, Android and iOS apps. It was an exercise in cross-platform coordination and product thinking.
          </p>
        </>
      ),
      it: (
        <>
          <p>
            Fyre è un progetto liceale di gruppo per la realizzazione di un'app di incontri full-stack: API backend, database, app Android e iOS. È stato un esercizio di coordinamento cross-platform e product thinking.
          </p>
        </>
      ),
    },
  },

  website: {
    titleKey: 'projects.website.title',
    descKey: 'projects.website.description',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'i18next'],
    isGroup: true,
    collaborators: ['EasySimho'],
    details: {
      en: (
        <>
          <p>
            Note: the majority of the site implementation, including critical UI and accessibility work, was carried out by{' '}
            <a href="https://github.com/EasySimho" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              EasySimho
            </a>
            .
          </p>

          <p className="my-4" />

          <p>
            This very website — my personal portfolio. Built with React, Vite, Tailwind and Framer Motion. It supports English and Italian via i18next with automatic browser language detection.
          </p>
        </>
      ),
      it: (
        <>
          <p>
            Nota: la maggior parte dell'implementazione del sito, inclusi aspetti critici di UI e accessibilità, è stata realizzata da{' '}
            <a href="https://github.com/EasySimho" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
              EasySimho
            </a>
            .
          </p>

          <p className="my-4" />

          <p>
            Questo sito — il mio portfolio personale. Costruito con React, Vite, Tailwind e Framer Motion. Supporta inglese e italiano tramite i18next con rilevamento automatico della lingua del browser.
          </p>
        </>
      ),
    },
  },

  'java-works': {
    titleKey: 'projects.javaWorks.title',
    descKey: 'projects.javaWorks.description',
    tags: ['Java', 'Swing', 'Utilities'],
    details: {
      en: (
        <>
          <p>
            A pair of small Java projects (high-school / "liceo"): a utility library (Libreria5C) and a simple Swing-based library app.
          </p>
          <h4 className="mt-4 font-medium">Libreria5C — Utility Java Library</h4>
          <p>
            Collection of general-purpose Java utilities: ArrayList helpers, array utilities, date and time helpers, file utilities, safe console input, string utilities, math helpers and validation routines.
          </p>
          <h4 className="mt-4 font-medium">Progetto Biblioteca — Swing App</h4>
          <p>
            Homework project that extends a library management program with a basic Swing GUI, demonstrating integration of UI and core logic.
          </p>
        </>
      ),
      it: (
        <>
          <p>
            Due piccoli progetti Java di liceo: una libreria di utility (Libreria5C) e una semplice app per biblioteca con Swing.
          </p>
          <h4 className="mt-4 font-medium">Libreria5C — Libreria di Utility Java</h4>
          <p>
            Collezione di utility Java: helper per ArrayList, operazioni su array, helper su date e orari, operazioni su file, input sicuro da console, manipolazione stringhe, funzioni matematiche e routine di validazione.
          </p>
          <h4 className="mt-4 font-medium">Progetto Biblioteca — App Swing</h4>
          <p>
            Progetto di compito che estende un programma di gestione biblioteca con una GUI Swing di base, dimostrando l'integrazione tra UI e logica core.
          </p>
        </>
      ),
    },
    features: {
      en: [
        'Generic Java utility functions (Array, ArrayList, String, Date, File)',
        'Safe console input and validation helpers',
        'Small Swing GUI demonstrating integration',
      ],
      it: [
        'Funzioni utility Java generiche (Array, ArrayList, String, Date, File)',
        'Helpers per input sicuro e validazione',
        'Piccola GUI Swing per dimostrare l\'integrazione',
      ],
    },
  },

  'ai-olympiad': {
    titleKey: 'projects.aiOlympiad.title',
    descKey: 'projects.aiOlympiad.description',
    tags: ['AI', 'Competition', 'Research'],
    details: {
      en: (
        <>
          <p>
            This is the task we worked on at the Olimpiadi Italiane di Intelligenza Artificiale (2025). Below is the original problem statement (Italian) followed by an English summary and our approach.
          </p>

          <h4 className="mt-4 font-medium">Problema (Italiano)</h4>
          <pre className="whitespace-pre-wrap text-sm bg-white/3 p-3 rounded my-3">{`La scuola dopo l'alluvione
Fortunatamente, le verifiche degli anni precedenti sono rimaste intatte. Per ogni materia sono ancora disponibili i dati completi: l'elenco dei voti ottenuti dai 30 studenti della classe e l'indicazione esplicita della materia. Queste informazioni rappresentano l'unica base da cui è possibile tentare una ricostruzione
automatica delle materie mancanti.
L'amministrazione del liceo ha richiesto il tuo aiuto per risolvere il problema. L'obiettivo è scrivere un programma che, analizzando le verifiche passate e confrontandole con quelle del nuovo anno, riesca a determinare la materia più probabile per ciascuna delle verifiche prive di etichetta.
In altre parole, il compito consiste nel classificare le nuove verifiche in base ai pattern dei voti osservati negli anni passati.
Formato di input
Il file training_data.txt allegato contiene 100000 righe, ciascuna di esse si riferisce ad una diversa verifica ed è composta nel seguente modo:
V1 V2 V3 ... V29 V30 L
dove
• V1,..., V30 sono i voti dei 30 alunni nella verifica;
• L è l'etichetta della materia.
Il file di input è composto da 10000 righe, ciascuna delle quali si riferisce a una verifica di cui si è persa l'etichetta della materia. Ciascuna riga è composta nel
seguente modo:
V1 V2 V3 ... V29 V30
dove V1,..., V30 sono i voti dei 30 alunni nella verifica.
Formato di output
Il file di output deve contenere le etichette delle verifiche dell'ultimo file di input scaricato. Il file di output deve contenere esattamente 10000 righe composte
nel seguente modo:
L1
L2
...
L10000`}</pre>

          <h4 className="mt-4 font-medium">Problem (English summary)</h4>
          <p className="my-2">
            After a flood the school lost subject labels for recent tests. Historical data contains many labeled tests (each is 30 student grades + subject). Given 100000 labeled training examples and 10000 unlabeled tests (each with 30 grades), the task is to classify each unlabeled test with the most likely subject based on patterns in past grades. Input/output formats follow the problem specification above.
          </p>

          <h4 className="mt-4 font-medium">Our approach</h4>
          <p>
            We experimented with feature-engineering (statistics of the 30 grades: mean, std, quantiles), simple classifiers (k-NN, random forest) and light neural models to capture distributional patterns. The pipeline included preprocessing, training on the provided labeled set, and producing the required output file with 10000 predicted labels.
          </p>
        </>
      ),
      it: (
        <>
          <p>
            Questo è il problema su cui abbiamo lavorato alle Olimpiadi Italiane di Intelligenza Artificiale (2025). Di seguito lo statement originale e una sintesi del nostro approccio.
          </p>

          <h4 className="mt-4 font-medium">Problema (statement)</h4>
          <pre className="whitespace-pre-wrap text-sm bg-white/3 p-3 rounded my-3">{`La scuola dopo l'alluvione
Fortunatamente, le verifiche degli anni precedenti sono rimaste intatte. Per ogni materia sono ancora disponibili i dati completi: l'elenco dei voti ottenuti dai 30 studenti della classe e l'indicazione esplicita della materia. Queste informazioni rappresentano l'unica base da cui è possibile tentare una ricostruzione
automatica delle materie mancanti.
L'amministrazione del liceo ha richiesto il tuo aiuto per risolvere il problema. L'obiettivo è scrivere un programma che, analizzando le verifiche passate e confrontandole con quelle del nuovo anno, riesca a determinare la materia più probabile per ciascuna delle verifiche prive di etichetta.
In altre parole, il compito consiste nel classificare le nuove verifiche in base ai pattern dei voti osservati negli anni passati.
Formato di input
Il file training_data.txt allegato contiene 100000 righe, ciascuna di esse si riferisce ad una diversa verifica ed è composta nel seguente modo:
V1 V2 V3 ... V29 V30 L
dove
• V1,..., V30 sono i voti dei 30 alunni nella verifica;
• L è l'etichetta della materia.
Il file di input è composto da 10000 righe, ciascuna delle quali si riferisce a una verifica di cui si è persa l'etichetta della materia. Ciascuna riga è composta nel
seguente modo:
V1 V2 V3 ... V29 V30
dove V1,..., V30 sono i voti dei 30 alunni nella verifica.
Formato di output
Il file di output deve contenere le etichette delle verifiche dell'ultimo file di input scaricato. Il file di output deve contenere esattamente 10000 righe composte
nel seguente modo:
L1
L2
...
L10000`}</pre>

          <h4 className="mt-4 font-medium">Approccio</h4>
          <p>
            Abbiamo sperimentato feature engineering (statistiche dei 30 voti: media, deviazione standard, quantili), classificatori tradizionali (k-NN, random forest) e modelli neurali leggeri per catturare pattern distributivi. La pipeline include preprocessing, addestramento sul set etichettato e generazione del file di output con le 10000 etichette predette.
          </p>
        </>
      ),
    },
  },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const project = id ? projectData[id] : null;
  const lang = i18n.language.startsWith('it') ? 'it' : 'en';

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-zinc-400 mb-8">Project not found</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 border border-zinc-700 text-sm uppercase tracking-widest text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors"
        >
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/')}
          className="text-zinc-400 hover:text-white text-sm uppercase tracking-widest mb-12 flex items-center gap-2 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </motion.button>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight mb-4"
        >
          {t(project.titleKey)}
        </motion.h1>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          <span className={`px-3 py-1 text-xs uppercase tracking-widest rounded-full border ${project.isGroup ? 'border-blue-500/30 text-blue-400 bg-blue-500/10' : 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'}`}>
            {project.isGroup ? t('projects.groupProject') : t('projects.personalProject')}
          </span>
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 text-xs tracking-wide rounded-full border border-white/10 text-zinc-400 bg-white/5">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-zinc-400 text-lg sm:text-xl font-light mb-10 border-l-2 border-zinc-700 pl-6"
        >
          {t(project.descKey)}
        </motion.p>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light whitespace-pre-line mb-12"
        >
          {project.details[lang]}
        </motion.div>

        {/* Features */}
        {project.features && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="text-white text-sm uppercase tracking-widest font-medium mb-6">
              {lang === 'it' ? 'Caratteristiche' : 'Features'}
            </h3>
            <ul className="space-y-3">
              {project.features[lang].map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm sm:text-base font-light">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Collaborators */}
        {project.collaborators && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-2"
          >
            <span className="text-zinc-500 text-sm mr-2">
              {lang === 'it' ? 'Con:' : 'With:'}
            </span>
            {project.collaborators.map((name) => (
              <span key={name} className="px-3 py-1 text-xs rounded-full border border-white/10 text-zinc-400 bg-white/5">
                {name}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
