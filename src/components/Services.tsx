import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Smile, Syringe, Activity } from 'lucide-react';
import { services } from '../data/portfolio';
import { useLanguage } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  const iconMap = {
    Sparkles,
    Smile,
    Syringe,
    Activity
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  const ServiceCard: React.FC<{ service: typeof services[0] }> = ({ service }) => {
    const IconComponent = iconMap[service.icon as keyof typeof iconMap];

    return (
      <motion.div
        variants={itemVariants}
        className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-800 hover:border-gold-400 dark:hover:border-gold-500 relative overflow-hidden"
        whileHover={{ y: -5 }}
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold-400 to-gold-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="mb-6 relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
            <IconComponent size={32} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
            {t(service.title)}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {t(service.description)}
          </p>
        </div>
        
        <ul className="space-y-3 relative z-10">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3"></div>
              {t(feature)}
            </li>
          ))}
        </ul>
      </motion.div>
    );
  };

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {t('services.title')}
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t('services.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
