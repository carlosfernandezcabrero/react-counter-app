import CounterButton from 'components/CounterButton'
import { useCounter } from 'hooks/useCounter'

const App = () => {
  const { counterValue, increment, decrement, reset } = useCounter(0)

  function handleIncrement () {
    increment(1)
  }

  function handleDecrement () {
    decrement(1)
  }

  function handleReset () {
    reset()
  }

  return (
    <div className="bg-gray-800 text-white h-screen px-6 pb-6 pt-40 text-center">
      <p className="text-4xl mb-12">Counter App</p>
      <p data-test-id="counter-value" className="text-8xl mb-8">
        {counterValue}
      </p>

      <div className="flex items-center gap-6 justify-center">
        <CounterButton text="Increment" action={handleIncrement} />
        <CounterButton text="Reset" action={handleReset} />
        <CounterButton text="Decrement" action={handleDecrement} />
      </div>
    </div>
  )
}

export default App
