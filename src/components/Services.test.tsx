import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Services from './Services';
import { LanguageProvider } from '../contexts/LanguageContext';

// Mock framer-motion to avoid animation issues in tests
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
    section: ({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: unknown }) => {
      const validProps = { ...props };
      delete validProps.whileHover;
      delete validProps.whileInView;
      delete validProps.viewport;
      delete validProps.initial;
      delete validProps.animate;
      delete validProps.variants;
      delete validProps.transition;
      return <section className={className} {...validProps}>{children}</section>;
    },
  },
}));

describe('Services Component', () => {
  const renderServices = () => {
    render(
      <LanguageProvider>
        <Services />
      </LanguageProvider>
    );
  };

  it('renders the services section title', () => {
    renderServices();
    // Default language is Spanish
    expect(screen.getByText('Mis Tratamientos')).toBeDefined();
  });

  it('renders service cards', () => {
    renderServices();
    // Check for some service titles
    expect(screen.getByText('Perfilado y Aumento de Labios')).toBeDefined();
    expect(screen.getByText('Toxina Botulínica')).toBeDefined();
    expect(screen.getByText('Bioestimuladores de Colágeno')).toBeDefined();
  });
});
