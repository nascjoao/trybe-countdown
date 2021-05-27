/* eslint-disable no-undef */
import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouter from './utils/renderWithRouter';
import alias from './utils/alias';
import App from '../App';
import userEvent from '@testing-library/user-event';

const { button } = alias;

describe('Countdown', () => {
  test('countdown is being rendered', () => {
    renderWithRouter(<App />);
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
    renderWithRouter(<App />);
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
    renderWithRouter(<App />);
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

  test('show message when countdown hits zero and user can go back', async () => {
    renderWithRouter(<App />);

    const message = screen.queryByTestId('countdownEndMessage');
    expect(message).not.toBeInTheDocument();

    const inputCustomTimer = screen.getByPlaceholderText('Ex.: 3m 25s');
    userEvent.type(inputCustomTimer, '2s');
    const startButton = button({ name: 'Iniciar countdown' });
    expect(startButton).toBeEnabled();
    userEvent.click(startButton);

    await waitFor(() => expect(
      screen.getByTestId('countdownEndMessage'),
    ).toBeInTheDocument(), { timeout: 2500 });
    
    const goBackButton = button({ name: 'Voltar' });
    expect(goBackButton).toBeInTheDocument();
    userEvent.click(goBackButton);
    const countdown = screen.getByTestId('countdown');
    expect(countdown).toBeInTheDocument();
    expect(screen.queryByTestId('countdownEndMessage')).not.toBeInTheDocument();
  });
});
