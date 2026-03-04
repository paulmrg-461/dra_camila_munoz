import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactFormData } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { sendEmail } from '../utils/emailService';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const result = await sendEmail(data);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: t('contact.thankYou')
        });
        reset();
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: t('contact.errorSending')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: t('footer.email'),
      link: `mailto:${t('footer.email')}`
    },
    {
      icon: Phone,
      title: 'WhatsApp / ' + t('contact.phone'),
      value: t('footer.phone'),
      link: `https://wa.me/${t('footer.phone').replace(/\D/g, '')}`
    },
    {
      icon: MapPin,
      title: t('footer.address').split(',')[2] || 'Ubicación',
      value: t('footer.address'),
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gold-300 dark:hover:border-gold-700 transition-all group"
              >
                <div className="p-4 bg-white dark:bg-black rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={24} className="text-gold-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm">{item.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder={t('contact.namePlaceholder')}
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-black border ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'} focus:border-gold-500 dark:focus:border-gold-500 focus:ring-2 focus:ring-gold-200 dark:focus:ring-gold-900/20 outline-none transition-all`}
                    {...register('name', { required: t('contact.nameRequired') })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder={t('contact.emailPlaceholder')}
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-black border ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'} focus:border-gold-500 dark:focus:border-gold-500 focus:ring-2 focus:ring-gold-200 dark:focus:ring-gold-900/20 outline-none transition-all`}
                    {...register('email', { 
                      required: t('contact.emailRequired'),
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: t('contact.emailInvalid')
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder={t('contact.phonePlaceholder')}
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-black border ${errors.phone ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'} focus:border-gold-500 dark:focus:border-gold-500 focus:ring-2 focus:ring-gold-200 dark:focus:ring-gold-900/20 outline-none transition-all`}
                    {...register('phone', { required: t('contact.phoneRequired') })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder={t('contact.subjectPlaceholder')}
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-black border ${errors.subject ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'} focus:border-gold-500 dark:focus:border-gold-500 focus:ring-2 focus:ring-gold-200 dark:focus:ring-gold-900/20 outline-none transition-all`}
                    {...register('subject', { required: t('contact.subjectRequired') })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.subject.message}
                    </p>
                  )}
                </div>
              </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: t('contact.messageRequired') })}
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white dark:bg-black text-gray-900 dark:text-white resize-none transition-shadow"
                    placeholder={t('contact.messagePlaceholder')}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-center space-x-2 ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800'
                        : 'bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
                    }`}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <span>{submitStatus.message}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg ${
                    isSubmitting
                      ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-gold-500 to-gold-700 hover:shadow-xl hover:from-gold-600 hover:to-gold-800 text-white'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>{t('contact.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>{t('contact.sendMessage')}</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
