import { render, screen } from '@testing-library/react';
import App from './App';

// TODO: Get some more initial barebones tests here! SHould have tests for every component/module!
it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Welcome to the CTA Open Source Project!')).toBeInTheDocument();
});