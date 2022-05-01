import { useEffect, useState } from 'react'

type ExporterTypingAnimation = {
  text: string,
  speed: number,
  blinkDuration: number,
  blinkIdling: number,
  className?: string
}

export default function ({text, className = "", speed, blinkDuration, blinkIdling}: ExporterTypingAnimation): JSX.Element {
  const [textCompleted, setTextCompleted] = useState(false)
  const [textView, setTextView] = useState("")
  const [cursorModifier, setCursorModifier] = useState(<u>&nbsp;</u>)
  const [cursorToggle, setCursorToggle] = useState(true)
  const [idlingToggle, setIdlingToggle] = useState(true)

  // Lepas idling togglenya
  useEffect(() => {
    setTimeout(() => setIdlingToggle(!idlingToggle), blinkIdling)
  }, [])

  // Loop penulisannya
  useEffect(() => {
    const loop = setTimeout(() => {
      if (idlingToggle) return
      if (textView.length === text.length) setTextCompleted(!textCompleted)
      if (!textCompleted) setTextView(text.slice(0, textView.length + 1))
    }, speed)

    return () => clearTimeout(loop)
  }, [textView, idlingToggle])

  // Apabila textnya selesai, mulai blinking kursornya
  useEffect(() => {
    if (!idlingToggle && !textCompleted) return
    const loop = setTimeout(() => {
      setCursorModifier(cursorToggle ? <u style={{textDecoration: 'none'}}>&nbsp;</u> : <u>&nbsp;</u>)
      setCursorToggle(!cursorToggle)
    }, blinkDuration)

    return () => clearTimeout(loop)
  }, [textCompleted, cursorModifier, idlingToggle])

  return (
    <p className={className}>
      {textView}{cursorModifier}
    </p>
  )
}
