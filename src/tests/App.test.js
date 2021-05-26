/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('countdown is being rendered', () => {
  render(<App />);
  const countdown = screen.getByTestId('countdown');

  const timerElements = [
    countdown.querySelector('.minuteLeft'),
    countdown.querySelector('.minuteRight'),
    countdown.querySelector('.secondLeft'),
    countdown.querySelector('.secondRight'),
  ];

  expect(countdown).toBeInTheDocument();
  timerElements.forEach((element) => {
    expect(element).toBeInTheDocument();
  });
});
