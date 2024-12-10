import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Reviews.css"; // Import your CSS file for Reviews

const reviewsData = [
  {
    id: 1,
    name: " Nikhil Sharma",
    opinion:
      "It was nice, it was fun. Lot of questions were asked and I loved to answer those questions.",
    image:
      "https://res.cloudinary.com/da5mmxnn3/image/upload/v1647506687/Speakers/nikhil_qyuop3.jpg",
  },
  {
    id: 2,
    name: "Prajakta Koli",
    opinion:
      "First of all, I love college events, I come for the energy, Ifeel like everyone's so mad. So thank you so much for having me and the team is very hardworking, very sweet.Thanks you for making the last minute arrangements.",
    image:
      "https://res.cloudinary.com/da5mmxnn3/image/upload/v1647510541/Imagescopy/koli_k4yfwv.jpg",
  },
  {
    id: 3,
    name: "Gaurav Chaudhary",
    opinion:
      "Yahan jo charm dikh raha hai jo fire hai matlab iss event ki jo complete concept hai wo unique hai. In TG style : Bahot hi badhiya event tha aur isme jo seati thi vo bhi kaafi achi thi kafi badhiya tha, bole toh full value for time.",
    image:
      "https://res.cloudinary.com/da5mmxnn3/image/upload/v1647510544/Imagescopy/Gaurav_uxkq4d.jpg",
  },
  {
    id: 4,
    name: "Rashmi Bansal",
    opinion:
      "I really congratulate the team for bringing together so many diverse students and so many good speakers I do hope that this goes further and many many students start a small business of their own to really get a taste of entrepreneurship for themselves!",
    image:
      "https://res.cloudinary.com/da5mmxnn3/image/upload/v1647510552/Imagescopy/rashmi2_q0shh6.webp",
  },
  {
    id: 5,
    name: "Zubin Sharma",
    opinion:
      "I think the team has done an amazing job of using the spirit of entrepreneurship which is there in EDC to create a really really wonderful event for everyone involved from students to the panelists.",
    image:
      "https://res.cloudinary.com/da5mmxnn3/image/upload/v1647510587/Imagescopy/zubin1_ydwtyq.webp",
  },

  // Add more review objects similarly
];
const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let timeout;

    if (!isPaused) {
      timeout = setTimeout(() => {
        setOpacity(0); // Fade out
        setTimeout(() => {
          const nextReview = (currentReview + 1) % reviewsData.length;
          setCurrentReview(nextReview);
          setOpacity(1); // Fade in
        }, 500); // Wait for fade-out transition to complete
      }, 4000);
    }

    return () => clearTimeout(timeout);
  }, [currentReview, isPaused, reviewsData]);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleNext = () => {
    setOpacity(0); // Fade out
    setTimeout(() => {
      const nextReview = (currentReview + 1) % reviewsData.length;
      setCurrentReview(nextReview);
      setOpacity(1); // Fade in
    }, 500); // Wait for fade-out transition to complete
  };

  const handlePrevious = () => {
    setOpacity(0); // Fade out
    setTimeout(() => {
      const prevReview =
        (currentReview - 1 + reviewsData.length) % reviewsData.length;
      setCurrentReview(prevReview);
      setOpacity(1); // Fade in
    }, 500); // Wait for fade-out transition to complete
  };

  return (
    <>
      <div class="nine">
        <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-[#ffb3eb] text-transparent bg-clip-text text-3xl font-bold text-center ">
          Reviews
        </h1>
      </div>

      <div className=" md:min-h-[40vh]  min-h-[50vh] max-w-screen-lg mx-auto mt-8 p-4 bg-transparent rounded-md shadow-md  flex flex-col gap-3 md:flex md:flex-row-reverse">
        <div
          className={`basis-1/2 flex justify-center transition-opacity duration-500 ease-in-out ${
            opacity === 1 ? "" : "opacity-0"
          }`}
        >
          <img
            src={reviewsData[currentReview].image}
            alt={reviewsData[currentReview].name}
            className=" h-40 object-cover rounded-md "
          />
        </div>
        <div
          className={`transition-opacity duration-500 ease-in-out flex flex-col flex-start ${
            opacity === 1 ? "" : "opacity-0"
          }`}
        >
          <blockquote>
            <p className="text-2xl italic font-medium text-white ">
              {`"${reviewsData[currentReview].opinion}"`}
            </p>
          </blockquote>

          <h2 className="mt-6 text-lg text-violet-600 font-semibold mb-2 text-start">
            {`~ ${reviewsData[currentReview].name}`}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Reviews;
