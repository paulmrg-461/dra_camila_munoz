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
    'hero.title': 'Hola, soy Dra. Camila Muñoz',
    'hero.subtitle': 'Especialista en Armonización Orofacial',
    'hero.technologies': 'Botox • Ácido Hialurónico • Rinomodelación • Labios Rusos • Bioestimuladores',
    'hero.description': 'Transformo rostros realzando tu belleza natural mediante técnicas avanzadas de armonización orofacial. Mi enfoque combina ciencia y arte para lograr resultados estéticos, seguros y equilibrados.',
    'hero.getInTouch': 'Agendar Cita',
    'hero.downloadCV': 'Ver Tratamientos',
    'hero.chatTitle': 'Asistente Virtual',
    'hero.chatIntro': 'Pregúntame sobre tratamientos, precios y disponibilidad.',
    'chat.inputPlaceholder': 'Escribe tu mensaje...',
    'chat.send': 'Enviar',
    'chat.thinking': 'Pensando...',
    
    // About Section
    'about.title': 'Sobre la Dra. Camila',
    'about.subtitle': 'Pasión por la estética y compromiso con la excelencia médica',
    'about.description1': 'Soy Odontóloga especialista en Armonización Orofacial, dedicada a resaltar la belleza natural de mis pacientes. Con años de experiencia y formación continua, ofrezco tratamientos seguros y personalizados.',
    'about.description2': 'Mi filosofía se basa en la "Naturalidad Estética", buscando siempre resultados que armonicen con las facciones del paciente sin perder su esencia. Utilizo productos de la más alta calidad y las últimas técnicas del mercado.',
    'about.description3': 'Cada rostro es único, y por ello, cada tratamiento comienza con un análisis facial detallado para diseñar un plan a medida que cumpla con tus expectativas y mejore tu confianza.',
    'about.patientsTreated': 'Pacientes Atendidos',
    'about.projectsCompleted': 'Pacientes Felices',
    'about.yearsExperience': 'Años de Experiencia',
    'about.skillsTitle': 'Especialidades',
    'about.values': 'Valores y Seguridad',
    'about.frontendMobile': 'Facial',
    'about.backendDatabase': 'Antienvejecimiento',
    'about.toolsCloud': 'Tecnología',
    'about.aiAutomation': 'Seguridad',
    
    // Portfolio Section (Casos)
    'portfolio.title': 'Casos de Éxito',
    'portfolio.subtitle': 'Resultados reales en pacientes reales. Descubre cómo podemos transformar tu rostro manteniendo tu naturalidad.',
    'portfolio.allProjects': 'Todos',
    'portfolio.webApps': 'Facial',
    'portfolio.mobileApps': 'Labios',
    'portfolio.fullStack': 'Rejuvenecimiento',
    'portfolio.desktopApps': 'Otros',

    // Projects (Casos)
    'project.case1.title': 'Rinomodelación Sin Cirugía',
    'project.case1.description': 'Corrección de perfil nasal con ácido hialurónico. Resultado inmediato y recuperación rápida.',
    'project.case2.title': 'Labios Rusos',
    'project.case2.description': 'Aumento de volumen y definición de arco de cupido con técnica rusa para un acabado plano y elevado.',
    'project.case3.title': 'Rejuvenecimiento Facial Completo',
    'project.case3.description': 'Combinación de toxina botulínica y bioestimuladores para suavizar arrugas y mejorar la calidad de la piel.',
    
    // Services Section
    'services.title': 'Mis Tratamientos',
    'services.subtitle': 'Procedimientos mínimamente invasivos con resultados extraordinarios',
    
    // Services Details
    'services.rinomodelacion.title': 'Rinomodelación',
    'services.rinomodelacion.description': 'Modifica la forma de tu nariz sin cirugía.',
    'services.rinomodelacion.feature1': 'Resultados inmediatos',
    'services.rinomodelacion.feature2': 'Sin tiempo de baja',
    
    'services.labios.title': 'Perfilado y Aumento de Labios',
    'services.labios.description': 'Labios hidratados, definidos y con el volumen deseado.',
    'services.labios.feature1': 'Técnica Rusa',
    'services.labios.feature2': 'Hidratación profunda',
    
    'services.botox.title': 'Toxina Botulínica',
    'services.botox.description': 'Previene y suaviza las arrugas de expresión.',
    'services.botox.feature1': 'Frente y entrecejo',
    'services.botox.feature2': 'Patas de gallo',
    
    'services.bioestimuladores.title': 'Bioestimuladores de Colágeno',
    'services.bioestimuladores.description': 'Recupera la firmeza y juventud de tu piel.',
    'services.bioestimuladores.feature1': 'Radiesse / Sculptra',
    'services.bioestimuladores.feature2': 'Efecto lifting',
    
    // Clients Section (Testimonios)
    'clients.title': 'Lo que dicen mis pacientes',
    'clients.subtitle': 'La satisfacción de mis pacientes es mi mayor carta de presentación.',
    'clients.trustedBy': 'Pacientes felices',
    'clients.patient1.description': 'La rinomodelación cambió mi vida. La Dra. Camila fue súper profesional y el resultado es increíblemente natural. ¡Me siento más segura!',
    'clients.patient1.treatment': 'Rinomodelación',
    'clients.patient2.description': 'Tenía miedo de que mis labios se vieran falsos, pero la técnica de labios rusos es perfecta. Volumen justo y forma hermosa. Recomendadísima.',
    'clients.patient2.treatment': 'Labios Rusos',
    'clients.patient3.description': 'Me hice un tratamiento full face y rejuvenecí 10 años. La atención es excelente y te explican todo con detalle.',
    'clients.patient3.treatment': 'Full Face',
    
    // Contact Section
    'contact.title': 'Agenda tu Cita',
    'contact.subtitle': 'Da el primer paso hacia tu mejor versión. Escríbeme para evaluar tu caso.',
    'contact.letsConnect': 'Contáctame',
    'contact.name': 'Nombre Completo',
    'contact.email': 'Email',
    'contact.subject': 'Tratamiento de Interés',
    'contact.message': 'Cuéntame tus dudas...',
    'contact.sendMessage': 'Enviar Consulta',
    'contact.nameRequired': 'El nombre es requerido',
    'contact.emailRequired': 'El email es requerido',
    'contact.emailInvalid': 'Dirección de email inválida',
    'contact.subjectRequired': 'El asunto es requerido',
    'contact.messageRequired': 'El mensaje es requerido',
    'contact.namePlaceholder': 'Tu nombre',
    'contact.emailPlaceholder': 'tu@email.com',
    'contact.subjectPlaceholder': 'Ej: Rinomodelación',
    'contact.messagePlaceholder': 'Hola Dra., quisiera información sobre...',
    'contact.thankYou': '¡Gracias por tu mensaje! Te responderé pronto.',
    'contact.sending': 'Enviando...',
    'contact.errorSending': 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    
    // Footer
    'footer.madeWith': 'Hecho con',
    'footer.by': 'por DevPaul',
    'footer.rights': '© 2024 Dra. Camila Muñoz. Todos los derechos reservados.'
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
    'hero.title': 'Hi, I am Dr. Camila Muñoz',
    'hero.subtitle': 'Orofacial Harmonization Specialist',
    'hero.technologies': 'Botox • Hyaluronic Acid • Rhinomodeling • Russian Lips • Biostimulators',
    'hero.description': 'I transform faces enhancing your natural beauty through advanced orofacial harmonization techniques. My approach combines science and art to achieve aesthetic, safe, and balanced results.',
    'hero.getInTouch': 'Book Appointment',
    'hero.downloadCV': 'View Treatments',
    'hero.chatTitle': 'Virtual Assistant',
    'hero.chatIntro': 'Ask me about treatments, prices, and availability.',
    'chat.inputPlaceholder': 'Type your message...',
    'chat.send': 'Send',
    'chat.thinking': 'Thinking...',
    
    // About Section
    'about.title': 'About Dr. Camila',
    'about.subtitle': 'Passion for aesthetics and commitment to medical excellence',
    'about.description1': 'I am a Dentist specializing in Orofacial Harmonization, dedicated to highlighting the natural beauty of my patients. With years of experience and continuous training, I offer safe and personalized treatments.',
    'about.description2': 'My philosophy is based on "Aesthetic Naturalness", always seeking results that harmonize with the patient\'s features without losing their essence. I use the highest quality products and the latest techniques in the market.',
    'about.description3': 'Each face is unique, and therefore, each treatment begins with a detailed facial analysis to design a tailored plan that meets your expectations and improves your confidence.',
    'about.projectsCompleted': 'Happy Patients',
    'about.yearsExperience': 'Years Experience',
    'about.skillsTitle': 'Specialties',
    'about.frontendMobile': 'Facial',
    'about.backendDatabase': 'Anti-Aging',
    'about.toolsCloud': 'Technology',
    'about.aiAutomation': 'Safety',
    
    // Portfolio Section (Cases)
    'portfolio.title': 'Success Stories',
    'portfolio.subtitle': 'Real results on real patients. Discover how we can transform your face while maintaining your naturalness.',
    'portfolio.allProjects': 'All',
    'portfolio.webApps': 'Facial',
    'portfolio.mobileApps': 'Lips',
    'portfolio.fullStack': 'Rejuvenation',
    'portfolio.desktopApps': 'Others',

    // Projects (Cases)
    'project.case1.title': 'Non-Surgical Rhinomodeling',
    'project.case1.description': 'Nasal profile correction with hyaluronic acid. Immediate result and quick recovery.',
    'project.case2.title': 'Russian Lips',
    'project.case2.description': 'Volume increase and cupid\'s bow definition with Russian technique for a flat and elevated finish.',
    'project.case3.title': 'Full Facial Rejuvenation',
    'project.case3.description': 'Combination of botulinum toxin and biostimulators to smooth wrinkles and improve skin quality.',
    
    // Services Section
    'services.title': 'My Treatments',
    'services.subtitle': 'Minimally invasive procedures with extraordinary results',
    
    // Services Details
    'services.rinomodelacion.title': 'Rhinomodeling',
    'services.rinomodelacion.description': 'Modify the shape of your nose without surgery.',
    'services.rinomodelacion.feature1': 'Immediate results',
    'services.rinomodelacion.feature2': 'No downtime',
    
    'services.labios.title': 'Lip Profiling and Augmentation',
    'services.labios.description': 'Hydrated, defined lips with desired volume.',
    'services.labios.feature1': 'Russian Technique',
    'services.labios.feature2': 'Deep hydration',
    
    'services.botox.title': 'Botulinum Toxin',
    'services.botox.description': 'Prevents and smooths expression wrinkles.',
    'services.botox.feature1': 'Forehead and glabella',
    'services.botox.feature2': 'Crow\'s feet',
    
    'services.bioestimuladores.title': 'Collagen Biostimulators',
    'services.bioestimuladores.description': 'Recover the firmness and youth of your skin.',
    'services.bioestimuladores.feature1': 'Radiesse / Sculptra',
    'services.bioestimuladores.feature2': 'Lifting effect',
    
    // Clients Section (Testimonials)
    'clients.title': 'What my patients say',
    'clients.subtitle': 'The satisfaction of my patients is my greatest letter of introduction.',
    'clients.trustedBy': 'Happy patients',
    'clients.patient1.description': 'Rhinomodeling changed my life. Dr. Camila was super professional and the result is incredibly natural. I feel more confident!',
    'clients.patient1.treatment': 'Rhinomodeling',
    'clients.patient2.description': 'I was afraid my lips would look fake, but the Russian lips technique is perfect. Just the right volume and beautiful shape. Highly recommended.',
    'clients.patient2.treatment': 'Russian Lips',
    'clients.patient3.description': 'I had a full face treatment and look 10 years younger. The attention is excellent and they explain everything in detail.',
    'clients.patient3.treatment': 'Full Face',
    
    // Contact Section
    'contact.title': 'Book your Appointment',
    'contact.subtitle': 'Take the first step towards your best version. Write to me to evaluate your case.',
    'contact.letsConnect': 'Contact Me',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.subject': 'Treatment of Interest',
    'contact.message': 'Tell me your doubts...',
    'contact.sendMessage': 'Send Inquiry',
    'contact.nameRequired': 'Name is required',
    'contact.emailRequired': 'Email is required',
    'contact.emailInvalid': 'Invalid email address',
    'contact.subjectRequired': 'Subject is required',
    'contact.messageRequired': 'Message is required',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.subjectPlaceholder': 'Ex: Rhinomodeling',
    'contact.messagePlaceholder': 'Hi Dr., I would like information about...',
    'contact.thankYou': 'Thanks for your message! I will answer you soon.',
    'contact.sending': 'Sending...',
    'contact.errorSending': 'Error sending message. Please try again.',
    
    // Footer
    'footer.madeWith': 'Made with',
    'footer.by': 'by DevPaul',
    'footer.rights': '© 2024 Dr. Camila Muñoz. All rights reserved.'
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
