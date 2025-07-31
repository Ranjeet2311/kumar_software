"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { sanitizeInput } from "@/utils/SanitizeInput";
import { redirect } from "next/navigation";
import AlertMessage from "../../AlertMessage";
import Loader from "@/components/Loader";
import { Key, Eye, EyeClosed } from "lucide-react";

type LogIn = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState<LogIn>({
    email: "",
    password: "",
  });

  const handlePasswordShow = () => setShowPassword(!showPassword);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const sanitizedValue: string = sanitizeInput(value);

    setLoginData((preVal) => {
      return { ...preVal, [name]: sanitizedValue };
    });
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const result = await response.json();
    setLoading(false);
    // console.log(`response.ok :  `, response.ok);
    if (response.ok) {
      // console.log(`if response.ok`);

      setMessage(result.message);

      console.log(`'router should begin`);
      redirect("/dashboard"); // Navigate to the dashboard after login
    } else {
      setError(
        result.message ||
          "Something went wrong. Please try again. We'll reachout to you asap"
      );
    }
  };

  return (
    <div>
      <div className="form-wrap">
        <form onSubmit={handleLogin}>
          <div className="mb-2">
            <div className="row">
              <div className="col-12">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  User email*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="brucewayne@example.com"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12 mt-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Password*
                  <span onClick={handlePasswordShow}>
                    {loginData.password && showPassword ? (
                      <Eye
                        size={22}
                        strokeWidth={1.75}
                        className="ms-2 d-inline"
                      />
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
                  className="form-control password_input"
                  id="lastname"
                  placeholder="***********"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
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
                <Loader size="lg" message="Authenticating" />
              ) : (
                <>
                  <Key size={18} strokeWidth={1.75} className="me-2 d-inline" />
                  Login
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      <h5 className="mt-3">
        {message && (
          <AlertMessage
            status="success"
            message={message + ", redirecting to dashboard..."}
          />
        )}
        {error && <AlertMessage status="error" message={error} />}
      </h5>
    </div>
  );
}
