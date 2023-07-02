import { render, screen } from '@testing-library/react'
import Form from '@/components/Form'
import '@testing-library/jest-dom'

describe('Form', () => {
  it('renders the correct title', () => {
    const title = 'Some Title'
    render(<Form title={title} onSubmit={() => {}} />)
    const titleElement = screen.getByRole('heading', { name: title })
    expect(titleElement).toBeInTheDocument()
  })

  it('renders the correct submit text', () => {
    const submitText = 'Some Submit Text'
    render(<Form title="Some Title" onSubmit={() => {}} submitText={submitText} />)
    const submitButtonElement = screen.getByRole('button', { name: submitText })
    expect(submitButtonElement).toBeInTheDocument()
  })

  it('renders the children', () => {
    const children = <div>Some Children</div>
    render(<Form title="Some Title" onSubmit={() => {}}>{children}</Form>)
    const childrenElement = screen.getByText('Some Children')
    expect(childrenElement).toBeInTheDocument()
  })
})
