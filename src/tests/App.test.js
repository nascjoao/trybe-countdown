/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('countdown is being rendered', () => {
  render(<App />);
  const countdown = screen.getByTestId('countdown');
  
  expect(countdown).toBeInTheDocument();
});
