import { AuthorizationTokenContext, AuthorizationTokenProvider } from "@/contexts"
import { fireEvent } from "@storybook/testing-library"
import { render, screen } from "@testing-library/react"

describe('AuthorizationTokenContext', () => {
  it('sets the authorizationToken to the localStorage when the authorizationToken is set', () => {
    const { rerender } = render(
      <AuthorizationTokenProvider>
        <AuthorizationTokenContext.Consumer>
          {({ setAuthorizationToken }) => (
            <button onClick={() => setAuthorizationToken('Some authorization token')}>Set authorization token</button>
          )}
        </AuthorizationTokenContext.Consumer>
      </AuthorizationTokenProvider>
    )

    expect(localStorage.getItem('authorization')).toBeNull()

    fireEvent.click(screen.getByText('Set authorization token'))

    expect(localStorage.getItem('authorizationToken')).toEqual('Some authorization token')

    rerender(
      <AuthorizationTokenProvider>
        <AuthorizationTokenContext.Consumer>
          {({ setAuthorizationToken }) => (
            <button onClick={() => setAuthorizationToken(null)}>Set authorization token</button>
          )}
        </AuthorizationTokenContext.Consumer>
      </AuthorizationTokenProvider>
    )

    fireEvent.click(screen.getByText('Set authorization token'))

    expect(localStorage.getItem('authorizationToken')).toBeNull()
  })
});
