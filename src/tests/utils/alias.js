import { screen } from '@testing-library/react';

function button(options) {
  return screen.getByRole('button', { ...options });
}

export default {
  button,
};
