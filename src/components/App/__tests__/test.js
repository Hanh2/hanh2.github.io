import { render, screen } from '@testing-library/react';
import App from '../';

test('renders TopPanel', () => {
  render(<App />);
  const linkElement = screen.getByText(/PokerLessons/i);
  expect(linkElement).toBeInTheDocument();
});
