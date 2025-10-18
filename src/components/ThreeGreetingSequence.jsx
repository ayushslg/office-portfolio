import React, { useEffect, useState } from 'react';

// Infinite looping sequence: type Namaste!, erase, type Hello!, erase, type Hola!, erase, repeat
export function ThreeGreetingSequence({ typingSpeed = 150, eraseSpeed = 60, pause = 1200 }) {
  const words = ['Namaste!', 'Hello!', 'Hola!'];
  const [step, setStep] = useState(0); // 0 typing w0, 1 erase w0, 2 typing w1, 3 erase w1, 4 typing w2, 5 erase w2
  const [display, setDisplay] = useState('');

  const currentWord = step === 0 ? words[0] : step === 2 ? words[1] : words[2];

  useEffect(() => {
    let t;
    const typingPhase = [0,2,4].includes(step);
    const erasingPhase = [1,3,5].includes(step);

    if (typingPhase) {
      if (display.length < currentWord.length) {
        t = setTimeout(() => setDisplay(currentWord.slice(0, display.length + 1)), typingSpeed);
      } else {
        // finished typing, pause then erase
        t = setTimeout(() => setStep(step + 1), pause);
      }
    } else if (erasingPhase) {
      if (display.length > 0) {
        t = setTimeout(() => setDisplay(display.slice(0, -1)), eraseSpeed);
      } else {
        // finished erasing
        if (step === 5) {
          setStep(0); // loop back to beginning
        } else {
          setStep(step + 1); // move to next typing phase
        }
      }
    }
    return () => clearTimeout(t);
  }, [step, display, currentWord, typingSpeed, eraseSpeed, pause]);

  const caretVisible = true; // always show caret

  return (
    <span className="multi-greetings" aria-live="polite">
      <span className="greeting-text">{display}</span>
      {caretVisible && <span className="greeting-caret" />}
    </span>
  );
}

export default ThreeGreetingSequence;
