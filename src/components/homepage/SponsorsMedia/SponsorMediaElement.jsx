import { motion } from "framer-motion";
import React from "react";
import "./SponsorMediaElement.css"; // Import the custom CSS file

const SponsorMediaElement = ({ urls, direction }) => {
  return (
    <div className="sponsor-container">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
        className="sponsor-motion-container"
      >
        {urls.map((url, i) => (
          <img key={i} src={url} className="sponsor-image" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ duration: 90, ease: "linear", repeat: Infinity }}
        className="sponsor-motion-container"
      >
        {urls.map((url, i) => (
          <img key={i} src={url} className="sponsor-image" />
        ))}
      </motion.div>
    </div>
  );
};

export default SponsorMediaElement;
