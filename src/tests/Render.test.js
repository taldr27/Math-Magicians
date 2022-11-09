import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Navbar from '../components/NavBar';

test('Render Home and check quote text', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  expect(screen.getByText(/calculator/i)).toBeInTheDocument();

  await user.click(screen.getByText(/quote/i));
  expect(screen.getByText(/- William Paul Thurston/i)).toBeInTheDocument();
});

test('Render NavBar', () => {
  const renderNavBar = renderer.create(<BrowserRouter><Navbar /></BrowserRouter>).toJSON();
  expect(renderNavBar).toMatchSnapshot();
});
