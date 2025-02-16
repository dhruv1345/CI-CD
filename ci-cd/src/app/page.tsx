"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = daysOfWeek[dateTime.getDay()];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Current Date and Time</h1>
      <p className="text-lg">
        {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
      </p>
      <p className="text-lg">Today is {day}</p>
    </div>
  );
}