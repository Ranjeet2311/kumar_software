"use client";

import { useEffect, useState } from "react";
import SignUpForm from "@/components/Ui/forms/SignUpForm";
import LoginForm from "@/components/Ui/forms/LogInForm";
import SectionHeading from "@/components/Ui/section-heading/SectionHeading";
import Image from "next/image";
import authImage from "../../assets/images/Secure-login.png";
import Footer from "@/components/footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { redirect } from "next/navigation";
import Loader from "@/components/Loader";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [loading, setLoading] = useState(true);

  const user = useSelector((state: RootState) => state.user.user);

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

  useEffect(() => {
    console.log(`user auth page: `, user);

    if (user !== undefined) {
      setLoading(false);
    }

    if (user?.userId) {
      redirect("/dashboard");
    }
  }, [user]);

  if (loading) {
    return (
      <div className="container auth-page h-100">
        <p className="text-center mt-5">
          <Loader />{" "}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="container auth-page h-100">
        <div className="row outer-wrap justify-content-center align-items-center">
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
          <div className="col-12 col-lg-5 d-none d-lg-block">
            <Image src={authImage} alt="auth-image" className="authImage" />
          </div>
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}
