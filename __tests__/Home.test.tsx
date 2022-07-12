import { expect, test } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Home from '../pages';

test('home', () => {
  render(<Home />);
  const main = within(screen.getByRole('main'));
  expect(main.getByRole('heading', { level: 1, name: /welcome to next\.js!/i })).toBeDefined();

  const footer = within(screen.getByRole('contentinfo'));
  const author = within(footer.getByRole('author'));
  expect(author.findByText('Saif Bechan')).toBeDefined();
});
