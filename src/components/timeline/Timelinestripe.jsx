import React from "react";
import "./Timelinestripe.css"

const TimeLineStripe = ({ data, changeTop, id }) => {
  const { heading, description,} = data;

  return (
    <div
      onMouseEnter={() => changeTop(id)}
      className="timeline-stripe"
    >
      
      <div className="stripe-content">
        <div className="stripe-heading-div">
        <h1 className="stripe-heading">{heading}</h1>

        </div>
        <div className="line"></div>
        <div className="stripe-description">
          
         {description.map((guest,i)=>{
          return(
            
            <p key={i}>{guest.name}- {guest.role}</p>
          )

         })}
        </div>
      </div>
    </div>
  );
};

export default TimeLineStripe;
