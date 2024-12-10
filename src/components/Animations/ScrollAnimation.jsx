import { motion, useAnimation,spring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";// Import useInView from react-intersection-observer

const boxVariant = {
  visible: { opacity: 1, scale: 1,  transition:{type:spring,duration:0.2} },
  hidden: { opacity: 0, scale: 0 }
};

function ScrollAnimation({ children }) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } 
    // else {
    //   control.start("hidden");
    // }
  }, [control, inView]);

  return (
    <motion.div
    className=""
    ref={ref}
    variants={boxVariant}
    initial="hidden"
    animate={control}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimation;