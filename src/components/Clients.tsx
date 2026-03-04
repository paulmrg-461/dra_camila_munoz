import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { getClients } from '../data/portfolio';

const Clients: React.FC = () => {
  const { t } = useLanguage();
  const clients = getClients(t);
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

  const itemVariants: Variants = {
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

  const ClientCard: React.FC<{ client: ReturnType<typeof getClients>[0] }> = ({ client }) => {
    const IconComponent = client.icon;

    return (
      <motion.div
        variants={itemVariants}
        className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-800 hover:border-gold-300 dark:hover:border-gold-700 relative"
        whileHover={{ y: -5 }}
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
           <IconComponent size={64} className="text-gold-500" />
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
             <span className="text-white font-bold text-xl">{client.name.charAt(0)}</span>
          </div>
          <div>
            <h3 className="text-lg font-bold font-heading text-gray-900 dark:text-white">
              {client.name}
            </h3>
            <span className="text-sm text-gold-600 dark:text-gold-400 font-medium">
              {client.category}
            </span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed relative z-10">
          "{client.description}"
        </p>
      </motion.div>
    );
  };

  return (
    <section id="clients" className="py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              {t('clients.title')}
            </motion.h2>
            <motion.div 
              variants={itemVariants}
              className="w-24 h-1.5 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto rounded-full mb-6" 
            />
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {t('clients.subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;