import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';
import { LanguageProvider } from '../contexts/LanguageContext';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: unknown }) => {
      const validProps = { ...props };
      delete validProps.whileHover;
      delete validProps.whileInView;
      delete validProps.viewport;
      delete validProps.initial;
      delete validProps.animate;
      delete validProps.variants;
      delete validProps.transition;
      return <div className={className} {...validProps}>{children}</div>;
    },
    h2: ({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: unknown }) => {
      const validProps = { ...props };
      delete validProps.variants;
      return <h2 className={className} {...validProps}>{children}</h2>;
    },
    img: ({ src, alt, className, ...props }: { src: string; alt: string; className?: string; [key: string]: unknown }) => {
      const validProps = { ...props };
      delete validProps.whileHover;
      delete validProps.transition;
      delete validProps.variants;
      return <img src={src} alt={alt} className={className} {...validProps} />;
    },
    section: ({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: unknown }) => {
      const validProps = { ...props };
      delete validProps.variants;
      delete validProps.initial;
      delete validProps.whileInView;
      delete validProps.viewport;
      return <section className={className} {...validProps}>{children}</section>;
    },
  },
}));

describe('About Component', () => {
  const renderAbout = () => {
    render(
      <LanguageProvider>
        <About />
      </LanguageProvider>
    );
  };

  it('renders the about section title', () => {
    renderAbout();
    expect(screen.getByText('Sobre la Dra. Camila')).toBeDefined();
    expect(screen.getByText('Pasión por la estética y compromiso con la excelencia médica')).toBeDefined();
  });

  it('renders academic credentials', () => {
    renderAbout();
    expect(screen.getByText('Formación Académica')).toBeDefined();
    // Assuming these credentials are in the data/portfolio.ts
    expect(screen.getByText('Cirujano Dentista')).toBeDefined();
    expect(screen.getByText('Especialista en Armonización Orofacial')).toBeDefined();
  });

  it('renders values', () => {
    renderAbout();
    expect(screen.getByText('Valores y Seguridad')).toBeDefined();
    expect(screen.getByText('Seguridad del Paciente')).toBeDefined();
    expect(screen.getByText('Excelencia Clínica')).toBeDefined();
  });

  it('renders statistics', () => {
    renderAbout();
    expect(screen.getByText('Pacientes Atendidos')).toBeDefined();
    expect(screen.getByText('Satisfacción')).toBeDefined();
  });
});