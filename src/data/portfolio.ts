import { Project, Service, Credential, Client } from '../types/index';
import { UserCheck } from 'lucide-react';

type ProjectData = Omit<Project, 'title' | 'description'> & {
  slug: string;
};

const projectData: ProjectData[] = [
  {
    id: '1',
    slug: 'botox',
    image: '/treat1.jpeg',
    technologies: ['Toxina Botulínica', 'Rejuvenecimiento'],
    liveUrl: '#',
    category: 'facial'
  },
  {
    id: '2',
    slug: 'bioestimuladores',
    image: '/treat2.jpeg',
    technologies: ['Bioestimuladores', 'Colágeno', 'Lifting'],
    liveUrl: '#',
    category: 'facial'
  },
  {
    id: '3',
    slug: 'labios',
    image: '/treat1.jpeg',
    technologies: ['Ácido Hialurónico', 'Labios', 'Perfilado'],
    liveUrl: '#',
    category: 'labios'
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
    title: 'about.cred.odontologa', 
    institution: 'about.cred.coc', 
    category: 'academic' 
  },
  { 
    id: '2',
    title: 'about.cred.especialista', 
    institution: 'about.cred.unifaz', 
    category: 'certification' 
  },
  { 
    id: '3',
    title: 'about.cred.seguridad', 
    institution: 'about.cred.protocolos', 
    category: 'value' 
  },
  { 
    id: '4',
    title: 'about.cred.etica', 
    institution: 'about.cred.compromiso', 
    category: 'value' 
  }
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
    name: 'Sofía Quintero',
    icon: UserCheck
  },
  {
    id: '3',
    slug: 'patient3',
    name: 'Javier Pérez',
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
