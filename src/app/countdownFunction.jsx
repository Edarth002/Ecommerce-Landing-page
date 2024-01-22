"use client";
import { useState } from "react";
import { useEffect } from "react";
import Hero from "./hero";
const CountDownFunction = () => {
  const targetDate = new Date("12 February 2024, 00:00:00");
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      timeLeft = {
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center space-x-10 justify-center">
      <div>
        <div className="bg-darkblue rounded-md p-5">
          <p className="text-Softred md:text-7xl text-3xl font-bold">
            {timeLeft.days}
          </p>
        </div>
        <p className="text-Grayishblue text-center my-3">Days</p>
      </div>
      <div>
        <div className="bg-darkblue rounded-md p-5">
          <p className="text-Softred md:text-7xl text-3xl font-bold">
            {timeLeft.hours}
          </p>
        </div>
        <p className="text-Grayishblue text-center my-3"> Hours</p>
      </div>
      <div>
        <div className="bg-darkblue rounded-md p-5">
          <p className="text-Softred md:text-7xl text-3xl font-bold">
            {timeLeft.minutes}
          </p>
        </div>
        <p className="text-Grayishblue text-center my-3">Minutes</p>
      </div>
      <div>
        <div className="bg-darkblue rounded-md p-5">
          <p className="text-Softred md:text-7xl text-3xl font-bold">
            {timeLeft.seconds}
          </p>
        </div>
        <p className="text-Grayishblue text-center my-3">Seconds</p>
      </div>
    </div>
  );
};
export default CountDownFunction;
