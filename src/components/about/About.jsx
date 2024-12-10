import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div id="About ">
        <div className="pb-12 min-h-screen bg-fixed bg-cover bg-center bgImage">
          <div className="aboutCard ">
            <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8">
              About
            </h1>

            <div className=" flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 lg:w-1/2 lg:ml-32 w-1/6">
                <iframe
                  width="530"
                  height="300"
                  src="https://www.youtube.com/embed/ZBqbC8Kdg60?si=3xAuLcNd8Z_obVoJ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="border border-1 rounded-lg -ml-28 w-[18rem] h-[15rem] mb-12 md:h-[16rem] md:w-[25rem] md:ml-12 lg:h-[16rem] lg:w-[30rem]"
                ></iframe>
              </div>

              <div className=" lg:py-10 text-center">
                <p className="text-gray-300 mx-6 text-lg lg:text-xl lg:mx-16 lg:pl-10">
                  Vishwapreneur is a National Level Entrepreneurial Summit
                  showcasing entrepreneurs, creators, and innovative minds of
                  our century who had the courage to think out of the box.
                  Vishwapreneur is a platform for budding entrepreneurs to seek
                  motivation & guidance through the experiences of successful
                  business tycoons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
