import React, { ChangeEvent, FormEvent, useState } from "react";
import { sanitizeInput } from "@/utils/SanitizeInput";
import Image from "next/image";
import { redirect } from "next/navigation";
// import "./form.scss";
import eyeOpen from "../../../assets/images/eye-open.png";
import eyeClosed from "../../../assets/images/eye-closed.png";

type logIn = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState<logIn>({
    email: "",
    password: "",
  });

  const handlePasswordShow = () => setShowPassword(!showPassword);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const sanitizedValue: string = sanitizeInput(value);

    // console.log(`name, value :: `, name, value);
    // console.log(`sanitizedValue :: `, sanitizedValue);
    // console.log(`loginData :: `, loginData);

    setLoginData((preVal) => {
      return { ...preVal, [name]: sanitizedValue };
    });
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    console.log(`handleLogin :: `, loginData);

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
    console.log(`response :: `, response);
    console.log(`result :: `, result);

    setLoading(false);

    if (response.ok) {
      setMessage(result.message);
      setLoginData({
        email: "",
        password: "",
      });
      console.log(`result.message after reset : `, result.message);

      redirect("/dashboard");
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
                  <span>
                    <Image
                      onClick={handlePasswordShow}
                      src={
                        loginData.password && showPassword ? eyeOpen : eyeClosed
                      }
                      alt="eye"
                      width={20}
                      style={{
                        margin: "0 12px",
                        cursor: "pointer",
                      }}
                    />
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

          <div className="mb-0">
            <button
              type="submit"
              className="btn btn-bg w-100 border-0 text-white"
              disabled={loading}
            >
              {loading ? "Login..." : "Login"}{" "}
            </button>
          </div>
        </form>
      </div>
      <h5 className="mt-2">
        {message && (
          <p className="text-white h6 mt-2" style={{ color: "green" }}>
            {message}
          </p>
        )}
        {error && (
          <p className="text-white h6 mt-2" style={{ color: "red" }}>
            {error}
          </p>
        )}
      </h5>
    </div>
  );
}
