import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders 3 list items', () => {
  render(<App />);
  const listItems = screen.getAllByRole('listitem');
  console.log(listItems.toString());
  expect(listItems).toHaveLength(3);
});

test('renders title', () => {
  render(<App />);
  const myTestId = screen.getByTestId('mytestid');
  expect(myTestId).toBeInTheDocument;
});

test('sum should be 6', () => {
  render(<App />);
  const sum = screen.getByTitle('sum');
  expect(sum.textContent).toBe('6');
});
