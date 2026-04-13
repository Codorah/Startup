"use client";
import { useEffect, useState } from "react";

const CHARS = "!@#$%^&*()_+<>?|{}[]0123ABCDFGHXYZ";

export default function ScrambleText({ text, duration = 1500, delay = 0, className }) {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let timeout;
    let interval;
    const startScramble = () => {
      let currentIteration = 0;
      const totalIterations = Math.floor(duration / 30); // 30ms per frame
      const textLength = text.length;

      interval = setInterval(() => {
        setDisplayText((prev) => {
          return text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < (currentIteration / totalIterations) * textLength) {
                return char;
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("");
        });

        currentIteration++;
        if (currentIteration > totalIterations) {
          clearInterval(interval);
          setDisplayText(text);
        }
      }, 30);
    };

    if (delay > 0) {
      timeout = setTimeout(startScramble, delay);
    } else {
      startScramble();
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, duration, delay]);

  return <span className={className}>{displayText || "\u00A0"}</span>;
}
