import React, {  useRef } from "react";
import "./Guest2.css";
import { Link, useNavigate } from "react-router-dom";
// import ''


const Guest2 = () => {
  const navigate = useNavigate();
  const cardContainerRef = useRef(null);

  const guests = [
    {
     img: "https://res.cloudinary.com/di40y80dw/image/upload/v1709103485/Instagram_post_-_559_1_1_wevg3x.png",
      name: "CID Suresh Khopde(EX IPS)",
      whoIsHe: "Retired as Special IG",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899812/vp24%20guest%20app/Instagram_post_-_544_zoeazp.png",
      name: "Suresh Prabhu",
      whoIsHe: "Former Railway Minister, India",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899813/vp24%20guest%20app/Instagram_post_-_551_vfd3js.png",
      name: "V Krishnan",
      whoIsHe: "Co-founder &",
      whoIsHe2: "Group President, JustDial ",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899813/vp24%20guest%20app/Instagram_post_-_552_fptrg9.png",
      name: "Vivek Bhatia",
      whoIsHe: "MD, Thyssenkrupp Industries",
      content: "",
    },
    // {
    //   img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899812/vp24%20guest%20app/Instagram_post_-_548_odb2yh.png",
    //   name: "Mikhil Inani",
    //   whoIsHe: "CEO, Apollo Finvest, ",
    //   whoIsHe2: "Co-Founder, PharmEasy ",
    //   content: "",
    // },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899813/vp24%20guest%20app/Instagram_post_-_554_dptukd.png",
      name: "Chinu Kala",
      whoIsHe: "Founder & CEO, Rubans Accessories",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899813/vp24%20guest%20app/Instagram_post_-_550_ba1rla.png",
      name: "Shreeman Legend",
      whoIsHe: "Content Creator",
      content: "",
    },

    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899814/vp24%20guest%20app/Instagram_post_-_556_eyereh.png",
      name: "Shreyans Sancheti",
      whoIsHe: "Co-Founder, BlueLearn",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899814/vp24%20guest%20app/Instagram_post_-_555_suo5z1.png",
      name: "Harish Uthayakumar",
      whoIsHe: "Co-Founder, Bluelearn",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1709103711/Instagram_post_-_559_2_1_lne0j4.png",
      name: "Sanjay Sethi",
      whoIsHe: "CEO & Founder, ShopClues.com",
      content: "",
    },
    // {
    //   img: "https://res.cloudinary.com/di40y80dw/image/upload/v1709112488/Instagram_post_-_559_4_1_szabnr.png",
    //   name: "Jay Desai",
    //   whoIsHe: "Finance content creator",
    //   content: "",
    // },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899813/vp24%20guest%20app/Instagram_post_-_553_sp9ofh.png",
      name: "Abhishek Kar",
      whoIsHe: "Finance Influencer",
      content: "",
    },
    // {
    //   img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899812/vp24%20guest%20app/Instagram_post_-_545_mlsmmb.png",
    //   name: "Nikhil Malhotra",
    //   whoIsHe: "CIO, Tech Mahindra",
    //   whoIsHe2: "Creator, Maker's lab",
    //   // whoIsHe2: "Founder, Hasley India",
    //   content: "",
    // },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899812/vp24%20guest%20app/Instagram_post_-_543_r2vxei.png",
      name: "Sushant Bindal",
      whoIsHe: "Founder, Money Monitor",
      // whoIsHe2: "Founder, Hasley India",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899812/vp24%20guest%20app/Instagram_post_-_546_xzhqnn.png",
      name: "Kushal Lodha",
      whoIsHe: "Founder, KAGR",
      // whoIsHe2: "Founder, Hasley India",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899812/vp24%20guest%20app/Instagram_post_-_547_v9atfj.png",
      name: "Mahak Garg",
      whoIsHe: "Director, Masters Union",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708899813/vp24%20guest%20app/Instagram_post_-_549_b0q9dq.png",
      name: "Atharva Sudame",

      whoIsHe: "Content Creator",
      content: "",
    },
    {
      img: "https://res.cloudinary.com/di40y80dw/image/upload/v1709108299/Instagram_post_-_559_3_1_qg6fji.png",
      name: "RJ Soham",
      whoIsHe: "Content Creator",
      content: "",
    },

    // {
    //   img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708108953/Guests/new17/image_134-removebg-preview_gdbd3u.webp",
    //   name: "Rajesh Desai",

    //   whoIsHe: "CoFounder, CEO &",
    //   whoIsHe2: "MD, Lyra Network Asia",
    //   content: "",
    // },
    // {
    //   img: "https://res.cloudinary.com/di40y80dw/image/upload/v1708108957/Guests/new17/channels4_profile__1__1-removebg-preview_ptfihq.webp",
    //   name: "Bhanu Pathak",

    //   whoIsHe: "Content Creator",
    //   content: "",
    // },
  ];
  return (
    <div className="main-container pt-12" name="guest2" id="guest">
      <div className="nine">
        <h1 className="main-heading pt-28 bg-gradient-to-r from-[#b74b9b] to-[#ffb3eb] text-transparent bg-clip-text text-3xl font-bold text-center py-16">
          Guests
        </h1>
      </div>
  
      <div className="card-container">
        {guests.map((guest, index) => (
          <div key={index} className="card" style={{ background: "#1e1e2f" }}>
            <div className="card-body pt-3 cursor-default">
              <div className="card-images">
                <img
                  src={guest.img}
                  alt="card figure"
                  className="card-figure"
                />
              </div>
              <div className="card-info">
                <h2 className="card-name">{guest.name}</h2>
                <p className="card-description" style={{ color: "white" }}>
                  {guest.whoIsHe}
                  <br/>
                  {guest.whoIsHe2}
                </p>
                <p className="card-content" style={{ color: "#aaa", marginTop: "10px" }}>
                  {guest.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
  
      <button
        onClick={() => {
          navigate("/guests");
        }}
        className="space-button"
        style={{ marginTop: "40px", borderColor: "#7c008d" }}
      >
        Previous Guests
      </button>
    </div>
  );
  
};

export default Guest2;