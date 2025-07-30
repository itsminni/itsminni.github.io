# Vallinx Website

## Features

- **Internationalization**: Automatic language detection (Italian/English) based on browser settings
- **Modern UI**: Clean and minimalist design
- **Project Showcase**: Interactive grid displaying our research projects
- **Contact Form**: Integrated contact system with form validation
- **Team Display**: Scrolling ticker with team member names

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React i18next** for internationalization
- **Formspree** for contact form handling

## Development

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vallinx/Website.git
cd Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
├── public/              # Static assets (videos, images, favicon)
├── src/
│   ├── components/
│   │   ├── layout/      # Navigation and layout components
│   │   ├── sections/    # Page sections (About, Projects, Contact)
│   │   ├── ContactForm.tsx # Contact form component
│   │   └── EntryAnimation.tsx # Animation component
│   ├── assets/          # React assets
│   ├── i18n.ts         # Internationalization configuration
│   ├── main.tsx        # Application entry point
│   ├── App.tsx         # Main App component
│   ├── index.css       # Global styles
│   └── vite-env.d.ts   # Vite type definitions
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
├── tsconfig*.json      # TypeScript configurations
├── eslint.config.js    # ESLint configuration
├── package.json        # Dependencies and scripts
├── package-lock.json   # Dependency lock file
└── README.md           # Project documentation
```

## Languages

The website automatically detects the user's browser language and displays content in:
- **Italian** (default for Italian browsers)
- **English** (default for all other languages)

## Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them
4. Push to your forked repository
5. Create a pull request 

## Contact

For questions, please email us at info@vallinx.eu
```
