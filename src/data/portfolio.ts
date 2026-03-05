import { Project, Service, Credential, Client } from '../types/index';
import { UserCheck } from 'lucide-react';

type ProjectData = Omit<Project, 'title' | 'description'> & {
  slug: string;
};

const projectData: ProjectData[] = [
  {
    id: '1',
    slug: 'case1',
    image: '/logo_light.jpeg', // Placeholder
    technologies: ['Rinomodelación', 'Ácido Hialurónico'],
    liveUrl: '#',
    category: 'facial'
  },
  {
    id: '2',
    slug: 'case2',
    image: '/logo_light.jpeg', // Placeholder
    technologies: ['Labios Rusos', 'Volumen'],
    liveUrl: '#',
    category: 'labios'
  },
  {
    id: '3',
    slug: 'case3',
    image: '/logo_light.jpeg', // Placeholder
    technologies: ['Botox', 'Rejuvenecimiento'],
    liveUrl: '#',
    category: 'antiaging'
  },
];

export const getProjects = (t: (key: string) => string): Project[] => {
  return projectData.map(project => ({
    ...project,
    title: t(`project.${project.slug}.title`),
    description: t(`project.${project.slug}.description`)
  }));
};

export const services: Service[] = [
  {
    id: '1',
    title: 'services.botox.title',
    description: 'services.botox.description',
    icon: 'Sparkles',
    features: ['services.botox.feature1', 'services.botox.feature2', 'services.botox.feature3']
  },
  {
    id: '2',
    title: 'services.bioestimuladores.title',
    description: 'services.bioestimuladores.description',
    icon: 'Activity',
    features: ['services.bioestimuladores.feature1', 'services.bioestimuladores.feature2', 'services.bioestimuladores.feature3']
  },
  {
    id: '3',
    title: 'services.labios.title',
    description: 'services.labios.description',
    icon: 'Smile',
    features: ['services.labios.feature1', 'services.labios.feature2', 'services.labios.feature3']
  }
];

export const credentials: Credential[] = [
  { 
    id: '1',
    title: 'Cirujano Dentista', 
    institution: 'Universidad de Chile', 
    year: '2018',
    category: 'academic' 
  },
  { 
    id: '2',
    title: 'Especialista en Armonización Orofacial', 
    institution: 'Academia Internacional de Estética', 
    year: '2020',
    category: 'certification' 
  },
  { 
    id: '3',
    title: 'Master en Rinomodelación Avanzada', 
    institution: 'Instituto de Salud y Belleza', 
    year: '2021',
    category: 'certification' 
  },
  { 
    id: '4',
    title: 'Seguridad del Paciente', 
    institution: 'Compromiso Ético', 
    category: 'value' 
  },
  { 
    id: '5',
    title: 'Excelencia Clínica', 
    institution: 'Estándar de Calidad', 
    category: 'value' 
  },
];

type ClientData = Omit<Client, 'description' | 'category'> & {
  slug: string;
};

const clientData: ClientData[] = [
  {
    id: '1',
    slug: 'patient1',
    name: 'Ana María',
    icon: UserCheck
  },
  {
    id: '2',
    slug: 'patient2',
    name: 'Carlos R.',
    icon: UserCheck
  },
  {
    id: '3',
    slug: 'patient3',
    name: 'Sofía L.',
    icon: UserCheck
  }
];

export const getClients = (t: (key: string) => string): Client[] => {
  return clientData.map(client => ({
    ...client,
    description: t(`clients.${client.slug}.description`),
    category: t(`clients.${client.slug}.treatment`)
  }));
};
