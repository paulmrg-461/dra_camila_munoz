import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { skills } from '../data/portfolio';
import { useLanguage } from '../contexts/LanguageContext';

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

  const skillCategories = {
    procedimientos: skills.filter(skill => skill.category === 'procedimientos'),
    valores: skills.filter(skill => skill.category === 'valores')
  };

  const SkillBar: React.FC<{ skill: typeof skills[0] }> = ({ skill }) => (
    <motion.div
      className="mb-6"
      variants={itemVariants}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 font-heading tracking-wide">{skill.name}</span>
        <span className="text-sm text-gold-600 dark:text-gold-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-gold-500 to-gold-600 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
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
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-100 to-gold-200 dark:from-gold-900/20 dark:to-gold-800/20 rounded-3xl transform rotate-3 scale-105" />
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

            <motion.div variants={itemVariants} className="space-y-8">
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

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 mt-12">
                <div>
                  <h4 className="text-lg font-semibold font-heading text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-8 h-1 bg-gold-500 rounded-full"></span>
                    {t('about.specialization')}
                  </h4>
                  {skillCategories.procedimientos.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-semibold font-heading text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-8 h-1 bg-gold-600 rounded-full"></span>
                    {t('about.values')}
                  </h4>
                  {skillCategories.valores.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
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
