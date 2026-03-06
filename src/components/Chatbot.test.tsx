import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Chatbot from './Chatbot';
import { LanguageProvider } from '../contexts/LanguageContext';

// Mock Lucide icons
vi.mock('lucide-react', () => ({
  MessageCircle: () => <div data-testid="message-circle-icon" />,
  Send: () => <div data-testid="send-icon" />,
}));

describe('Chatbot Component', () => {
  it('renders the floating action button initially', () => {
    render(
      <LanguageProvider>
        <Chatbot />
      </LanguageProvider>
    );
    
    expect(screen.getByLabelText(/Abrir chatbot/i)).toBeInTheDocument();
  });

  it('opens the chat window when clicked', () => {
    render(
      <LanguageProvider>
        <Chatbot />
      </LanguageProvider>
    );

    const fab = screen.getByLabelText(/Abrir chatbot/i);
    fireEvent.click(fab);

    expect(screen.getByText(/Asistente Virtual/i)).toBeInTheDocument();
    expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
  });

  it('renders the send button', () => {
    render(
      <LanguageProvider>
        <Chatbot />
      </LanguageProvider>
    );

    const fab = screen.getByLabelText(/Abrir chatbot/i);
    fireEvent.click(fab);

    const sendButton = screen.getByText(/Enviar/i);
    expect(sendButton).toBeInTheDocument();
    // Check if it's a button
    expect(sendButton.closest('button')).toBeInTheDocument();
  });
});
