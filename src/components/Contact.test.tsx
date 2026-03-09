import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from './Contact';
import { LanguageProvider } from '../contexts/LanguageContext';

describe('Contact Component', () => {
  it('renders the contact section title', () => {
    render(
      <LanguageProvider>
        <Contact />
      </LanguageProvider>
    );

    expect(screen.getByText(/Agenda tu Cita/i)).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(
      <LanguageProvider>
        <Contact />
      </LanguageProvider>
    );

    expect(screen.getByText(/munozdracamila@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByText(/WhatsApp/i)).toBeInTheDocument();
  });

  it('renders the contact form', () => {
    render(
      <LanguageProvider>
        <Contact />
      </LanguageProvider>
    );

    expect(screen.getByLabelText(/Nombre Completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Teléfono/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tratamiento de Interés/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Cuéntame tus dudas.../i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar Consulta/i })).toBeInTheDocument();
  });
});
