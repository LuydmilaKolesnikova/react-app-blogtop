import { render, screen } from '@testing-library/react';
import LoginPage from '../components/LoginPage/LoginPage';
import { login } from '../redux/auth-reducer';

test('renders LoginPage', async () => {
  render(<LoginPage isAuth={false} login={login}/>);
  expect(screen.getByText(/Log/i)).toBeInTheDocument();
});