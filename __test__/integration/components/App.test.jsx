import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from 'components/App'
import { beforeEach, describe, expect, test, vi } from 'vitest'

const mockIncrement = vi.fn()
const mockDecrement = vi.fn()
const mockReset = vi.fn()

vi.mock('hooks/useCounter', () => ({
  useCounter: () => ({
    counterValue: 0,
    increment: mockIncrement,
    decrement: mockDecrement,
    reset: mockReset
  })
}))

describe('Pruebas sobre el componente <App/>', () => {
  beforeEach(() => {
    cleanup()
  })

  test('debe incrementar el valor del contador en 1 cuando se pulsa el botón de Incrementar', () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /increment/i })

    userEvent.click(button)

    expect(mockIncrement).toBeCalledTimes(1)
    expect(mockIncrement).toBeCalledWith(1)
  })

  test('debe decrementar el valor del contador en 1 cuando se pulsa el botón de Decrement', () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /decrement/i })

    userEvent.click(button)

    expect(mockDecrement).toBeCalledTimes(1)
    expect(mockDecrement).toBeCalledWith(1)
  })

  test('debe resetear el valor del contador a 0 cuando se pulsa el botón de Reset', () => {
    render(<App />)

    const resetButton = screen.getByRole('button', { name: /reset/i })

    userEvent.click(resetButton)

    expect(mockReset).toBeCalledTimes(1)
  })
})
