"use client";

import { useEffect, useState } from "react";
import SignUpForm from "@/components/Ui/forms/SignUpForm";
import LoginForm from "@/components/Ui/forms/LogInForm";
import Image from "next/image";
import authImage from "../../assets/images/Secure-login.png";
import Footer from "@/components/footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { redirect } from "next/navigation";
import Loader from "@/components/Loader";
import { t } from "i18next";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [loading, setLoading] = useState(true);

  const user = useSelector((state: RootState) => state.user.user);

  const loginHandle = () => {
    // console.log(`loginHandle`);
    setShowLogin(true);
    setShowSignUp(false);
  };
  const signUpHandle = () => {
    // console.log(`signUpHandle`);
    setShowLogin(false);
    setShowSignUp(true);
  };

  useEffect(() => {
    // console.log(`user auth page: `, user);

    if (user !== undefined) {
      setLoading(false);
    }

    if (user?.userId) {
      redirect("/dashboard");
    }
  }, [user]);

  if (loading) {
    return (
      <div className="container dashboard d-flex justify-content-center ">
        <div className="row">
          <div className="col-12">
            <p className="text-center mt-5 mx-auto">
              <Loader size="lg" />
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container auth-page">
        <div className="row outer-wrap justify-content-center align-items-center">
          <div className="col-12 col-lg-7 form-section">
            <div className="row mt-4">
              <div className="col-12 pe-0 text-center px-0 mb-4">
                {showLogin && <h3>{t("lets_login")}</h3>}
                {showSignUp && <h3>{t("lets_create_an_account")}</h3>}
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
                    onClick={signUpHandle}
                    className="my-0 py-0 btn text-center w-100"
                  >
                    {t("already_a_customer_no_account")}
                    <span
                      className="fw-bold ms-1"
                      style={{ color: "#3778c2", textDecoration: "underline" }}
                    >
                      {t("form.create_account")}
                    </span>
                  </h5>
                )}
                {showSignUp && (
                  <h5
                    className="my-0 py-0 btn text-center w-100 text-decoration-underline fw-bold"
                    onClick={loginHandle}
                    style={{ color: "#3778c2" }}
                  >
                    {t("go_back_to.login")}
                  </h5>
                )}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 d-none d-lg-block">
            <Image src={authImage} alt="auth-image" className="authImage" />
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
