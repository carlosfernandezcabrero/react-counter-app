import { act, renderHook } from '@testing-library/react-hooks'
import { useCounter } from 'hooks/useCounter'
import { describe, expect, test } from 'vitest'

const setup = (initialValue) => renderHook(() => useCounter(initialValue))

describe('Pruebas sobre el hook useCounter', () => {
  test('debe poner como valor inicial el que se le pasa al invocar al hook', () => {
    const expected = 10

    const { result } = setup(expected)

    expect(result.current.counterValue).toBe(expected)
  })

  test('debe incrementar en tantas unidades como el factor que se pase por parámetro', () => {
    const { result } = setup(10)

    act(() => {
      result.current.increment(2)
    })

    expect(result.current.counterValue).toBe(12)
  })

  test('debe decrementar en tantas unidades como el factor que se pase por parámetro', () => {
    const { result } = setup(10)

    act(() => {
      result.current.decrement(2)
    })

    expect(result.current.counterValue).toBe(8)
  })

  test('debe restablecer el valor del contador al pasado inicialmente', () => {
    const expected = 10
    const { result } = setup(expected)

    act(() => {
      result.current.increment(2)
      result.current.reset()
    })

    expect(result.current.counterValue).toBe(expected)
  })
})
