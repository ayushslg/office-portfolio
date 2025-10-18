import React, { useEffect, useState, useRef } from 'react';

/* Rotating greeting typing effect */
export function GreetingTyper({ words = ['Namaste!', 'Hello!', 'Ciao!'], typingSpeed = 90, eraseSpeed = 45, pause = 900 }) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pause' | 'erasing'
  const timeoutRef = useRef();
  const currentWord = words[index % words.length];

  useEffect(() => {
    function schedule(fn, delay) { timeoutRef.current = setTimeout(fn, delay); }

    if (phase === 'typing') {
      if (display.length < currentWord.length) {
        schedule(() => setDisplay(currentWord.slice(0, display.length + 1)), typingSpeed);
      } else {
        setPhase('pause');
        schedule(() => setPhase('erasing'), pause);
      }
    } else if (phase === 'erasing') {
      if (display.length > 0) {
        schedule(() => setDisplay(display.slice(0, -1)), eraseSpeed);
      } else {
        setPhase('typing');
        setIndex(i => i + 1);
      }
    }

    return () => clearTimeout(timeoutRef.current);
  }, [display, phase, currentWord, typingSpeed, eraseSpeed, pause]);

  return (
    <span className="greeting-typer" aria-live="polite">
      <span className="greeting-text">{display}</span>
      <span className="greeting-caret" />
    </span>
  );
}

export default GreetingTyper;
