import { useAnimate } from "framer-motion";
import React from "react";

export const RocketAnimation = ({ rocketUdd }) => {
  return (
    <div className="h-screen w-screen absolute justify-center top-0 z-2 flex items-center ">
      <Basic rocketUdd={rocketUdd} />
    </div>
  );
};

const Basic = ({ rocketUdd }) => {
  const [scope, animate] = useAnimate();
  const handleAnimate = async () => {
    rocketUdd
      ? animate("#target", { y: 110 })
      : animate("#target", { x: 110 });
  };

  return (
    <div ref={scope}>
      <div id="target" className="absolute ">
        <div class="rocket">
          <div class="rocket-body">
            <div class="body"></div>
            <div class="fin fin-left"></div>
            <div class="fin fin-right"></div>
            <div class="window"></div>
          </div>
          <div class="exhaust-flame"></div>
          <ul class="exhaust-fumes">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul class="star">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <button
        onLoad={()=>handleAnimate()}
        className="mt-4 p-2 rounded-md bg-red-200 "
      >
        Trigger Animation
      </button>
    </div>
  );
};
