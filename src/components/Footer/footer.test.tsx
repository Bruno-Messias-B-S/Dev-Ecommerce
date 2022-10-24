import { render, screen } from '@testing-library/react'
import { Footer } from '.'

test('text is displayed in footer', () => {
    render(<Footer />)

    const text = screen.getByText('MKS sistemas © Todos os direitos reservados')

    expect(text).toBeInTheDocument()
})