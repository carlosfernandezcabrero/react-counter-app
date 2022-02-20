import { render, screen } from '@testing-library/react'
import App from 'components/App'
import { describe, test, vi } from 'vitest'

vi.mock('components/CounterButton', () => ({
  __esModule: true,
  default: () => <></>
}))

vi.mock('hooks/useCounter', () => ({
  useCounter: () => ({ counterValue: 0 })
}))

describe('Pruebas sobre el componente <App/>', () => {
  test('debe mostrar por defecto el valor inicial pasado al hook useCounter', () => {
    render(<App/>)

    screen.getByText(0)
  })
})
