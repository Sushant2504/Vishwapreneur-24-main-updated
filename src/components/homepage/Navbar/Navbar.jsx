import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const [otherThanHomepage, setOtherThanHomepage] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(120000px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const varients1 = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVarients = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const links = [
    {
      id: 1,
      link: "",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "guest",
    },
    {
      id: 4,
      link: "gallery",
    },
    
    {
      id: 5,
      link: "contact",
    },
    
  ];

  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname != "/") {
      console.log("setting setOtherThanHomepage");
      setOtherThanHomepage(true);
    }
  }, []);
  
  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
      <div onClick={() => navigate("/")}>
        <img
          src="https://res.cloudinary.com/da5mmxnn3/image/upload/v1703221409/VP%2724/Vishwapreneur_24_nfl766.png"
          className="w-[10rem] md:w-[27rem] lg:w-[30rem] filter brightness-120 contrast-150 cursor-pointer"
          alt="Logo"
        />
        {/* <h1 className="main-heading  text-transparent bg-clip-text font-bold py-8 logoheading">
        VISHWAPRENEUR'24
              </h1> */}
      </div>

      <ul className="hidden md:flex list-none">
        
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-white transition duration-300"
            onClick={() => {
              console.log(link);
            }}
          >
            {otherThanHomepage ? (
              <>
                {" "}
                <button
                  onClick={() => {
                    navigate("/#" + link);
                  }}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </button>
              </>
            ) : (
              <>
                {" "}
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              </>
            )}
            
          </li>
          
        ))}
        <li
          key={links.length}
          className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-white transition duration-300"
          onClick={() => {
            navigate("/timeline");
          }}
        >
          Timeline
        </li>
        <li
          key={links.length}
          className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-white transition duration-300"
          onClick={() => {
            navigate("/team");
          }}
        >
          Team
        </li>
      
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <motion.ul
          initial="closed"
          animate={nav ? "open" : "closed"}
          exit="closed"
          variants={variants}
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 list-none"
        >
          {otherThanHomepage ? (
            <motion.div variants={varients1} className="my_links">
              {links.map(({ id, link }) => (
                <motion.li
                  key={id}
                  variants={itemVarients}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => {
                      setNav(!nav);
                      navigate("/#" + link);
                    }}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </button>
                </motion.li>
              ))}
              <motion.li
                variants={itemVarients}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={links.length}
                onClick={() => {
                  navigate("/team");
                  setNav(!nav);
                }}
              >
                Team
              </motion.li>
            </motion.div>
          ) : (
            <motion.div variants={varients1} className="my_links">
              {links.map(({ id, link }) => (
                <motion.li
                  key={id}
                  variants={itemVarients}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    onClick={() => {
                      setNav(!nav);
                      navigate("/#" + link);
                    }}
                    to={link}
                    smooth
                    duration={500}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={itemVarients}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={links.length}
                onClick={() => {
                  navigate("/team");
                  setNav(!nav);
                }}
              >
                Team
              </motion.li>
            </motion.div>
          )}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
