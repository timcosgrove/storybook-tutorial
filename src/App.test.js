import { render, screen } from '@testing-library/react';
import App from './App';

test('Contains inbox', () => {
  const { container } = render(<App />);
  expect(
    container.querySelector('.page.lists-show')
  ).not.toBe(null);
});
