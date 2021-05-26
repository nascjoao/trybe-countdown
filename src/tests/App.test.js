/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import alias from './utils/alias';
import App from '../App';
import userEvent from '@testing-library/user-event';

const { button } = alias;

describe('Countdown', () => {
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
    const buttons = countdown.querySelectorAll('.options button');
    
    buttons.forEach((button) => {
      userEvent.click(button);
      const timerSecondValue = timer.textContent;
      expect(timerFirstValue).not.toBe(timerSecondValue);
    });
  });
  
  test('user can type custom time', () => {
    render(<App />);
    const countdown = screen.getByTestId('countdown');
    const firstTimerValue = countdown.querySelector('.timer').textContent;
    const inputCustomTimer = screen.getByPlaceholderText('Ex.: 3m 25s');
    const btnStartCountdown = button({ name: 'Iniciar countdown' });
    
    expect(btnStartCountdown).toBeDisabled();
    userEvent.type(inputCustomTimer, '1m 5s');
    expect(btnStartCountdown).toBeEnabled();
    userEvent.click(btnStartCountdown);
    const secondTimerValue = countdown.querySelector('.timer').textContent;
    expect(secondTimerValue).not.toBe(firstTimerValue);
  });
});
