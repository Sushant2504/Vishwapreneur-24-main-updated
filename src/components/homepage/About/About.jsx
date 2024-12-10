// import React from 'react'
// import './About.css';

// const About = () => {
//   return (
//     <>
//       <div id="About mt-6 ">
//         <div className="pb-12 min-h-fit bg-fixed bg-cover bg-center bgImage">
//           <div className="aboutCard ">
//             <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8">
//               About
//             </h1>

//             <div className=" flex flex-col md:flex-row items-center justify-center">
//               <div className="md:w-1/2 lg:w-1/2 lg:ml-32 w-1/6">
//                 <iframe
//                   width="530"
//                   height="300"
//                   src="https://www.youtube.com/embed/ZBqbC8Kdg60?si=3xAuLcNd8Z_obVoJ"
//                   title="YouTube video player"
//                   // frameborder="0"
//                   allowFullScreen={true}
//                   allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   className="border border-1 rounded-lg -ml-28 w-[18rem] h-[15rem] mb-12 md:h-[16rem] md:w-[25rem] md:ml-12 lg:h-[16rem] lg:w-[30rem]"
//                 ></iframe>
//               </div>

//               <div className=" lg:py-10">
//                 <p className="text-gray-300 mx-6 text-lg lg:text-xl lg:mx-16 lg:pl-10">
//                   Vishwapreneur is a National Level Entrepreneurial Summit
//                   showcasing entrepreneurs, creators, and innovative minds of
//                   our century who had the courage to think out of the box.
//                   Vishwapreneur is a platform for budding entrepreneurs to seek
//                   motivation & guidance through the experiences of successful
//                   business tycoons.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default About

import React from "react";
import "./About.css";
import "./timer.css";
import { motion, useAnimation } from "framer-motion";
import ScrollAnimation1 from "../../Animations/ScrollAnimation1";
import { useState, useEffect } from "react";

// import { about } from '../Navbar/Navbar';

const About = () => {
  const [days, setDays] = useState(1);
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMode, setCurrentMode] = useState("VISHWAPRENEUR'24");

  const beepSound = new Audio(
    "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
  );
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

    setSeconds((prevSeconds) => {
      if (prevSeconds === 0) {
        if (minutes === 0) {
          if (hours === 0) {
            setDays((prevDays) => prevDays - 1);
            setHours(23);
          } else {
            setHours((prevHours) => prevHours - 1);
          }
          setMinutes(59);
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1);
        }
        return 59;
      } else {
        return prevSeconds - 1;
      }
    });
  };

  const startStopTimer = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
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
    <div name="about" className="pt-16">
      <div id="about">
        <div className="pb-12 min-h-fit bg-fixed bg-cover bg-center bgImage">
          <ScrollAnimation1>
            <motion.div className="aboutCard ">
              <div class="nine">
                <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-[#ffb3eb] text-transparent bg-clip-text text-3xl font-bold text-center py-16">
                  About
                </h1>
              </div>

              <div className=" flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2 lg:w-1/2 lg:ml-32 w-1/6">
                  <iframe
                    width="530"
                    height="300"
                    src="https://www.youtube.com/embed/ZBqbC8Kdg60?si=3xAuLcNd8Z_obVoJ"
                    title="YouTube video player"
                    // frameborder="0"
                    allowFullScreen={true}
                    allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="border border-1 rounded-lg -ml-28 w-[18rem] h-[15rem] mb-12 md:h-[16rem] md:w-[25rem] md:ml-12 lg:h-[16rem] lg:w-[30rem]"
                  ></iframe>
                </div>

                <div className=" lg:py-10">
                  <p className="text-gray-300 mx-6 text-lg lg:text-xl lg:mx-16 lg:pl-10">
                    Vishwapreneur is a National Level Entrepreneurial Summit
                    showcasing entrepreneurs, creators, and innovative minds of
                    our century who had the courage to think out of the box.
                    Vishwapreneur is a platform for budding entrepreneurs to
                    seek motivation & guidance through the experiences of
                    successful business tycoons.
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollAnimation1>
        </div>
      </div>
      {/* <div className="My_new_timer">
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
            
            <div className="holo"></div>
            <div className="holo-border"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
