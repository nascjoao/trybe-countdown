/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import alias from './utils/alias';
import App from '../App';
import userEvent from '@testing-library/user-event';

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

test('button options change the countdown', () => {
  render(<App />);
  const countdown = screen.getByTestId('countdown');
  const timer = countdown.querySelector('.timer');
  const timerFirstValue = timer.textContent;
  const buttons = countdown.querySelectorAll('button');
  
  buttons.forEach((button) => {
    userEvent.click(button);
    const timerSecondValue = timer.textContent;
    expect(timerFirstValue).not.toBe(timerSecondValue);
  });
});
