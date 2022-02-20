import { useState } from 'react'

export function useCounter (initialValue) {
  const [counterValue, setCounterValue] = useState(initialValue)

  const increment = (factor) => setCounterValue((e) => e + factor)
  const decrement = (factor) => setCounterValue((e) => e - factor)
  const reset = () => setCounterValue(initialValue)

  return { counterValue, increment, decrement, reset }
}
