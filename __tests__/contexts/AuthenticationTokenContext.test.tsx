import { AuthenticationTokenContext, AuthenticationTokenProvider } from "@/contexts"
import { fireEvent } from "@storybook/testing-library"
import { render, screen } from "@testing-library/react"

describe('AuthenticationTokenContext', () => {
  it('sets the authenticationToken to the localStorage when the authenticationToken is set', () => {
    const { rerender } = render(
      <AuthenticationTokenProvider>
        <AuthenticationTokenContext.Consumer>
          {({ setAuthenticationToken }) => (
            <button onClick={() => setAuthenticationToken('Some authentication token')}>Set authentication token</button>
          )}
        </AuthenticationTokenContext.Consumer>
      </AuthenticationTokenProvider>
    )

    expect(localStorage.getItem('authenticationToken')).toBeNull()

    fireEvent.click(screen.getByText('Set authentication token'))

    expect(localStorage.getItem('authenticationToken')).toEqual('Some authentication token')

    rerender(
      <AuthenticationTokenProvider>
        <AuthenticationTokenContext.Consumer>
          {({ setAuthenticationToken }) => (
            <button onClick={() => setAuthenticationToken(null)}>Set authentication token</button>
          )}
        </AuthenticationTokenContext.Consumer>
      </AuthenticationTokenProvider>
    )

    fireEvent.click(screen.getByText('Set authentication token'))

    expect(localStorage.getItem('authenticationToken')).toBeNull()
  })
});
