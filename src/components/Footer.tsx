import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone, MapPin, Instagram, MessageCircle, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { smoothScrollTo } from '../utils/smoothScroll';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId: string) => {
    smoothScrollTo(sectionId);
  };

  const footerLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'portfolio', label: t('nav.portfolio') },
    { id: 'contact', label: t('nav.contact') }
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-600">
              Dra. Camila Muñoz
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 rounded-full hover:bg-gold-900/30 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/56900000000" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 rounded-full hover:bg-gold-900/30 hover:text-gold-400 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-900 rounded-full hover:bg-gold-900/30 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2 inline-block">
              {t('footer.links')}
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => handleNavClick(link.id)}
                    className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2 inline-block">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={18} className="text-gold-500 shrink-0" />
                <a href={`tel:${t('footer.phone').replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {t('footer.phone')}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={18} className="text-gold-500 shrink-0" />
                <a href={`mailto:${t('footer.email')}`} className="hover:text-white transition-colors">
                  {t('footer.email')}
                </a>
              </li>
            </ul>
          </div>

          {/* Schedule CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2 inline-block">
              {t('footer.schedule')}
            </h4>
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
              <p className="text-gray-400 text-sm mb-4">
                <span className="block text-white font-medium mb-1">{t('footer.hours')}</span>
                {t('footer.hoursSat')}
              </p>
              <button 
                onClick={() => handleNavClick('contact')}
                className="w-full py-2 bg-gradient-to-r from-gold-500 to-gold-700 text-white rounded-lg font-medium hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                {t('contact.letsConnect')}
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            {t('footer.rights')}
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-gold-500 to-gold-700 hover:from-gold-600 hover:to-gold-800 rounded-full text-white shadow-lg transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;