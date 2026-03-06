import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Mail, Instagram, MessageCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/dracamilamunoz', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/573000000000', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:contacto@dracamilamunoz.com', label: 'Email' }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12"
        >
          <motion.div
            variants={itemVariants}
            className="flex-1 text-center md:text-left order-2 md:order-1"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading text-gray-900 dark:text-white mb-6 leading-tight"
            >
              {t('hero.title').split('Camila Muñoz')[0]}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600">
                Camila Muñoz
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-light"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center md:justify-start mb-8"
            >
              {t('hero.technologies').split('•').map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-gold-50 dark:bg-gray-800 text-gold-600 dark:text-gold-400 rounded-full text-sm font-medium border border-gold-200 dark:border-gray-700">
                  {tech.trim()}
                </span>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:from-gold-600 hover:to-gold-700 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={18} />
                <span>{t('hero.getInTouch')}</span>
              </motion.a>
              
              <motion.button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                <span>{t('hero.downloadCV')}</span>
              </motion.button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center justify-center md:justify-start gap-6"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative order-1 md:order-2 mb-8 md:mb-0"
          >
            <div className="relative w-72 h-96 sm:w-96 sm:h-[32rem]">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-200 to-gold-300 dark:from-gold-900 dark:to-gold-800 rounded-full blur-3xl opacity-30 animate-pulse" />
              <motion.img
                src="/hero.jpeg"
                alt="Dra. Camila Muñoz"
                className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border-2 border-white/50 dark:border-gray-700/50 rotate-3 hover:rotate-0 transition-all duration-500"
                whileHover={{ scale: 1.02 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Agenda Abierta</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;