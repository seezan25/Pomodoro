import React, { useState, useEffect } from "react";
import ComponentShortbreak from "./ComponentShortbreak";

const ComponentPomodoro = () => {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(24);
  const [button, setButton] = useState("25:00");
  const [isRunning, setIsRunning] = useState(true);

  const switchButton = (e) => {
    setButton(e.target.value);
    if (e.target.value === "stop") {
      setIsRunning(false);
    } else if (e.target.value === "start") {
      setIsRunning(true);
    }
  };

  useEffect(() => {
    let interval = null;
    if (isRunning && minutes !== 0 && seconds !== 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
        if (seconds < 0) {
          setSeconds(59);
          setMinutes((minutes) => minutes - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  const showTimer = () => {
    if (button === "start") {
      return (
        <>
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
          <div className="stopAndEndContainer">
          <button onClick={switchButton} className="stopButton" value="stop">
            Stop
          </button>
          <button onClick={switchButton} className="endButton" value="end">
            End
          </button>
          </div>
        </>
      );
    } else if (button === "end") {
      return <ComponentShortbreak />;
    } else if (button === "stop") {
      return (
        <>
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
          <button onClick={switchButton} className="startButton" value="start">
            Start
          </button>
        </>
      );
    } else {
      return (
        <>
          25:00
          <div className="stopAndEndContainer">
          <button onClick={switchButton} className="startButton" value="start">
            Start
          </button>
          </div>
        </>
      );
    }
  };

  return <div className="pomodoroTimer">{showTimer()}</div>;
};

export default ComponentPomodoro;
