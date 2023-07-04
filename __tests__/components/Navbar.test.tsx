import Navbar from "@/components/Navbar";
import { AuthorizationTokenContext } from "@/contexts";
import { render, screen } from "@testing-library/react";

describe('Navbar', () => {
  it('finds the expected elements', () => {
    render(<Navbar />);
    
    const creaturesLinkElement = screen.getByText('Creatures');
    expect(creaturesLinkElement).toBeInTheDocument();

    const itemsLinkElement = screen.getByText('Items');
    expect(itemsLinkElement).toBeInTheDocument();

    const registerLinkElement = screen.getByText('Register');
    expect(registerLinkElement).toBeInTheDocument();

    const loginLinkElement = screen.getByText('Login');
    expect(loginLinkElement).toBeInTheDocument();
  });
  
  it('renders the logout button when there is an authorization token', () => {
    const authorizationToken = 'some-token'
    
    render(
      <AuthorizationTokenContext.Provider
        value={{
          authorizationToken,
          setAuthorizationToken: jest.fn()
        }}
      >
        <Navbar />
      </AuthorizationTokenContext.Provider>
    );

    const logoutButtonElement = screen.getByText('Logout');
    expect(logoutButtonElement).toBeInTheDocument();

    const accountButtonElement = screen.getByText('Account');
    expect(accountButtonElement).toBeInTheDocument();
  });
});