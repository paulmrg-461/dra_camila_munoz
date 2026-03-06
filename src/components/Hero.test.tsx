import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';
import { LanguageProvider } from '../contexts/LanguageContext';

// Mock Lucide icons to avoid issues during testing if necessary, 
// though usually they render fine as SVGs. 
// If problems arise, we can mock them.

describe('Hero Component', () => {
  it('renders the doctor name and specialization', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    );

    // Expect to find the new title parts
    expect(screen.getByText(/Dra\./i)).toBeInTheDocument();
    expect(screen.getByText(/Camila Muñoz/i)).toBeInTheDocument();
    
    // Expect to find the specialization
    const elements = screen.getAllByText(/Armonización Orofacial/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  it('renders social media links correctly', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    );

    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/dracamilamp/');

    const whatsappLink = screen.getByRole('link', { name: /whatsapp/i });
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/573104466710');
  });
});
