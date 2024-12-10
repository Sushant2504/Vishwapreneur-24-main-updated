import React from "react";
import "./Register.css";
import Navbar from "../Navbar/Navbar";

const Register = () => {
  return (
    <div>
      <Navbar />
      <h1 id="heading-of-tutorials">How to Register?</h1>
      <div class="tutorial-video">
        <center>
          <iframe
            src="https://www.youtube.com/embed/iCY_21BcWJI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </center>
      </div>
      <div className="px-6 md:px-16 w-screen">
        <div className="flex flex-col md:flex-row  bg-blue-950 px-4 md:px-16 py-12 rounded-3xl text-slate-100  justify-center gap-12 r-gradient">
          <div className="flex flex-col gap-8 md:pr-6 md:border-r ">
            {/* <p className="text-sm">
              <h3 className="text-xl font-semibold text-pinkish">For Other Than Vishwakarma University</h3>
              
              <li><a href="https://learner.vierp.in/events">Visit learner.vierp.in/event</a></li>
              <li>Click on sign-up button on the bottom left corner</li>
                        <li>Enter your email address & verify the OTP received </li>
                        
                
                        <li>Fill up the required details & set a password</li>
                        <li>Now, login using your email and password</li>
                        <li>On the top left corner of your dashboard, click on the dropdown</li>
                        <li>Click on Pay Event Fees</li>
                        <li>Select Organising institute as VIIT,Pune from dropdown menu</li>
                        <li>Select event as VISHWAPRENEUR 23 from dropdown</li>
                        <li>Select the type of ticket as either VIP-external or Regular-external</li>
                        <li>Click on pay</li>
                        <li>Select payment option (Cash will be accepted only in person)</li>
                        <li>After successful payment of the fees, receipt will be generated and an confirmation email will be sent within 24 hours</li>
                        <li>Please make sure to note down your Reference number</li>
            </p> */}
            <h3 className="text-xl font-semibold text-pinkish">
              For other than Vishwakarma University
            </h3>
            <a
              href="https://learner.vierp.in/events"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button className="button-85" role="button">
                Register
              </button>
            </a>

            <li>
              <a href="https://learner.vierp.in/events">
                Visit learner.vierp.in/events
              </a>
            </li>
            <li>Click on sign-up button on the bottom left corner</li>
            <li>Enter your email address & verify the OTP received </li>

            <li>Fill up the required details & set a password</li>
            <li>Now, login using your email and password</li>
            <li>
              On the top left corner of your dashboard, click on the dropdown
            </li>
            <li>Click on Pay Event Fees</li>
            <li>Select Organising institute as VIIT,Pune from dropdown menu</li>
            <li>Select event as VISHWAPRENEUR 24 from dropdown</li>
            <li>
              Select the type of ticket as either VIP-external or
              Regular-external
            </li>
            <li>Click on pay</li>
            <li>
              Select payment option
            </li>
            <li>
              After successful payment of the fees, receipt will be generated
              and an confirmation email will be sent within 24 hours
            </li>
            <li>Please make sure to note down your Reference number</li>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-semibold text-pinkish">
              For Students Of Vishwakarma University
            </h3>
            <a
              href="https://learner.vierp.in/"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button className="button-85" role="button">
                Register
              </button>
            </a>
            {/* <ParticleButton link="https://learner.vierp.in/events" /> */}
            <li>Login to learner.vierp using your PRN number and password</li>
            <li>
              Click on dropdown menu on the top left corner of the dashboard
            </li>
            <li>Select accounts section</li>
            <li>Click on pay event fees from the dropdown</li>
            <li>Select Organising institute as VIIT,Pune from dropdown menu</li>
            <li>Select event as VISHWAPRENEUR 24 from dropdown</li>
            <li>Select the type of ticket as either VIP or Regular</li>
            <li>Click on pay</li>
            <li>
              Select payment option
            </li>
            <li>
              After successful payment of the fees, receipt will be generated
              and an confirmation email will be sent within 24 hours
            </li>
            <li>Please make sure to note down your Reference number</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
