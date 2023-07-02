import { fireEvent, render, screen } from '@testing-library/react'
import TextInput from '@/components/TextInput'
 
describe('TextInput', () => {
  it('finds the expected elements', () => {
    const label = 'Some Label'
    const placeholder = 'Some Placeholder'
    const value = 'Some Value'
    const onChangeText = jest.fn()

    render(
      <TextInput
        label={label}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    )

    const labelElement = screen.getByText(label)

    expect(labelElement).toBeInTheDocument()
    expect(labelElement).toHaveTextContent(label)
    expect(labelElement).toHaveAttribute('for', label)

    const inputElement = screen.getByRole('textbox')

    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('value', value)
    expect(inputElement).toHaveAttribute('placeholder', placeholder)
    expect(inputElement).toHaveAttribute('name', label)
    expect(inputElement).toHaveAttribute('id', label)

    inputElement.focus()
    expect(inputElement).toHaveFocus()

    inputElement.blur()
    expect(inputElement).not.toHaveFocus()

    fireEvent.change(inputElement, { target: { value: 'new value' }})

    expect(onChangeText).toHaveBeenCalledTimes(1)
    expect(onChangeText).toHaveBeenCalledWith('new value')
  })

  it('renders the correct type', () => {
    const { rerender } = render(<TextInput label="Some Label" />)
    const inputElement = screen.getByRole('textbox')

    expect(inputElement).toHaveAttribute('type', 'text')

    rerender(<TextInput label="Some Label" type="password" />)
    expect(inputElement).toHaveAttribute('type', 'password')
  })

})