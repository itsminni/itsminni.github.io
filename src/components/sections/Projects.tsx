import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

function Projects() {
  const { t } = useTranslation();
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Hook per il lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setLoadedVideos(prev => new Set(prev).add(index));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    videoRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.setAttribute('data-index', index.toString());
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: t('projects.giano.title'),
      description: t('projects.giano.description'),
      video: "/projects/project1.webm",
      size: "large", // occupa 2 colonne
    },
    {
      title: t('projects.website.title'),
      description: t('projects.website.description'),
      video: "/projects/project2.webm",
      size: "medium", // occupa 1 colonna, altezza doppia
    },
    {
      title: t('projects.augure.title'),
      description: t('projects.augure.description'),
      video: "/projects/project3.webm",
      size: "small", // dimensione standard
    },
    {
      title: t('projects.comingSoon'),
      description: "",
      size: "small",
      comingSoon: true,
    },
  ];

interface Project {
    title: string;
    description: string;
    video?: string;
    image?: string;
    size: "large" | "medium" | "small";
    comingSoon?: boolean;
}

const getSizeClasses = (size: string) => {
    switch(size) {
        case 'large':
            return 'col-span-2 row-span-1';
        case 'medium':
            return 'col-span-1 row-span-2';
        default:
            return 'col-span-1 row-span-1';
    }
};

return (
    <div className="min-h-screen bg-black px-8 py-16">
        <div className="max-w-7xl mx-auto">
            {/* Header minimale */}
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white text-sm font-light tracking-widest mb-12 uppercase"
            >
                {t('projects.title')}
            </motion.h2>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`${getSizeClasses(project.size)} group relative overflow-hidden cursor-pointer`}
                    >
                        {/* Immagine con overlay */}
                        <div className="absolute inset-0 bg-zinc-900">
                            {project.image && (
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            )}
                            {project.video && (
                                <video
                                    ref={(el) => {
                                        videoRefs.current[index] = el;
                                    }}
                                    src={loadedVideos.has(index) ? project.video : undefined}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    autoPlay={loadedVideos.has(index)}
                                    loop
                                    muted
                                    playsInline
                                    preload="none"
                                />
                            )}
                            
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        </div>

                        {/* Contenuto con parallax effect */}
                        <motion.div 
                            className="absolute inset-0 p-8 flex flex-col justify-end"
                            initial={{ y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-white text-2xl font-light mb-2 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                                {project.title}
                            </h3>
                            {project.description && (
                                <p className="text-gray-400 text-sm font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                    {project.description}
                                </p>
                            )}
                            
                            {/* Indicatore minimale */}
                            <div className="absolute top-8 right-8 w-8 h-8 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </motion.div>

                        {/* Bordo sottile al hover */}
                        <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 pointer-events-none" />
                    </motion.div>
                ))}
            </div>

            {/* GitHub Link */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center mt-16"
            >
                <a 
                    href="https://github.com/vallinx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300"
                >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-sm font-light tracking-wide">View more on GitHub</span>
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </motion.div>
        </div>
    </div>
);
}

export default Projects;