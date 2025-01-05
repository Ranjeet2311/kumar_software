"use client";

import { useState } from "react";
import SignUpForm from "@/components/Ui/forms/SignUpForm";
import LoginForm from "@/components/Ui/forms/LogInForm";
import SectionHeading from "@/components/Ui/section-heading/SectionHeading";
import Image from "next/image";
import authImage from "../../assets/images/auth.png";
import Footer from "@/components/footer/Footer";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  const loginHandle = () => {
    console.log(`loginHandle`);
    setShowLogin(true);
    setShowSignUp(false);
  };
  const signUpHandle = () => {
    console.log(`signUpHandle`);
    setShowLogin(false);
    setShowSignUp(true);
  };

  return (
    <>
      <div className="container auth-page h-100">
        <div className="row">
          {/* <SectionHeading
          title="Thank you for trusting us"
          text="Use your login email and password to create a support ticket"
          custom_class="w-100"
        /> */}
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-5">
            <Image src={authImage} alt="auth-image" className="authImage" />
          </div>
          <div className="col-12 col-lg-7 form-section">
            <div className="row mt-4">
              <div className="col-12 pe-0 text-center px-0 mb-4">
                {showLogin && <h3>Hey there let&apos;s login</h3>}
                {showSignUp && <h3>Let&apos;s create an account for you </h3>}
                {/* <hr /> */}
              </div>
              <div className="col-12">
                {showLogin && <LoginForm />}
                {showSignUp && <SignUpForm />}
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                {showLogin && (
                  <h5
                    className="my-0 py-0 btn text-center w-100"
                    onClick={signUpHandle}
                  >
                    Are you a customer but have no support account yet.
                    <span className="fw-bold ms-1">Create a new</span>
                  </h5>
                )}
                {showSignUp && (
                  <h5
                    className="my-0 py-0 btn text-center w-100"
                    onClick={loginHandle}
                  >
                    Go back to <span className="fw-bold ms-1">Login</span>
                  </h5>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
