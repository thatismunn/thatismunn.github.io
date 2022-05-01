import TypingAnimation from '../Function/TypingAnimation'

function Porto() {
  return (
    <div className="porto">
      <TypingAnimation text='Hello world!' speed={100} blinkDuration={100} blinkIdling={2000} />
    </div>
  )
}

export default Porto
