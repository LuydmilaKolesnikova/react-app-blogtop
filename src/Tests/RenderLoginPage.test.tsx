import { render, screen } from '@testing-library/react';
import LoginPage from '../components/LoginPage/LoginPage';
import { login } from '../redux/auth-reducer';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

describe("renders LoginPage", () => {
  it("renders text 'Need'", () => {
    render(
      <BrowserRouter>
        <LoginPage isAuth={false} login={login}/>
      </BrowserRouter>
    );
    expect(screen.getByText(/Email/i)).toBeInTheDocument();
  });

  it("renders button 'Login'", () => {
    render(
      <BrowserRouter>
        <LoginPage isAuth={false} login={login}/>
      </BrowserRouter>
    );
    expect(screen.getByText('Login', { selector: 'button' })).toBeInTheDocument();
  });

  it("renders password error 'Max length is 10'", async () => {
    const user = userEvent.setup()
    render(
      <BrowserRouter>
        <LoginPage isAuth={false} login={login}/>
      </BrowserRouter>
    );
    const input = screen.getByPlaceholderText(/input password/i);
    await user.type(input, "12345abcdef");
    screen.debug();
    expect(screen.getByText(/Max length is 10/i));
  });
});


