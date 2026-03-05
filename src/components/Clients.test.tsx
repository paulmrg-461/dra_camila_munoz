import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Clients from './Clients';
import { LanguageProvider } from '../contexts/LanguageContext';

describe('Clients Component', () => {
  it('renders the clients section title', () => {
    render(
      <LanguageProvider>
        <Clients />
      </LanguageProvider>
    );

    expect(screen.getByText(/Lo que dicen mis pacientes/i)).toBeInTheDocument();
  });

  it('renders testimonials', () => {
    render(
      <LanguageProvider>
        <Clients />
      </LanguageProvider>
    );

    expect(screen.getByText(/Ana María/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Toxina Botulínica/i)[0]).toBeInTheDocument();
  });
});
