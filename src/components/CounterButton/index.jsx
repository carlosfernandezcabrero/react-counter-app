import { func, string } from 'prop-types'

const CounterButton = ({ text, action }) => {
  return (
    <button
      data-test-id={`btn-${text.toLowerCase()}`}
      className="bg-purple-600 px-4 py-2 text-xl rounded-3xl"
      role="button"
      type="button"
      onClick={() => action()}
    >
      {text}
    </button>
  )
}

CounterButton.propTypes = {
  text: string.isRequired,
  action: func.isRequired
}

export default CounterButton
