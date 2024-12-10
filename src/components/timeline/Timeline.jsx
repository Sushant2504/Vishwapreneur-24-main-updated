import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Timeline.css";
import TimeLineStripe from "./Timelinestripe.jsx";

import getImageURL from "../../assets/utils/image-utils.js";

const Timeline = ({ TimelineContent }) => {
  const [top, setTop] = useState(0);
  const [vidTop, setVidTop] = useState(0);

  const changeTop = (id) => {
    setVidTop(id * 20);
    setTop(id * 14);
  };

  return (
    <div className="timeline-container">
      {TimelineContent && TimelineContent.map((item, i) => (
        <TimeLineStripe changeTop={changeTop} data={item} key={item.id || i} id={i} />
      ))}
      <div className="video-overlay">
        <motion.div
          initial={{ top: 0 }}
          animate={{ top: top + "rem" }}
          className="video-container"
        >
          {TimelineContent && TimelineContent.map((v, i) => {
            // Check if the `vid` contains an image
            const isImage = v.vid.endsWith(".jpg") || v.vid.endsWith(".png") || v.vid.endsWith(".jpeg");

            return isImage ? (
              <motion.img
                key={v.id || i}
                animate={{ y: -vidTop + "rem" }}
                className="video"
                src={getImageURL(v.vid)}
                alt={`Timeline Content ${i}`}
              />
            ) : null;  // Skip non-images (videos)
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
