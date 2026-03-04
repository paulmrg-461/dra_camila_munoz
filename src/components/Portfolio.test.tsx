import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Portfolio from './Portfolio';
import { LanguageProvider } from '../contexts/LanguageContext';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
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
      delete validProps.layout;
      delete validProps.exit;
      delete validProps.layoutId;
      return <div className={className} {...validProps}>{children}</div>;
    },
    h2: ({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: unknown }) => {
      const validProps = { ...props };
      delete validProps.variants;
      return <h2 className={className} {...validProps}>{children}</h2>;
    },
    p: ({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: unknown }) => {
      const validProps = { ...props };
      delete validProps.variants;
      return <p className={className} {...validProps}>{children}</p>;
    },
    a: ({ children, className, href, ...props }: { children: React.ReactNode; className?: string; href: string; [key: string]: unknown }) => {
      const validProps = { ...props };
      delete validProps.whileHover;
      delete validProps.whileTap;
      return <a href={href} className={className} {...validProps}>{children}</a>;
    },
  },
}));

describe('Portfolio Component', () => {
  const renderPortfolio = () => {
    render(
      <LanguageProvider>
        <Portfolio />
      </LanguageProvider>
    );
  };

  it('renders the portfolio title', () => {
    renderPortfolio();
    expect(screen.getByText('Casos de Éxito')).toBeDefined();
    expect(screen.getByText('Resultados reales en pacientes reales. Descubre cómo podemos transformar tu rostro manteniendo tu naturalidad.')).toBeDefined();
  });

  it('renders filters', () => {
    renderPortfolio();
    expect(screen.getByRole('button', { name: 'Todos' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Facial' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Labios' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Rejuvenecimiento' })).toBeDefined();
  });

  it('renders project cards', () => {
    renderPortfolio();
    // Check for some project titles (from translations)
    expect(screen.getByText('Rinomodelación Sin Cirugía')).toBeDefined();
    // Labios Rusos appears in title and tags, so we use getAllByText
    expect(screen.getAllByText('Labios Rusos').length).toBeGreaterThan(0);
  });

  it('filters projects when clicking a filter', async () => {
    renderPortfolio();
    const labiosFilter = screen.getByText('Labios');
    fireEvent.click(labiosFilter);
    
    // Should show Labios Rusos
    expect(screen.getAllByText('Labios Rusos').length).toBeGreaterThan(0);
    
    // Should NOT show Rinomodelación (facial)
    // Use queryByText to check for absence
    expect(screen.queryByText('Rinomodelación Sin Cirugía')).toBeNull();
  });

  it('renders "Ver Caso" button', () => {
    renderPortfolio();
    expect(screen.getAllByText('Ver Caso').length).toBeGreaterThan(0);
  });
});