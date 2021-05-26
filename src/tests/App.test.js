/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import alias from './utils/alias';
import App from '../App';

const { button } = alias;

test('countdown is being rendered', () => {
  render(<App />);
  const countdown = screen.getByTestId('countdown');

  const countdownElements = [
    countdown.querySelector('.minuteLeft'),
    countdown.querySelector('.minuteRight'),
    countdown.querySelector('.secondLeft'),
    countdown.querySelector('.secondRight'),

    button({ name: 'Vamos rápido, já voltamos' }),
    button({ name: 'Voltamos em breve' }),
    button({ name: 'Só alegria' }),
    button({ name: 'Aleatório' })
  ];

  expect(countdown).toBeInTheDocument();
  countdownElements.forEach((element) => {
    expect(element).toBeInTheDocument();
  });
});
