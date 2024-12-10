import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./loader.css";


const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [loadAmount, setLoadAmount]= useState(0)

  useEffect(() => {
    const loaderWrapper = document.getElementById('loader-wrapper');
    const progressBar = document.getElementById('progress-bar');
    const startButton = document.getElementById('start-button');

    const hideLoader = () => {
      loaderWrapper.style.display = 'none';
      startButton.style.display = 'block';
    };


    setTimeout(() => {
      setLoading(false);
      hideLoader();
    }, 5000);

   const LoadID= setInterval(()=>{
        setLoadAmount(o=>{
            if(o<80) return o+5;
            return o;
        })
    },500)
    return () => {
        clearInterval(LoadID);
    };
  }, []);

  return (
    <div className="pre_loader">
        {/* <div className="text-white">{loadAmount}</div> */}
      <div className="event_heading linear-wipe">
            <h1 className="attention">VISHWAPRENEUR'24</h1>
      </div>
      
      
      <div id="loader-wrapper">
      <div className="container">
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="trigger" />
            <div className="monitor">
              <div className="opening">
                <div className="camera o-x">
                  <div className="camera o-y">
                    <div className="camera o-z">
                      <div className="awing">
                        <div className="stars">
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                          <div className="star" />
                        </div>
                        <div className="fly o-x">
                          <div className="fly o-y">
                            <div className="fly o-z">
                              <div className="free_bounce">
                                <div className="free_rotate">
                                  <div className="body">
                                    <div className="cockpit">
                                      <div className="under" />
                                      <div className="back" />
                                      <div className="left" />
                                      <div className="right" />
                                      <div className="edge_left" />
                                      <div className="edge_right" />
                                      <div className="boosts">
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                        <div className="boost" />
                                      </div>
                                    </div>
                                    <div className="wing_left">
                                      <div className="under" />
                                      <div className="back" />
                                      <div className="left" />
                                      <div className="right" />
                                    </div>
                                    <div className="wing_right">
                                      <div className="under" />
                                      <div className="back" />
                                      <div className="left" />
                                      <div className="right" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div  className="Progress_loading">
          <span id="loading1" style={{color:"white"}}>Loading...</span>
          <div id="progress-bar"></div>
        </div>
        {/* <button className="button cta" onClick={() => window.location.href = "#start"}>
  Are you Ready? <FontAwesomeIcon icon={faArrowRight} />
</button> */}
      </div>
    </div>
  );
};

export default Loader;
