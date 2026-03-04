import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { credentials } from '../data/portfolio';
import { useLanguage } from '../contexts/LanguageContext';
import { GraduationCap, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();
  
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
    hidden: { y: 20, opacity: 0 },
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

  const academicCredentials = credentials.filter(c => c.category === 'academic' || c.category === 'certification');
  const values = credentials.filter(c => c.category === 'value');

  const CredentialCard: React.FC<{ credential: typeof credentials[0] }> = ({ credential }) => (
    <motion.div
      className="mb-4 flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 hover:border-gold-300 dark:hover:border-gold-700 transition-colors"
      variants={itemVariants}
    >
      <div className="p-2 bg-gold-100 dark:bg-gold-900/30 rounded-lg text-gold-600 dark:text-gold-400">
        {credential.category === 'academic' ? <GraduationCap size={20} /> : 
         credential.category === 'certification' ? <Award size={20} /> : <Heart size={20} />}
      </div>
      <div>
        <h5 className="font-semibold text-gray-900 dark:text-white font-heading">{credential.title}</h5>
        <p className="text-sm text-gray-600 dark:text-gray-400">{credential.institution}</p>
        {credential.year && <span className="text-xs text-gold-500 font-medium mt-1 block">{credential.year}</span>}
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={itemVariants}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-100 to-gold-200 dark:from-gold-900/20 dark:to-gold-800/20 rounded-3xl transform -rotate-3 scale-105" />
              <motion.img
                src="/about.jpeg"
                alt="Dra. Camila Muñoz"
                className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 max-w-xs">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-600 to-gold-400 mb-2">
                  +5
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {t('about.yearsExperience')}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8 order-1 lg:order-2">
              <div>
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6"
                  variants={itemVariants}
                >
                  {t('about.title')}
                  <span className="block text-2xl md:text-3xl text-gold-600 dark:text-gold-500 mt-2 font-light">
                    {t('about.subtitle')}
                  </span>
                </motion.h2>
                
                <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p className="mb-4">
                    {t('about.description1')}
                  </p>
                  <p>
                    {t('about.description2')}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-1 gap-6 mt-8">
                <div>
                  <h4 className="text-lg font-semibold font-heading text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-8 h-1 bg-gold-500 rounded-full"></span>
                    {t('about.specialization')}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                     {academicCredentials.map((cred) => (
                        <CredentialCard key={cred.id} credential={cred} />
                     ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
                   <h4 className="text-lg font-semibold font-heading text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-8 h-1 bg-gold-600 rounded-full"></span>
                    {t('about.values')}
                  </h4>
                   <div className="flex flex-wrap gap-4">
                      {values.map((val) => (
                        <span key={val.id} className="px-4 py-2 bg-gold-50 dark:bg-gold-900/20 text-gold-700 dark:text-gold-300 rounded-full text-sm font-medium border border-gold-100 dark:border-gold-800/30">
                           {val.title}
                        </span>
                      ))}
                   </div>
                </div>
              </div>

              <motion.div 
                className="pt-8 flex gap-8 border-t border-gray-100 dark:border-gray-800"
                variants={itemVariants}
              >
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">+1000</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{t('about.patientsTreated')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">100%</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{t('about.satisfaction')}</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
