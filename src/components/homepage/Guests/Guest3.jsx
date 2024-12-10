// import React, { useEffect, useRef } from "react";
// import "./Guest2.css";
// import ScrollAnimation from "../../Animations/ScrollAnimation";
// import { AnimatePresence } from "framer-motion";
// import Navbar from "../Navbar/Navbar";
// // import ''

// const Guest3 = () => {
//   const cardContainerRef = useRef(null);
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const cards = document.querySelectorAll(".card");

//     const observerOptions = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5, // Adjust this threshold based on when you want the animation to start
//     };

//     const cardObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("animate-card");
//           observer.unobserve(entry.target);
//         }
//       });
//     }, observerOptions);

//     cards.forEach((card) => {
//       cardObserver.observe(card);
//     });

//     return () => {
//       cardObserver.disconnect();
//     };
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const card = e.currentTarget;
//       let cardInnerHeight = card.clientHeight;
//       let cardInnerWidth = card.clientWidth;

//       let react = card.getBoundingClientRect();
//       let cardXposition = e.clientX - react.left;
//       let cardYposition = e.clientY - react.top;

//       let x = (cardInnerHeight / 2.5 - cardXposition) / 25;
//       let y = (cardInnerWidth / 1.25 - cardYposition) / 25;

//       card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
//       const cardDescription = card.querySelector(".card-description");

//       cardDescription.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
//     };

//     const handleMouseOver = (card) => {
//       const cardFigure = card.querySelector(".card-figure");
//       const cardName = card.querySelector(".card-name");
//       const cardDescription = card.querySelector(".card-description");
//       const cardMedia = card.querySelector(".card-media");
//       cardFigure.style.transform = "translate3d(0 , 0 , 5px)";
//       cardName.style.transform = "translate3d(0 , 0 , 6px)";
//       cardDescription.style.transform = "translate3d(0 , 0 , 7px)";
//       cardMedia.style.transform = "translate3d(0 , 0 , 4px)";
//       card.style.transition = "none";
//     };

//     const handleMouseLeave = (card) => {
//       const cardFigure = card.querySelector(".card-figure");
//       const cardName = card.querySelector(".card-name");
//       const cardDescription = card.querySelector(".card-description");
//       const cardMedia = card.querySelector(".card-media");
//       cardFigure.style.transform = "translate3d(0 , 0 , 0)";
//       cardName.style.transform = "translate3d(0 , 0 , 0)";
//       cardDescription.style.transform = "translate3d(0 , 0 , 0)";
//       cardMedia.style.transform = "translate3d(0 , 0 , 0)";
//       card.style.transform = "rotateY(0deg) rotateX(0deg)";
//       card.style.transition = "transform .7s ease";
//     };

//     const cards = document.querySelectorAll(".card-body");

//     cards.forEach((card) => {
//       card.addEventListener("mousemove", handleMouseMove);
//       card.addEventListener("mouseover", () => handleMouseOver(card));
//       card.addEventListener("mouseleave", () => handleMouseLeave(card));

//       return () => {
//         card.removeEventListener("mousemove", handleMouseMove);
//         card.removeEventListener("mouseover", () => handleMouseOver(card));
//         card.removeEventListener("mouseleave", () => handleMouseLeave(card));
//       };
//     });
//   }, []);

//   const guests = [
//     {
//       img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677489311/Speakers/tg-02_mfz2d9.png",
//       name: "Mr. Gaurav Chaudhary",
//       whoIsHe: "Founder at Technical Guruji",
//       content:
//         "Indian YouTube personality, he was on the Forbes India 30 under 30 list, and has 22+ million subscribers on YouTube.",
//       // facebookLink:"https://www.facebook.com/TechnicalGuruji/",
//       twitterLink: "https://twitter.com/TechnicalGuruji",
//       instagramLink:
//         "https://www.instagram.com/technicalguruji?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
//     },
//     {
//       img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677489310/Speakers/yash_mor-02_lscxvw.png",
//       name: "Maj. Gen. Yash Mor",
//       whoIsHe: "CEO of Save the Himalayas Foundation",
//       content:
//         "Strong military and protective services professional skilled in Crisis Management, Operations Management, Government, Emergency Management, and Intelligence.",
//       linkedinLink: "https://www.linkedin.com/in/maj-gen-dr-yash-mor-b031b022/",
//       twitterLink: "https://twitter.com/YashMor5",
//       instagramLink:
//         "https://www.instagram.com/gen.yashmor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
//     },
//     {
//       img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677230276/Speakers/JM-VP23_uodx7x.jpg",
//       name: "Mr. Jagdish Mitra",
//       whoIsHe: "Chief Strategy Officer at Tech Mahindra",
//       content:
//         "Previously he served as CEO of CanvasM. In his 25 years of career he has played many roles spanning across sales, business development and large deals.",
//       linkedinLink:
//         "https://www.linkedin.com/in/jagdishmitra?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAABwiL8BRWZN_Q_m3uyXfXuSsDIR691u9VA&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BTSyj2RkzRJWAj3q%2BxkUH5g%3D%3D",
//       twitterLink: "https://twitter.com/jagdishmitra",
//       instagramLink: "aa",
//     },
//     {
//       img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677265053/Speakers/kanika-01_hk1ix4.png",
//       name: "Mrs. Kanika Tekriwal",
//       whoIsHe: "CEO of JetsetGo",
//       content:
//         "She is the youngest richest woman in India. She founded India's first aircraft leasing organization.",
//       linkedinLink:
//         "https://www.linkedin.com/in/kanika-tekriwal-08b57725?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAU-sqsB3xRDOhHll8PAMXQVqhPbnTK_BWo&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B55Lzf6iHTa%2BPDenpcA6IuQ%3D%3D",
//       twitterLink: "https://twitter.com/jetsetgoin",
//       instagramLink:
//         "https://www.instagram.com/jetslacked?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
//     },
//     {
//       img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677264548/Speakers/ishan_sharma-removebg-preview-removebg-preview_pqwv7p.jpg",
//       name: "Mr. Ishan Sharma",
//       whoIsHe: "Founder MarkitUp Media",
//       content:
//         "Author of bestselling book 'Crush It on LinkedIn'. Youtuber and Educator with 90 million+ reach.",
//       linkedinLink:
//         "https://www.linkedin.com/in/ishansharma7390?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACy8b4oBt7H2NvfVuEiLUDFWMIcaO54UeFw&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B%2BPhcoAneSxa974CvJugxEQ%3D%3D",
//       twitterLink: "https://twitter.com/Ishansharma7390",
//       instagramLink:
//         "https://www.instagram.com/ishansharma7390?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
//     },
//     {
//       img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677489806/Speakers/sandeep_jain-02_w6sytm.png",
//       name: "Mr. Sandeep Jain",
//       whoIsHe: "Founder & CEO at GeeksforGeeks",
//       content:
//         "An IIT Roorkee alumnus and founder of GeeksforGeeks. Apart from that, he has worked with DE Shaw and Co. as a software developer and JIIT Noida as an assistant professor.",
//       linkedinLink:
//         "https://www.linkedin.com/in/sandeep-jain-/?originalSubdomain=in",
//       twitterLink: "https://twitter.com/sandeep_jain",
//       instagramLink:
//         "https://www.instagram.com/sandeep_gfg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
//     },
//     {
//       img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677267098/Speakers/nilesh-01_t7krar.png",
//       name: "Mr. Nilesh Vohra",
//       whoIsHe: "Blockchain & Web3 influencer",
//       content:
//         "Senior industry leader & Technologist. AI, Blockchain & Web3 influencer. Corporate span of 20 years includes Vice President & Head of IT (India CTO) - Vodafone Group; Deputy Vice President - Axis Bank, Head of Service Delivery - Wipro Limited.",
//       linkedinLink: "https://www.linkedin.com/in/nilesh-vohra-4665aa218/",
//       twitterLink: "cc",
//       instagramLink: "aa",
//     },
//     {
//       img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677230276/Speakers/ARus-VP23_w9dfgb.jpg",
//       name: "Mr. Anshul Rustaggi",
//       whoIsHe: "Founder Totality Corp",
//       content:
//         "Enthusiast in Virtual Gaming. Developing ZionVerse, a metaverse gaming system. Studying in Blockchain technology since 2011. Investor in NFTs and DeFi's.",
//       linkedinLink:
//         "https://www.linkedin.com/in/anshulrustaggi?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAAWtzkBX6ZB9v9H-npV58cawKaSMErQhWI&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BSUEIkLV3SiOEyFb7b3u4Fw%3D%3D",
//       twitterLink: "https://twitter.com/AnshulRustaggi",
//       instagramLink:
//         "https://www.instagram.com/anshulrustagi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
//     },
//     {
//       img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1677265053/Speakers/vishnukorde-01_pfjft1.png",
//       name: "Mr. Vishnu Korde",
//       whoIsHe: "CEO & Chief Architect at StackOS",
//       content:
//         "Alumni of Harvard University. Skilled in Cryptography, Development operation, Business Planning, Team Management, Product Management, Negotiation, Analytical Skills, and Customer Relationship Management (CRM).",
//       linkedinLink:
//         "https://www.linkedin.com/in/vishnukorde?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAARB2gYBYMj3hMMOWih-VCmypF9kqnRXhJg&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BF5WaF4uZTze%2BuiCLNT1V7w%3D%3D",
//       twitterLink: "https://twitter.com/VishnuKorde",
//       instagramLink: "aa",
//     },
//     {
//       img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676441222/Speakers/hairsh_vp23_parbuy.jpg",
//       name: "Mr. Harish Uthayakumar",
//       whoIsHe: "Co-Founder BlueLearn",
//       content:
//         "Featured in Forbes 30U30 Asia, the co-founder of Bluelearn, India's largest and smartest student community.",
//       linkedinLink:
//         "https://www.linkedin.com/in/harish-uthayakumar?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACMs9JUBQoOTgkip56b9Brds4qwMeiV09_E&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BwWrhPBvXRMmfq8ByX413nQ%3D%3D",
//       twitterLink: "https://twitter.com/curiousharish",
//       instagramLink:
//         "https://www.instagram.com/curious_harish?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
//     },
//     {
//       img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676449856/Speakers/rishabh-jain_vp23_myt1sc.jpg",
//       name: "Mr. Rishabh Jain",
//       whoIsHe: "Creator at Labour Law Advisor",
//       content:
//         "Entrepreneur at Qriyo (EdTech Company) and Quick Payroll (Free Payroll app for MSME's). Has over 3 million subscribers on YouTube.",
//       linkedinLink:
//         "https://www.linkedin.com/in/rishsamjain?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAANrXIwBqTv3uf2W4SL2fUikpCY1_nJxFwA&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BJx62rlkrSQq2AOiJWtX1Dg%3D%3D",
//       twitterLink: "https://twitter.com/rishsamjain",
//       instagramLink:
//         "https://www.instagram.com/rishsamjain?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
//     },
//     {
//       img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676449220/Speakers/ashokramchandran_vp23_nynaor.jpg",
//       name: "Mr. Ashok Ramchandran",
//       whoIsHe: "CEO & President at Schindler India",
//       content:
//         "He has 30+ years of experience in the corporate world, was named one of India’s brightest business leaders under the age of 40, In the Economic Times 40 under Forty.",
//       linkedinLink:
//         "https://www.linkedin.com/in/ashok-ramachandran?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAC9gXMBpMNkDDMkf2XsEtZNiInTCB2H-p8&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3ByLTL5w%2FfTpiwB0AOdkholg%3D%3D",
//       twitterLink: "https://twitter.com/ashramachandran?lang=en",
//       instagramLink:
//         "https://www.instagram.com/ramachandranash?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
//     },
//     {
//       img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676440812/Speakers/anantlodha_ywriun-removebg-preview_kgngpz.jpg",
//       name: "Mr. Anant Ladha",
//       whoIsHe: "Founder at Invest Aaj for Kal",
//       content:
//         "A national bestselling author and the Founder and CEO of Invest Aaj for Kal, a channel with over 2M+ subscribers.",
//       linkedinLink:
//         "https://www.linkedin.com/in/anant-ladha-cfa-ca-cfp-ll-b-a506a6127?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAB8_kFwBKgaPP97ji-vVZ3xtF2y9k0kuFrM&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BLzum0CTtQSC%2Fu8mriirPbQ%3D%3D",
//       twitterLink:
//         "https://twitter.com/anantladha25?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
//       instagramLink:
//         "https://www.instagram.com/anantladha1234?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
//     },
//     {
//       img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676442022/Speakers/adityaarora_vp23_sl7yra.jpg",
//       name: "Mr. Aditya Arora",
//       whoIsHe: "CEO at Faad Network",
//       content:
//         "An angel Investor and the CEO at Faad Network, an investor network platform. Also the youngest nominee for Padma Shri Award.",
//       linkedinLink:
//         "https://www.linkedin.com/in/thefaadguy?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABqxS_4B2zjOZcXnyJbYeHl9_nCY2dy6Ieg&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BoIG0rphgSHaCR%2BqzuWSYtg%3D%3D",
//       twitterLink: "cc",
//       instagramLink:
//         "https://www.instagram.com/adi__arora?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
//     },
//     {
//       img: "https://res.cloudinary.com/da5mmxnn3/image/upload/v1676441340/Speakers/shreyanssancheti_vp23_ncbxln.jpg",
//       name: "Mr. Shreyans Sancheti",
//       whoIsHe: "Co-Founder BlueLearn",
//       content:
//         "A TEDx Speaker, BITS Pilani Goa Alumni, and the Co-Founder of Bluelearn, the largest and smartest student community.",
//       linkedinLink:
//         "https://www.linkedin.com/in/shreyans-sancheti?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACimqe4Bw__KxI6vvtwS88CgBMQtfRun3_w&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BKJwz%2FrilTrKJ3rAb7hvZnQ%3D%3D",
//       twitterLink: "https://twitter.com/Shreyans_23",
//       instagramLink:
//         "https://www.instagram.com/shreyans_23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
//     },
//   ];

//   return (
//     <>
//     <Navbar/>
//       <div id="guest" name="guest">
//         <AnimatePresence>
//           <div
//             className="main-container pt-12"
//             style={{ marginBottom: "40px" }}
//           >
//             <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-white text-transparent bg-clip-text text-3xl font-bold text-center py-8">
//               Previous Guests
//             </h1>

//             <div className="card-container" ref={cardContainerRef}>
//               {guests.map((guest, index) => (
//                 <div key={index} className="card cursor-default">
//                   <ScrollAnimation>
//                     <div className="card-body ">
//                       {/* Add class called  si-buttons-scifi to card-body*/}
//                       {/* <shine className="shine"></shine> */}
//                       <div className="card-images ">
//                         {/* <img src={img} alt="card background" className="card-bg" /> */}
//                         <img
//                           src={guest.img}
//                           alt="card figure"
//                           className="card-figure border-r-4 glass-bg-01"
//                           style={{ borderRadius: "50%" }}
//                         />
//                       </div>
//                       <div className="card-info">
//                         <h2 className="card-name">{guest.name}</h2>
//                         <p
//                           className="card-description"
//                           style={{ color: "white" }}
//                         >
//                           {guest.content}
//                         </p>

//                         {/* <div className="card-media">
//                     <a href={guest.linkedinLink}>
//                       <i className="uil uil-facebook-f"></i>
//                     </a>
//                     <a href={guest.twitterLink}>
//                       <i className="uil uil-twitter"></i>
//                     </a>
//                     <a href={guest.instagramLink}>
//                       <i className="uil uil-instagram"></i>
//                     </a>
//                   </div> */}
//                       </div>
//                     </div>
//                   </ScrollAnimation>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </AnimatePresence>
//       </div>
//     </>
//   );
// };

// export default Guest3;


import React, { useState, useEffect } from "react";
import { guests } from "./guests";
import { GuestCard } from "./GuestCard";
import { GuestCarousel } from "./GuestCarousel"; // Import the GuestCarousel component
import './prevGuest.css';

export function Guest3() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check the screen size to render either the grid or the carousel
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this width based on your design
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Clean up on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <h1 className="page-title">
        Previous Guests
      </h1>

      <div className="container">
        {isMobile ? (
          // Show the carousel on mobile
          <GuestCarousel guests={guests} />
        ) : (
          // Show the grid for larger screens
          <div className="guest-grid">
            {guests.map((guest, index) => (
              <GuestCard
                key={index}
                name={guest.name}
                role={guest.role}
                description={guest.description}
                imageUrl={guest.imageUrl}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Guest3;

