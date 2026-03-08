# Minni — Portfolio

Questo repository contiene il sito personale di Gabriele (nickname Minni), un portfolio statico costruito con Vite e React.

## Caratteristiche principali

- **Multilingua**: supporto Italiano/Inglese con rilevamento della lingua del browser
- **Portfolio progetti**: galleria interattiva con pagine di dettaglio per ogni progetto
- **Design moderno**: layout minimale e responsive
- **Animazioni**: microinterazioni realizzate con Framer Motion

## Tecnologie

- React con TypeScript
- Vite per sviluppo e build
- Tailwind CSS per lo stile
- Framer Motion per animazioni
- react-i18next per internazionalizzazione

## Sviluppo

### Prerequisiti

- Node.js (versione 18+ consigliata)
- npm o yarn

### Installazione

1. Clona il repository o forkalo sul tuo account:
```bash
git clone https://github.com/itsminni/website.git
cd website
```

2. Installa le dipendenze:
```bash
npm install
```

3. Avvia il server di sviluppo:
```bash
npm run dev
```

Il sito sarà disponibile su `http://localhost:5173` (porta predefinita Vite).

### Script utili

- `npm run dev` — Avvia il server di sviluppo
- `npm run build` — Costruisce la versione di produzione
- `npm run preview` — Serve la build di produzione per un'anteprima
- `npm run lint` — Esegue ESLint

## Struttura del progetto (sintesi)

La codebase segue una struttura tipica React + Vite:

```
public/        # asset statici
src/           # sorgenti React
	components/   # componenti UI e sezioni
	i18n.ts       # configurazione internazionalizzazione
	App.tsx       # entry routes
index.html      # template HTML
package.json    # script e dipendenze
```

## Contribuire

Contribuzioni benvenute: apri una pull request o apri un issue se trovi un problema.

## Contatti

Preferisco essere contattato via GitHub: https://github.com/itsminni

Se desideri includere un indirizzo email pubblico, aggiungilo qui.
