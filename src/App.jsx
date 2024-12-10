import { React, lazy, Suspense } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Landing from "./Landing";
import Footer from "./components/homepage/Footer/Footer";
import Navbar from "./components/homepage/Navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
const Guest3 = lazy(() => import("./components/homepage/Guests/Guest3"));
import Loader1 from "./components/Preloader/loader1";
import SponsorMedia1 from "./components/homepage/SponsorsMedia/SponserMedia1";
import Mediapartner1 from "./components/homepage/SponsorsMedia/MediaPartner1";
import TimelineMain from "./components/timeline/TimelineMain";
const Register = lazy(() =>
  import("./components/homepage/Registeration/Register")
);
const TeamPage = lazy(() =>
  import("./components/TeamPage/TeamPage")
);


function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const startTime = new Date().getTime();

    const onPageLoad = () => {
      const endTime = new Date().getTime();
      const loadingTime = endTime - startTime;

      console.log('page loaded');

      // Ensure the loader is visible for at least 3 seconds
      const minimumLoaderDuration = 3000;

      if (loadingTime < minimumLoaderDuration) {
        setTimeout(() => {
          setIsPageLoaded(true);
        }, minimumLoaderDuration - loadingTime);
      } else {
        setIsPageLoaded(true);
      }
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <div>
      {isPageLoaded ? (
        <>
          <Navbar />
          <div class="bg">
                <div class="star-field">
                  <div class="layer"></div>
                  <div class="layer"></div>
                  <div class="layer"></div>
                </div>
            </div>
          <Routes>
            <Route path="/#location" element={<Landing />} />
            <Route path="/" element={<Landing />} />
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader1 />}>
                  <Landing />
                </Suspense>
              }
            />
            <Route
              path="/#location"
              element={
                <Suspense fallback={<Loader1 />}>
                  <Landing />
                </Suspense>
              }
            />
            <Route
              path="/guests"
              element={
                <Suspense fallback={<Loader1 />}>
                  <Guest3 />
                </Suspense>
              }
            />
            <Route
              path="/register"
              element={
                <Suspense fallback={<Loader1 />}>
                  <Register />
                </Suspense>
              }
            />
            <Route
              path="/team"
              element={
                <Suspense fallback={<Loader1 />}>
                  <TeamPage />
                </Suspense>
              }
            />

            <Route exact path="/team" element={<TeamPage />} />
            <Route exact path="/sponsermedia" element={<SponsorMedia1 />} />
            <Route exact path="/mediapartner" element={<Mediapartner1 />} />

            <Route path="/*" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/timeline"  element={<TimelineMain/>}/>
          </Routes>
          <Footer />
        </>
      ) : (
        <Loader1 />
      )}
    </div>
  );
}

export default App;
