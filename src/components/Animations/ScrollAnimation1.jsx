import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";// Import useInView from react-intersection-observer
import { useAnimate, stagger } from "framer-motion"

const boxVariant = {
  visible: { opacity: 1, x:0, transition: { duration: 0.9  } },
  hidden: { opacity: 0, x:-175 }
};

function ScrollAnimation1({ children }) {
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

export default ScrollAnimation1;