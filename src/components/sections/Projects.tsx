import { motion } from "framer-motion";

function Projects() {
    const projects = [
        {
            title: "GIANO",
            description: "BiLSTM family of models for gap filling in meteorological time series",
            video: "/project1.mp4",
            size: "large" // occupa 2 colonne
        },
        {
            title: "WEBSITE",
            description: "Design and development of group website",
            video: "/project2.mp4",
            size: "medium" // occupa 1 colonna, altezza doppia
        },
        {
            title: "Coming soon",
            description: "",
            size: "small" // dimensione standard
        },
        {
            title: "Coming soon",
            description: "",
            size: "small"
        }
    ];

    const getSizeClasses = (size) => {
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
                    Selected Works
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
            </div>
        </div>
    );
}

export default Projects;