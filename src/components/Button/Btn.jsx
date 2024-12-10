import React from "react";
import './style.css';
import { useNavigate } from "react-router-dom";

const ParticleButton = ({link}) => { 
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/register")
  };
    return (
      <div className='center-container mt-0 flex justify-centrer items-center'> 
        <label htmlFor="slow"/>
      
          {/* <input className='sl' id="slow" type="checkbox"/> */}
        {/* </label> */}

        {/* comment it out for Register button */}
        {/* <button className="btn rounded-xl py-3" onClick={handleClick}>Register
         
          <span className="flex justify-centrer items-center" aria-hidden="true">
            <span
              className="particle"
              style={{ transform: 'rotate(-45deg)', left: '53%', top: '15%', '--d': '4em', '--f': '0.7', '--t': '0.15' }}
            ></span>
            <span
              className="particle"
              style={{ transform: 'rotate(150deg)', left: '40%', top: '70%', '--d': '7.5em', '--f': '0.8', '--t': '0.08' }}
            ></span>
            <span
              className="particle"
              style={{ transform: 'rotate(10deg)', left: '90%', top: '65%', '--d': '7em', '--f': '0.6', '--t': '0.25' }}
            ></span>
            <span
              className="particle"
              style={{ transform: 'rotate(-120deg)', left: '15%', top: '10%', '--d': '4em' }}
            ></span>
            <span
              className="particle"
              style={{ transform: 'rotate(-175deg)', left: '10%', top: '25%', '--d': '5.25em', '--f': '0.6', '--t': '0.32' }}
            ></span>
            <span
              className="particle"
              style={{ transform: 'rotate(-18deg)', left: '80%', top: '25%', '--d': '4.75em', '--f': '0.5', '--t': '0.4' }}
            ></span>
            <span
              className="particle"
              style={{ transform: 'rotate(-160deg)', left: '30%', top: '5%', '--d': '9em', '--f': '0.9', '--t': '0.5' }}
            ></span>
            <span
              className="particle"
              style={{ transform: 'rotate(175deg)', left: '9%', top: '30%', '--d': '6em', '--f': '0.95', '--t': '0.6' }}
            ></span>
            <span
              className="particle"
              style={{ transform: 'rotate(-10deg)', left: '89%', top: '25%', '--d': '4.5em', '--f': '0.55', '--t': '0.67' }}
            ></span>
            <span
              className="particle"
              style={{ transform: 'rotate(-140deg)', left: '40%', top: '10%', '--d': '5em', '--f': '0.85', '--t': '0.75' }}
            ></span>
            <span
              className="particle"
              style={{ transform: 'rotate(90deg)', left: '45%', top: '65%', '--d': '4em', '--f': '0.5', '--t': '0.83' }}
            ></span>
            <span
              className="particle"
              style={{ transform: 'rotate(30deg)', left: '70%', top: '80%', '--d': '6.5em', '--f': '0.75', '--t': '0.92' }}
            ></span>
          </span>
          </button> */}
      </div>
      
    );
  };
  
  export default ParticleButton;
  