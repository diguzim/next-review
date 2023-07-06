import React from 'react';
import Layout from "@/components/Layout";
import { render, screen } from "@testing-library/react";
import { AuthorizationTokenContext } from '@/contexts';

describe('Layout', () => {
  it("doesn't render header neither main components when the authorization token is not loaded", () => {
    const children = 'Some children';
    render(<Layout>{children}</Layout>);

    const headerComponents = screen.queryByRole('header');
    expect(headerComponents).not.toBeInTheDocument();

    const mainComponents = screen.queryByRole('main');
    expect(mainComponents).not.toBeInTheDocument();

    const childrenComponent = screen.queryByText(children);
    expect(childrenComponent).not.toBeInTheDocument();
  });

  it('renders header and main components when the authorization token is loaded', () => {
    const children = 'Some children';
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
      <AuthorizationTokenContext.Provider
        value={{
          authorizationToken: 'Yes indeed there is some token',
          setAuthorizationToken: () => { },
          isAuthorizationTokenLoaded: true
        }}
      >
        {children}
      </AuthorizationTokenContext.Provider>
    );
    render(<Layout>{children}</Layout>, { wrapper: Wrapper });

    const navbar = screen.getByRole('navigation');
    expect(navbar).toBeInTheDocument();

    const mainComponents = screen.getByRole('main');
    expect(mainComponents).toBeInTheDocument();

    const childrenComponent = screen.getByText(children);
    expect(childrenComponent).toBeInTheDocument();
  });
});

