import { Project, Service, Skill, Client } from '../types';
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
    githubUrl: '#',
    category: 'facial'
  },
  {
    id: '2',
    slug: 'case2',
    image: '/logo_light.jpeg', // Placeholder
    technologies: ['Labios Rusos', 'Volumen'],
    liveUrl: '#',
    githubUrl: '#',
    category: 'labios'
  },
  {
    id: '3',
    slug: 'case3',
    image: '/logo_light.jpeg', // Placeholder
    technologies: ['Botox', 'Rejuvenecimiento'],
    liveUrl: '#',
    githubUrl: '#',
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
    title: 'services.rinomodelacion.title',
    description: 'services.rinomodelacion.description',
    icon: 'Sparkles',
    features: ['services.rinomodelacion.feature1', 'services.rinomodelacion.feature2']
  },
  {
    id: '2',
    title: 'services.labios.title',
    description: 'services.labios.description',
    icon: 'Smile',
    features: ['services.labios.feature1', 'services.labios.feature2']
  },
  {
    id: '3',
    title: 'services.botox.title',
    description: 'services.botox.description',
    icon: 'Syringe',
    features: ['services.botox.feature1', 'services.botox.feature2']
  },
  {
    id: '4',
    title: 'services.bioestimuladores.title',
    description: 'services.bioestimuladores.description',
    icon: 'Activity',
    features: ['services.bioestimuladores.feature1', 'services.bioestimuladores.feature2']
  }
];

export const skills: Skill[] = [
  { name: 'Rinomodelación', level: 100, category: 'procedimientos' },
  { name: 'Labios Rusos', level: 100, category: 'procedimientos' },
  { name: 'Toxina Botulínica', level: 100, category: 'procedimientos' },
  { name: 'Bioestimuladores', level: 95, category: 'procedimientos' },
  { name: 'Seguridad del Paciente', level: 100, category: 'valores' },
  { name: 'Ética Profesional', level: 100, category: 'valores' },
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
