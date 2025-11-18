import { useState, useEffect } from "react";

const Timer = () => {
  const fifteenMinutes = 15 * 60;

  const [timeLeft, setTimeLeft] = useState(fifteenMinutes);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return fifteenMinutes;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <span>
      {minutes}:{seconds.toString().padStart(2, "0")}
    </span>
  );
}

export default Timer;
