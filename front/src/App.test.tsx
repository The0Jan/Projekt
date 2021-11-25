import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello text', () => {
  render(<App />);
  const helloElement = screen.getByText(/Hello! This is only a basic example./i);
  expect(helloElement).toBeInTheDocument();
});
