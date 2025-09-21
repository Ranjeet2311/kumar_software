"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { sanitizeInput } from "@/utils/SanitizeInput";
import { redirect } from "next/navigation";
import AlertMessage from "../../AlertMessage";
import Loader from "@/components/Loader";
import { Key, Eye, EyeClosed } from "lucide-react";
import { useTranslation } from "react-i18next";
import { clearTranslation } from "@/lib/cleanForTranslation";
import { useRouter } from "next/navigation";

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

  const { t } = useTranslation();
  const router = useRouter();

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

      // console.log(`'router should begin`);
      router.replace("/dashboard"); // Navigate to the dashboard after login
    } else {
      // console.log("login error", result.message);
      setError(result.message);
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
                  {t("form.email")}*
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
                  {t("form.password")}*
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
                <Loader size="lg" message={`${t("nav.login")}...`} />
              ) : (
                <>
                  <Key size={18} strokeWidth={1.75} className="me-2 d-inline" />
                  {t("nav.login")}
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
            message={t(`form.auth.${clearTranslation(message)}`)}
          />
        )}
        {error && (
          <AlertMessage
            status="error"
            message={t(`form.auth.${clearTranslation(error)}`)}
          />
        )}
      </h5>
    </div>
  );
}
