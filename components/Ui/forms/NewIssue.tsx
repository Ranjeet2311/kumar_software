"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import xss from "xss";
import Loader from "@/components/Loader";
import AlertMessage from "@/components/AlertMessage";
import { Bug } from "lucide-react";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";

type Issue = {
  issue: string;
  description: string;
};

type TokenResponse = {
  token?: string;
  message?: string;
};

type User = {
  email: string;
  firstName: string;
  lastName: string;
  userId: string;
};

interface DecodedToken {
  exp: string;
  iat: string;
  user: User;
}
type UserData = {
  firstName: string;
  lastName: string;
  userId: string;
};

export default function NewIssue() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserData>({
    firstName: "",
    lastName: "",
    userId: "",
  });

  const [issueData, setIssueData] = useState<Issue>({
    issue: "",
    description: "",
  });

  const newIssue = {
    userId: user.userId,
    firstName: user.firstName,
    lastName: user.lastName,
    issue: issueData.issue,
    description: issueData.description,
    progress: false,
    completed: false,
  };

  const handleSubmit = async (e: FormEvent) => {
    // console.log(`Create Issue handleSubmit`);
    e.preventDefault();
    setMessage(null);
    setError(null);
    setLoading(true);

    const response = await fetch("/api/issue/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIssue),
    });

    const result = await response.json();
    setLoading(false);

    if (response.ok) {
      setMessage(result.message);

      setIssueData({
        issue: "",
        description: "",
      });
    } else {
      setError(result.message || "Something went wrong. Please try again.");
    }

    // console.log(`response :: `, response);
    // console.log(`result :: `, result);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // console.log(` e target .value : `, e.target.value);
    const { name, value } = e.target;

    const xssProofValue: string = xss(value);

    setIssueData((prevData) => {
      return { ...prevData, [name]: xssProofValue };
    });

    // console.log(` issueData after setting : `, issueData);
  };

  const { t } = useTranslation();

  useEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch("/api/cookie");
        const data: string = await response.json();

        // console.log(`Token: `, data);

        if (data) {
          const decoded = jwt.decode(data) as DecodedToken | null;
          console.log(`decoded: `, decoded);

          if (decoded?.user) {
            const user = decoded.user;
            // console.log(`decoded.user: `, user);

            setUser((prevUser) => {
              return {
                ...prevUser,
                firstName: user.firstName,
                lastName: user.lastName,
                userId: user.userId,
              };
            });

            // console.log(`setting user: `, user);
          } else {
            console.error("Invalid decoded user data");
          }
        } else {
          console.error("No token value found");
        }
      } catch (err) {
        setError("Failed to fetch token");
      }
    }

    fetchToken();
  }, []);
  return (
    <div>
      <div className="form-wrap">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              {t("form.issue_title")}
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Bruce"
              name="issue"
              value={issueData.issue}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              {t("form.description")}
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={4}
              name="description"
              value={issueData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-0">
            <Button
              button={true}
              type="submit"
              customClass={`btn btn-bg  border-0 d-flex justify-content-center align-items-center text-white ${
                loading ? "bg-primary" : null
              }`}
              disabled={loading}
            >
              {loading ? (
                <Loader color="red.500" size="lg" message="Creating issue..." />
              ) : (
                <>
                  <Bug size={22} strokeWidth={1.75} className="me-2 d-inline" />
                  {t("create_issue")}
                </>
              )}
            </Button>
          </div>
        </form>
        <h5 className="mt-2">
          {message && <AlertMessage status="success" message={message} />}
          {error && <AlertMessage status="error" message={error} />}
        </h5>
      </div>
    </div>
  );
}
