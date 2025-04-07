// components/TimeDisplay.tsx
"use client";

import React, { useState, useEffect } from "react";

const TimeDisplay: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // This runs only on the client after hydration.
    const updateTime = () => setTime(new Date().toLocaleTimeString());
    updateTime();
    const intervalId = setInterval(updateTime, 1000); // update every second if desired
    return () => clearInterval(intervalId);
  }, []);

  return <span>{time || "Loading time..."}</span>;
};

export default TimeDisplay;
