import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import operate from '../logic/operate';
import Navbar from '../components/NavBar';
import Calculator from '../pages/calculator';

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

test('Render Calculator', () => {
  const renderCalculator = renderer.create(<Calculator />).toJSON();
  expect(renderCalculator).toMatchSnapshot();
});

test('Sum 1, 2 result will be 2', () => {
  const result = operate(1, 2, 'x');
  expect(result).toBe('2');
});


