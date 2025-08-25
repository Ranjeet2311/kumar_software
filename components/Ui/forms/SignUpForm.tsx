import { sanitizeInput } from "@/utils/SanitizeInput";
import React, { ChangeEvent, FormEvent, useState } from "react";
import "./form.scss";
import { redirect } from "next/navigation";
import AlertMessage from "../../AlertMessage";
import Loader from "@/components/Loader";
import { UserRoundPlus, Eye, EyeClosed } from "lucide-react";
import { useTranslation } from "react-i18next";

type Signup = {
  firstName: string;
  lastName: string;
  contact: string;
  email: string;
  password: string;
};

export default function SignUpForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [signUpData, setSignUpData] = useState<Signup>({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    password: "",
  });

  const { t } = useTranslation();

  const handlePasswordShow = () => setShowPassword(!showPassword);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const sanitizedValue: string = sanitizeInput(value);

    setSignUpData((preValue) => {
      return { ...preValue, [name]: sanitizedValue };
    });
  };

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    // console.log(`handleSignup : `, signUpData);

    setLoading(true);
    setMessage(null);
    setError(null);

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpData),
    });

    const result = await response.json();
    // console.log(`response :: `, response);
    // console.log(`result :: `, result);

    setLoading(false);

    if (response.ok) {
      setMessage(result.message);
      setSignUpData({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        password: "",
      });
      console.log(`result.message after reset : `, result.message);

      setTimeout(() => {
        redirect("/dashboard");
      }, 5000);
    } else {
      setError(
        result.message ||
          "Something went wrong. Please try again. We'll reachout to you asap"
      );
    }
  };
  return (
    <div className="form-wrap">
      <form onSubmit={handleSignUp}>
        <div className="mb-2">
          <div className="row">
            <div className="col-12 col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                {t("form.first_name")}*
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Bruce"
                name="firstName"
                value={signUpData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                {t("form.last_name")}*
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Wayne"
                name="lastName"
                value={signUpData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            {t("form.contact_number")}*
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="+1 303 300 33"
            name="contact"
            value={signUpData.contact}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            {t("form.email")}*
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="brucewayne@example.com"
            name="email"
            value={signUpData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            {t("form.password")}*
            <span onClick={handlePasswordShow}>
              {signUpData.password && showPassword ? (
                <Eye size={22} strokeWidth={1.75} className="ms-2 d-inline" />
              ) : (
                <EyeClosed
                  size={22}
                  strokeWidth={1.75}
                  className="ms-2 d-inline"
                />
              )}
            </span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="**********"
            name="password"
            value={signUpData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-0 mt-4">
          <button
            type="submit"
            className={`btn btn-bg w-100 border-0 d-flex justify-content-center align-items-center  text-white ${
              loading ? "bg-primary" : null
            }`}
            disabled={loading}
          >
            {loading ? (
              <Loader size="lg" message="Creating account..." />
            ) : (
              <>
                <UserRoundPlus
                  size={18}
                  strokeWidth={1.75}
                  className="me-2 d-inline"
                />
                {t("form.create_account")}
              </>
            )}{" "}
          </button>
        </div>
      </form>
      <h5 className="mt-3">
        {message && (
          <AlertMessage
            status="success"
            message={t("form.auth.redirecting_login") || message}
          />
        )}
        {error && (
          <AlertMessage
            status="error"
            message={t("form.auth.error_generic") || error}
          />
        )}
      </h5>
    </div>
  );
}
