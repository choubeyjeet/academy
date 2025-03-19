import { useState, useEffect } from "react";

const App = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-06-01") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="mb-6 text-gray-400">
        We're launching something amazing. Stay tuned!
      </p>
      <div className="flex justify-center gap-4 text-lg mb-6">
        {Object.keys(timeLeft).map((unit) => (
          <div key={unit} className="text-center">
            <div className="text-2xl font-semibold">{timeLeft[unit]}</div>
            <div className="text-gray-400">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
