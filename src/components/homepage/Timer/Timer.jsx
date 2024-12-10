import React, { useState, useEffect } from 'react';
import './timer.css';

function Timer() {
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMode, setCurrentMode] = useState("VISHWAPRENEUR'24");

  const beepSound = new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav");
  beepSound.volume = 0.3;

  useEffect(() => {
    let timerInterval;

    if (isPlaying) {
      timerInterval = setInterval(updateTimer, 1000);
    }

    return () => clearInterval(timerInterval); // Clear the interval properly
  }, [isPlaying, days, hours, minutes, seconds]);

  const updateTimer = () => {
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      beepSound.play();
      setIsPlaying(false);
      setCurrentMode("Session");
      return;
    }

    setSeconds(prevSeconds => {
      if (prevSeconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            setDays(prevDays => prevDays - 1);
            setHours(23);
          } else {
            setHours(prevHours => prevHours - 1);
          }
          setMinutes(59);
        } else {
          setMinutes(prevMinutes => prevMinutes - 1);
        }
        return 59;
      } else {
        return prevSeconds - 1;
      }
    });
  };

  const startStopTimer = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  const resetTimer = () => {
    clearInterval(timerInterval); // Clear the interval properly
    setIsPlaying(false);
    setDays(1);
    setHours(2);
    setMinutes(30);
    setSeconds(0);
    setCurrentMode("VISHWAPRENEUR'24");
    beepSound.pause();
    beepSound.currentTime = 0;
  };

  return (
    <div className="my_timer">
      <div className="container6">
        <div className="main-time-container">
          <div className="t-container">
            <div className="img-time-container"></div>
            <div className="t-label" id="timer-label">{currentMode}</div>
            <div className="t-left" id="time-left">{`${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</div>
            <div className="text" id="timer-txt">Day Hour Min Sec</div>
          </div>
        </div>
        <div className="time-ctrl-container">
          <div className="time-ctrl">
            {/* <button onClick={startStopTimer}>Start/Stop</button>
            <button onClick={resetTimer}>Reset</button> */}
            <div className="holo"></div>
            <div className="holo-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
