import React, { useRef, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import vplog from '../../../assets/vp_hpe1ut.svg'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const controlsZoom = useAnimation();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useLayoutEffect(() => {
    controlsLeft.start({
      x: -scrollY * 10,
      opacity: 1 - scrollY / 100,
      scale: 1 + scrollY / 100,
      transition: { type: 'spring', stiffness: 30, damping: 50 }
    });
    controlsRight.start({
      x: scrollY * 10,
      opacity: 1 - scrollY / 100,
      scale: 1 + scrollY / 100,
      transition: { type: 'spring', stiffness: 30, damping: 50 }
    });
    controlsZoom.start({
      scale: 1 + scrollY / 500,
      opacity: 1 - scrollY / 250,
      transition: { type: 'spring', stiffness: 30, damping: 50 },
    });
  }, [scrollY, controlsLeft, controlsRight, controlsZoom]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="Home">
      <div className="relative  w-screen h-screen flex items-center justify-center overflow-hidden place-content-center">
        <AnimatePresence>
          <Canvas
            camera={{
              position: [0, -27.5, -25],
              zoom: 3,
              near: 1,
              far: 100,
            }}
            style={{ height: "100vh" }}
            className="bg-black"
          >
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <directionalLight intensity={1.5} position={[10, 10, 10]} />
            <pointLight position={[-30, 0, -30]} power={10.0} />
            <PointCircle />
          </Canvas>

          {/* <div className="absolute top-12 left-0 w-full flex justify-center">
            <motion.div
              className="z-100 w-1/2 h-full relative "
              initial={{ opacity: 0, x: -100 }}
              animate={controlsLeft}
              exit={{ opacity: 0, x: -100 }}
            >
              <img src={imagel} alt="" />
            </motion.div>

            <motion.div
              className="z-100 w-1/2 h-full relative"
              initial={{ opacity: 0, x: 100 }}
              animate={controlsRight}
              exit={{ opacity: 0, x: 100 }}
            >
              <img src={imager} alt="" />
            </motion.div>
          </div> */}

          <motion.div className='absolute z-10 top-[15rem]  transform -translate-x-1/2'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={controlsZoom}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            <motion.img src={vplog} className='h-96 opacity-100' alt="" />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.05;
      ref.current.rotation.x = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.03, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default Hero;
