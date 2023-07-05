import Heading from '@/components/Heading'
import { render, screen } from '@testing-library/react'

describe('Heading', () => {
  let i: 1 | 2 | 3 | 4 | 5 | 6

  for (i = 1; i <= 6; i++) {
    it(`renders properly according to the passed size (${i})`, () => {
      render(<Heading size={i}>Heading {i}</Heading>)
    
      const headingElement = screen.getByText(`Heading ${i}`)

      expect(headingElement).toBeInTheDocument()
      expect(headingElement).toHaveClass('heading')
      expect(headingElement.tagName).toBe(`H${i}`)
    });
  }
});
