import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Work in progess.../i);
  expect(linkElement).toBeInTheDocument();
});
