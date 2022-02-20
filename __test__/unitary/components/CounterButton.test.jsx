import { randText } from '@ngneat/falso'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CounterButton from 'components/CounterButton'
import { describe, expect, test, vi } from 'vitest'

describe('Pruebas sobre el componente <CounterButton/>', () => {
  test('debe llamar a la función que se le pasa en la props cuando se hace click', () => {
    const mockAction = vi.fn()
    const text = randText()

    render(<CounterButton text={text} action={mockAction} />)

    const button = screen.getByRole('button', { name: text })

    userEvent.click(button)

    expect(mockAction).toBeCalledTimes(1)
  })

  test('debe mostrar el texto que recibe en las props', () => {
    const text = randText()

    render(<CounterButton text={text} action={vi.fn()} />)

    screen.getByText(text)
  })
})
