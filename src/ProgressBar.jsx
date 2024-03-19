import { useState, useEffect } from "react";
export default function ProgressBar({ TIMER }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      setRemainingTime(TIMER);
    }
  }, [remainingTime, TIMER]);
  return <progress value={remainingTime} max={TIMER} />;
}
