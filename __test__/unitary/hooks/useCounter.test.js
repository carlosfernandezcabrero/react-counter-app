import { renderHook } from '@testing-library/react-hooks'
import { useCounter } from 'hooks/useCounter'
import { describe, expect, test } from 'vitest'

describe('Pruebas sobre el hook useCounter', () => {
  test('debe poner como valor inicial el que se le pasa al invocar al hook', () => {
    const expected = 10

    const { counterValue } = renderHook(() => useCounter(expected)).result.current

    expect(counterValue).toBe(expected)
  })

  test('debe incrementar en tantas unidades como el factor que se pase por parámetro', () => {
    const { result } = renderHook(() => useCounter(10))
    const { increment } = result.current

    increment(2)

    const { counterValue } = result.current

    expect(counterValue).toBe(12)
  })

  test('debe decrementar en tantas unidades como el factor que se pase por parámetro', () => {
    const { result } = renderHook(() => useCounter(10))
    const { decrement } = result.current

    decrement(2)

    const { counterValue } = result.current

    expect(counterValue).toBe(8)
  })

  test('debe restablecer el valor del contador al pasado inicialmente', () => {
    const expected = 10
    const { result } = renderHook(() => useCounter(expected))
    const { increment, reset } = result.current

    increment(2)
    reset()

    const { counterValue } = result.current

    expect(counterValue).toBe(expected)
  })
})
