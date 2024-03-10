import React from 'react';
import { render, screen } from '@testing-library/react';
import AppWithApollo from './AppWithApollo';

test('renders learn react link', () => {
  render(<AppWithApollo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
