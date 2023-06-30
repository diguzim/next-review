import { fireEvent, render, screen } from '@testing-library/react'
import Button from '@/components/Button'
import '@testing-library/jest-dom'

describe('Button', () => {
  it('finds the expected elements', () => {
    const label = 'Some Label'
    const backgroundColor = 'red'
    const className = 'Some ClassName' // Yes, plural here is also nice for testing purposes
    const onClick = jest.fn()

    render(
      <Button
        label={label}
        backgroundColor={backgroundColor}
        onClick={onClick}
        className={className}
      />
    )

    const labelElement = screen.getByText(label)

    expect(labelElement).toBeInTheDocument()
    expect(labelElement).toHaveTextContent(label)

    const buttonElement = screen.getByRole('button')

    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveAttribute('type', 'button')

    buttonElement.focus()
    expect(buttonElement).toHaveFocus()

    buttonElement.blur()
    expect(buttonElement).not.toHaveFocus()

    fireEvent.click(buttonElement)

    expect(onClick).toHaveBeenCalledTimes(1)

    expect(buttonElement).toHaveStyle({ backgroundColor })
  })

  it('renders properly according to size property', () => {
    const { rerender } = render(<Button size='small' />)

    const buttonElement = screen.getByRole('button')

    expect(buttonElement).toHaveClass('buttonSmall')

    rerender(<Button size="medium" />)
    expect(buttonElement).toHaveClass('buttonMedium')

    rerender(<Button size="large" />)
    expect(buttonElement).toHaveClass('buttonLarge')
  })

  it('renders properly according to primary property', () => {
    const label = 'Some Label'
    const primary = true

    const { rerender } = render(<Button label={label} primary={primary} />)

    const buttonElement = screen.getByRole('button')

    expect(buttonElement).toHaveClass('buttonPrimary')

    rerender(<Button label={label} primary={false} />)
    expect(buttonElement).toHaveClass('buttonSecondary')
  })
})