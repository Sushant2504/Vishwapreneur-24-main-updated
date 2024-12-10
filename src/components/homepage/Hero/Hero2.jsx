
import React, { useRef, useLayoutEffect } from "react";
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
// import vplog from '../../../assets/vp_hpe1ut.svg'
import './Hero.css'
import { Link } from 'react-router-dom';
import Button2 from "../Button2/Btn"


const Hero = () => {

  return (
    <div id="Home">
      <div className="relative  w-screen h-screen flex items-center justify-center overflow-hidden place-content-center">
        
        <AnimatePresence>
        <div class="bg">
                <div class="star-field">
                <div class="layer"></div>
                <div class="layer"></div>
                <div class="layer"></div>
                </div>
        </div>
          <motion.div className='absolute z-10 px-3'
        //   <motion.div className='absolute z-10 top-[15rem]  transform -translate-x-1/2'
            // initial={{ opacity: 0, scale: 0.5 }}
            // // animate={controlsZoom}
            // animate={{opacity:1, scale: 1 }}
            // exit={{ opacity: 0, scale: 0.5 }}
          >

            <motion.img src="https://res.cloudinary.com/di40y80dw/image/upload/v1707118068/vp_hpe1ut_ygtazn.svg" className='h-96 opacity-100' alt="" />
          </motion.div>
        </AnimatePresence>
        <div className="my_register_button">
          <Button2></Button2>
          <p id="tutorial" style={{ color: 'white', paddingTop: "0.8rem" }}>
            <Link to="/How_to_register" style={{ textDecoration: 'none', color: 'white' }}>
                How to register?
            </Link>
          </p>
        </div>
        
      </div>
      
      
    </div>
  );
};

export default Hero;
