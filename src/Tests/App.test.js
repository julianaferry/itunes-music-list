import { getAllByAltText, getByTestId, render, screen } from '@testing-library/react';
import App from './App';
import Music from '../Components/Music';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('get music json list', () => {
  render(<App />);
  expect(getByTestId('card-music')).toBeTruthy();
});