import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.portfolio': 'Casos de Éxito',
    'nav.services': 'Tratamientos',
    'nav.clients': 'Testimonios',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Dra. Camila Muñoz',
    'hero.subtitle': 'Especialista en Armonización Orofacial',
    'hero.technologies': 'Toxina Botulínica • Bioestimuladores de Colágeno • Perfilado y Aumento de Labios',
    'hero.description': 'Bienvenida a un espacio donde la armonización orofacial se convierte en una experiencia de elegancia, precisión y confianza. Aquí, cada tratamiento está diseñado para resaltar tu belleza natural con sutileza y armonía, respetando la esencia única de tu rostro.',
    'hero.getInTouch': 'Agendar Cita',
    'hero.downloadCV': 'Ver Tratamientos',
    'hero.chatTitle': 'Asistente Virtual',
    'hero.chatIntro': 'Pregúntame sobre tratamientos, precios y disponibilidad.',
    'chat.inputPlaceholder': 'Escribe tu mensaje...',
    'chat.send': 'Enviar',
    'chat.thinking': 'Pensando...',
    
    // About Section
    'about.title': 'Dra. Camila Muñoz',
    'about.subtitle': 'Donde la ciencia y el arte crean belleza.',
    'about.description1': 'Odontóloga registrada ante el Colegio Odontológico Colombiano y especialista en Armonización Orofacial por UNIFAZ – Faculdade Ziroldo, Brasil.',
    'about.description2': 'Mi filosofía de trabajo se basa en resaltar la belleza natural de cada paciente a través de procedimientos seguros, precisos y personalizados. Combino ciencia, estética y técnicas avanzadas para lograr resultados elegantes, armónicos y naturales.',
    'about.description3': 'Cada rostro es único, y por ello, cada tratamiento comienza con un análisis facial detallado para diseñar un plan a medida que cumpla con tus expectativas y mejore tu confianza.',
    'about.patientsTreated': 'Pacientes Atendidos',
    'about.satisfaction': 'Satisfacción',
    'about.yearsExperience': 'Años de Experiencia',
    'about.specialization': 'Formación Académica',
    'about.values': 'Valores y Seguridad',
    
    // Credentials
    'about.cred.odontologa': 'Odontóloga',
    'about.cred.coc': 'Colegio Odontológico Colombiano',
    'about.cred.especialista': 'Especialista en Armonización Orofacial',
    'about.cred.unifaz': 'UNIFAZ – Faculdade Ziroldo, Brasil',
    'about.cred.seguridad': 'Seguridad del Paciente',
    'about.cred.protocolos': 'Protocolos de Excelencia',
    'about.cred.etica': 'Ética y Estética Natural',
    'about.cred.compromiso': 'Compromiso Médico',
    
    // Portfolio Section (Casos)
    'portfolio.title': 'Casos de Éxito',
    'portfolio.subtitle': 'Resultados reales en pacientes reales. Descubre cómo podemos transformar tu rostro manteniendo tu naturalidad.',
    'portfolio.allProjects': 'Todos',
    'portfolio.facial': 'Facial',
    'portfolio.labios': 'Labios',
    'portfolio.antiaging': 'Rejuvenecimiento',
    'portfolio.viewCase': 'Ver Caso',

    // Projects (Casos)
    'project.botox.title': 'Toxina Botulínica',
    'project.botox.description': 'Suaviza líneas sin congelar tu esencia. Logra una mirada fresca, descansada y naturalmente armoniosa.',
    
    'project.bioestimuladores.title': 'Bioestimuladores de Colágeno',
    'project.bioestimuladores.description': 'Activa tu propio colágeno para una firmeza real. Redefine contornos con efecto lifting sutil y progresivo.',
    
    'project.labios.title': 'Perfilado y Aumento de Labios',
    'project.labios.description': 'Diseño labial de alta precisión. Labios definidos, hidratados y armónicos con volumen elegante.',
    
    // Services Section
    'services.title': 'Mis Tratamientos',
    'services.subtitle': 'Procedimientos mínimamente invasivos con resultados extraordinarios',
    
    // Services Details
    'services.botox.title': 'Toxina Botulínica',
    'services.botox.description': 'Elegancia en cada expresión.',
    'services.botox.feature1': 'Suaviza líneas sin congelar tu esencia.',
    'services.botox.feature2': 'Previene el envejecimiento con precisión experta.',
    'services.botox.feature3': 'Logra una mirada fresca, descansada y naturalmente armoniosa.',
    
    'services.bioestimuladores.title': 'Bioestimuladores de Colágeno',
    'services.bioestimuladores.description': 'No es volumen. Es estructura. Es calidad de piel.',
    'services.bioestimuladores.feature1': 'Activa tu propio colágeno para una firmeza real.',
    'services.bioestimuladores.feature2': 'Redefine contornos con efecto lifting sutil y progresivo.',
    'services.bioestimuladores.feature3': 'Rejuvenece con distinción y naturalidad.',
    
    'services.labios.title': 'Perfilado y Aumento de Labios',
    'services.labios.description': 'Diseño labial de alta precisión.',
    'services.labios.feature1': 'Labios definidos, hidratados y armónicos.',
    'services.labios.feature2': 'Volumen elegante, nunca exagerado.',
    'services.labios.feature3': 'Técnica personalizada según tu proporción facial.',
    
    // Clients Section (Testimonios)
    'clients.title': 'Lo que dicen mis pacientes',
    'clients.subtitle': 'La satisfacción de mis pacientes es mi mayor carta de presentación.',
    'clients.trustedBy': 'Pacientes felices',
    'clients.patient1.description': 'Mi rostro luce más descansado y fresco sin perder mi expresión natural. ¡Me encanta!',
    'clients.patient1.treatment': 'Toxina Botulínica',
    'clients.patient2.description': 'Tenía miedo de que se vieran falsos, pero el resultado es increíblemente natural y elegante.',
    'clients.patient2.treatment': 'Perfilado de Labios',
    'clients.patient3.description': 'La firmeza de mi piel mejoró notablemente. Es el mejor tratamiento que me he realizado.',
    'clients.patient3.treatment': 'Bioestimuladores',
    
    // Contact Section
    'contact.title': 'Agenda tu Cita',
    'contact.subtitle': 'Da el primer paso hacia tu mejor versión. Escríbeme para evaluar tu caso.',
    'contact.letsConnect': 'Contáctame',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.subject': 'Tratamiento de Interés',
    'contact.message': 'Cuéntame tus dudas...',
    'contact.sendMessage': 'Enviar Consulta',
    'contact.nameRequired': 'El nombre es requerido',
    'contact.emailRequired': 'El email es requerido',
    'contact.phoneRequired': 'El teléfono es requerido',
    'contact.emailInvalid': 'Dirección de email inválida',
    'contact.subjectRequired': 'El asunto es requerido',
    'contact.messageRequired': 'El mensaje es requerido',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailPlaceholder': 'tu@email.com',
    'contact.phonePlaceholder': '+57 310 4466710',
    'contact.subjectPlaceholder': 'Ej: Toxina Botulínica',
    'contact.messagePlaceholder': 'Hola Dra., quisiera información sobre...',
    'contact.thankYou': '¡Gracias por tu mensaje! Te responderé pronto.',
    'contact.sending': 'Enviando...',
    'contact.errorSending': 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    
    // Footer
    'footer.about': 'Sobre Mí',
    'footer.links': 'Enlaces Rápidos',
    'footer.contact': 'Contacto',
    'footer.follow': 'Sígueme',
    'footer.address': 'Cra. 97a #45-17, Cali Valle',
    'footer.phone': '+57 310 4466710',
    'footer.email': 'contacto@dracamilamunoz.com',
    'footer.rights': '© 2024 Dra. Camila Muñoz. Todos los derechos reservados.',
    'footer.schedule': 'Horario',
    'footer.hours': 'Lunes a Viernes: 9:00 - 19:00',
    'footer.hoursSat': 'Sábados: 10:00 - 14:00'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.portfolio': 'Success Stories',
    'nav.services': 'Treatments',
    'nav.clients': 'Testimonials',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Dr. Camila Muñoz',
    'hero.subtitle': 'Orofacial Harmonization Specialist',
    'hero.technologies': 'Botulinum Toxin • Collagen Biostimulators • Lip Profiling and Augmentation',
    'hero.description': 'Welcome to a space where orofacial harmonization becomes an experience of elegance, precision, and confidence. Here, each treatment is designed to highlight your natural beauty with subtlety and harmony, respecting the unique essence of your face.',
    'hero.getInTouch': 'Book Appointment',
    'hero.downloadCV': 'View Treatments',
    'hero.chatTitle': 'Virtual Assistant',
    'hero.chatIntro': 'Ask me about treatments, prices, and availability.',
    'chat.inputPlaceholder': 'Type your message...',
    'chat.send': 'Send',
    'chat.thinking': 'Thinking...',
    
    // About Section
    'about.title': 'Dr. Camila Muñoz',
    'about.subtitle': 'Where science and art create beauty.',
    'about.description1': 'Registered Dentist with the Colombian Dental College and Orofacial Harmonization specialist by UNIFAZ – Faculdade Ziroldo, Brazil.',
    'about.description2': 'My work philosophy is based on highlighting the natural beauty of each patient through safe, precise, and personalized procedures. I combine science, aesthetics, and advanced techniques to achieve elegant, harmonious, and natural results.',
    'about.description3': 'Each face is unique, and therefore, each treatment begins with a detailed facial analysis to design a custom plan that meets your expectations and improves your confidence.',
    'about.patientsTreated': 'Patients Treated',
    'about.satisfaction': 'Satisfaction',
    'about.yearsExperience': 'Years Experience',
    'about.specialization': 'Academic Credentials',
    'about.values': 'Values & Safety',

    // Credentials
    'about.cred.odontologa': 'Dentist',
    'about.cred.coc': 'Colombian Dental College',
    'about.cred.especialista': 'Orofacial Harmonization Specialist',
    'about.cred.unifaz': 'UNIFAZ – Faculdade Ziroldo, Brazil',
    'about.cred.seguridad': 'Patient Safety',
    'about.cred.protocolos': 'Excellence Protocols',
    'about.cred.etica': 'Ethics & Natural Aesthetics',
    'about.cred.compromiso': 'Medical Commitment',

    // Portfolio Section (Cases)
    'portfolio.title': 'Success Stories',
    'portfolio.subtitle': 'Real results on real patients. Discover how we can transform your face while maintaining your naturalness.',
    'portfolio.allProjects': 'All',
    'portfolio.facial': 'Facial',
    'portfolio.labios': 'Lips',
    'portfolio.antiaging': 'Rejuvenation',
    'portfolio.viewCase': 'View Case',

    // Projects (Cases)
    'project.botox.title': 'Botulinum Toxin',
    'project.botox.description': 'Softens lines without freezing your essence. Achieves a fresh, rested, and naturally harmonious look.',
    
    'project.bioestimuladores.title': 'Collagen Biostimulators',
    'project.bioestimuladores.description': 'Activates your own collagen for real firmness. Redefines contours with a subtle and progressive lifting effect.',
    
    'project.labios.title': 'Lip Profiling and Augmentation',
    'project.labios.description': 'High precision lip design. Defined, hydrated, and harmonious lips with elegant volume.',
    
    // Services Section
    'services.title': 'My Treatments',
    'services.subtitle': 'Minimally invasive procedures with extraordinary results',
    
    // Services Details
    'services.botox.title': 'Botulinum Toxin',
    'services.botox.description': 'Elegance in every expression.',
    'services.botox.feature1': 'Softens lines without freezing your essence.',
    'services.botox.feature2': 'Prevents aging with expert precision.',
    'services.botox.feature3': 'Achieves a fresh, rested, and naturally harmonious look.',
    
    'services.bioestimuladores.title': 'Collagen Biostimulators',
    'services.bioestimuladores.description': 'It is not volume. It is structure. It is skin quality.',
    'services.bioestimuladores.feature1': 'Activates your own collagen for real firmness.',
    'services.bioestimuladores.feature2': 'Redefines contours with a subtle and progressive lifting effect.',
    'services.bioestimuladores.feature3': 'Rejuvenates with distinction and naturalness.',
    
    'services.labios.title': 'Lip Profiling and Augmentation',
    'services.labios.description': 'High precision lip design.',
    'services.labios.feature1': 'Defined, hydrated, and harmonious lips.',
    'services.labios.feature2': 'Elegant volume, never exaggerated.',
    'services.labios.feature3': 'Personalized technique according to your facial proportions.',
    
    // Clients Section (Testimonials)
    'clients.title': 'What my patients say',
    'clients.subtitle': 'The satisfaction of my patients is my greatest letter of introduction.',
    'clients.trustedBy': 'Happy patients',
    'clients.patient1.description': 'My face looks more rested and fresh without losing my natural expression. I love it!',
    'clients.patient1.treatment': 'Botulinum Toxin',
    'clients.patient2.description': 'I was afraid they would look fake, but the result is incredibly natural and elegant.',
    'clients.patient2.treatment': 'Lip Profiling',
    'clients.patient3.description': 'My skin firmness improved noticeably. It is the best treatment I have ever had.',
    'clients.patient3.treatment': 'Biostimulators',
    
    // Contact Section
    'contact.title': 'Book Appointment',
    'contact.subtitle': 'Take the first step towards your best version. Write to me to evaluate your case.',
    'contact.letsConnect': 'Contact Me',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.subject': 'Treatment of Interest',
    'contact.message': 'Tell me your questions...',
    'contact.sendMessage': 'Send Inquiry',
    'contact.nameRequired': 'Name is required',
    'contact.emailRequired': 'Email is required',
    'contact.phoneRequired': 'Phone is required',
    'contact.emailInvalid': 'Invalid email address',
    'contact.subjectRequired': 'Subject is required',
    'contact.messageRequired': 'Message is required',
    'contact.namePlaceholder': 'Your Name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.phonePlaceholder': '+57 310 4466710',
    'contact.subjectPlaceholder': 'Ex: Botulinum Toxin',
    'contact.messagePlaceholder': 'Hello Dr., I would like information about...',
    'contact.thankYou': 'Thanks for your message! I will reply soon.',
    'contact.sending': 'Sending...',
    'contact.errorSending': 'Error sending message. Please try again.',
    
    // Footer
    'footer.about': 'About Me',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow Me',
    'footer.address': 'Cra. 97a #45-17, Cali Valle',
    'footer.phone': '+57 310 4466710',
    'footer.email': 'contact@dracamilamunoz.com',
    'footer.rights': '© 2024 Dr. Camila Muñoz. All rights reserved.',
    'footer.schedule': 'Schedule',
    'footer.hours': 'Monday to Friday: 9:00 - 19:00',
    'footer.hoursSat': 'Saturdays: 10:00 - 14:00'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
