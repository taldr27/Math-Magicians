import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('full app rendering/navigating', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();
  // verify page content for default route
  expect(screen.getByText(/calculator/i)).toBeInTheDocument();

  await user.click(screen.getByText(/quote/i));
  expect(screen.getByText(/- William Paul Thurston/i)).toBeInTheDocument();
});
