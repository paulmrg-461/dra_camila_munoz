import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { getProjects } from '../data/portfolio';
import { useLanguage } from '../contexts/LanguageContext';
import type { Project } from '../types';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: t('portfolio.allProjects') },
    { id: 'facial', label: t('portfolio.facial') },
    { id: 'labios', label: t('portfolio.labios') },
    { id: 'antiaging', label: t('portfolio.antiaging') }
  ];

  const allProjects = getProjects(t);
  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <motion.div
      variants={itemVariants}
      layout
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden group border border-gray-100 dark:border-gray-800 hover:border-gold-300 dark:hover:border-gold-700 transition-colors relative"
      whileHover={{ y: -5 }}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-gold-500 to-gold-700 text-white rounded-full hover:shadow-lg transition-all font-medium w-full justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t('portfolio.viewCase')}</span>
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white mb-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gold-50 dark:bg-black text-gold-700 dark:text-gold-400 text-xs font-medium rounded-full border border-gold-100 dark:border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="portfolio" className="py-24 bg-gray-50 dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-4" >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              {t('portfolio.title')}
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="w-24 h-1.5 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full mb-6" 
            />
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {t('portfolio.subtitle')}
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-gold-500 to-gold-700 text-white border-transparent shadow-lg'
                    : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-gold-300 dark:hover:border-gold-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
