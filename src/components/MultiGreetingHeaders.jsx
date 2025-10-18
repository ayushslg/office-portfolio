import React, { useEffect, useState, useRef } from 'react';

/*
  Sequential multi-header typer:
  Shows each word fully typed inside its own <span> styled like h1 content, erases it, then moves to next.
  Final word stays visible.
*/
export function MultiGreetingHeaders({ words = ['Namaste!', 'Hello!', 'Ciao!'], typingSpeed = 90, eraseSpeed = 45, pause = 900 }) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState('typing'); // typing | pause | erasing | done
  const timeoutRef = useRef();
  const currentWord = words[index];

  useEffect(() => {
    function schedule(fn, delay) { timeoutRef.current = setTimeout(fn, delay); }
    if (phase === 'done') return;

    if (phase === 'typing') {
      if (display.length < currentWord.length) {
        schedule(() => setDisplay(currentWord.slice(0, display.length + 1)), typingSpeed);
      } else {
        // Word complete
        if (index === words.length - 1) {
          setPhase('done');
        } else {
          setPhase('pause');
          schedule(() => setPhase('erasing'), pause);
        }
      }
    } else if (phase === 'erasing') {
      if (display.length > 0) {
        schedule(() => setDisplay(display.slice(0, -1)), eraseSpeed);
      } else {
        setIndex(i => i + 1);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [display, phase, currentWord, index, words, typingSpeed, eraseSpeed, pause]);

  const caretVisible = phase !== 'pause' && phase !== 'done';

  return (
    <span className="multi-greetings" aria-live="polite">
      <span className="greeting-text">{display}</span>
      {caretVisible && <span className="greeting-caret" />}
    </span>
  );
}

export default MultiGreetingHeaders;
