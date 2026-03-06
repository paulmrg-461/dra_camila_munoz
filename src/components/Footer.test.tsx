import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';
import { LanguageProvider } from '../contexts/LanguageContext';

describe('Footer Component', () => {
  it('renders social media links correctly', () => {
    render(
      <LanguageProvider>
        <Footer />
      </LanguageProvider>
    );

    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/dracamilamp/');

    const whatsappLink = screen.getByRole('link', { name: /whatsapp/i });
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/573104466710');

    const facebookLink = screen.getByRole('link', { name: /facebook/i });
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/mariancamila.munozperez');
  });
});
