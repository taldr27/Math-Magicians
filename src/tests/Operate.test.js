import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import operate from '../logic/operate';
import Operate from '../logic/operate';

test('Render Home and check quote text', async () => {
  render(<App />, { wrapper: BrowserRouter });
  const user = userEvent.setup();

  expect(screen.getByText(/calculator/i)).toBeInTheDocument();

  await user.click(screen.getByText(/quote/i));
  expect(screen.getByText(/- William Paul Thurston/i)).toBeInTheDocument();
});

/* test('Render when there are no items', () => {
  
  const tree = renderer.create(<operate { operate()} />).toJSON();
  expect(tree).toMatchSnapshot();
}); */

test('Sum 1, 3 result will be 4', () => {
  const result = Operate(1, 3, '+');
  expect(result).toBe('4');
});


