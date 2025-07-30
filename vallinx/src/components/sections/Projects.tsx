import { motion } from "framer-motion";

function Projects() {
  const projects: Project[] = [
    {
      title: "GIANO",
      description:
        "BiLSTM family of models for gap filling in meteorological time series",
      video: "/project1.mp4",
      size: "large", // occupa 2 colonne
    },
    {
      title: "WEBSITE",
      description: "Design and development of group website",
      video: "/project2.mp4",
      size: "medium", // occupa 1 colonna, altezza doppia
    },
    {
      title: "Coming soon",
      description: "",
      size: "small", // dimensione standard
      comingSoon: true,
    },
    {
      title: "Coming soon",
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

type ProjectSize = "large" | "medium" | "small";

const getSizeClasses = (size: ProjectSize): string => {
    switch (size) {
        case "large":
            return "col-span-1 md:col-span-2 row-span-1";
        case "medium":
            return "col-span-1 row-span-1 md:row-span-2";
        default:
            return "col-span-1 row-span-1";
    }
};

  return (
    <div className="min-h-screen bg-black px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header minimale */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-xs sm:text-sm font-light tracking-widest mb-8 sm:mb-12 uppercase"
        >
          Selected Works
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[300px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${getSizeClasses(
                project.size
              )} group relative overflow-hidden cursor-pointer`}
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
                    src={project.video}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    autoPlay
                    loop
                    muted
                  />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Contenuto con parallax effect */}
              {!project.comingSoon && (
                <motion.div
                  className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end"
                  initial={{ y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white text-lg sm:text-xl md:text-2xl font-light mb-1 sm:mb-2 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-gray-400 text-xs sm:text-sm font-light opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      {project.description}
                    </p>
                  )}

                  {/* Indicatore minimale */}
                  <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-6 sm:w-8 h-6 sm:h-8 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-3 sm:w-4 h-3 sm:h-4 text-white/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              )}

              {/* Coming Soon Striscione */}
              {project.comingSoon && (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute w-full py-2 sm:py-3 bg-gradient-to-r from-yellow-400 via-black to-yellow-400 transform -rotate-[38deg] origin-center"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(110deg, #facc15, #facc15 20px, #000000 20px, #000000 40px)",
                      width: "150%",
                      left: "-20%",
                      opacity: 0.5,
                    }}
                  >
                    <p className="text-center text-white font-bold text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap">
                      COMING SOON • COMING SOON • COMING SOON • COMING SOON
                    </p>
                  </div>
                </div>
              )}

              {/* Bordo sottile al hover */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
