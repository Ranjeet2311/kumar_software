"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import "./form.scss";
import { sanitizeInput } from "@/utils/SanitizeInput";
import { servicesList } from "@/utils/List";
import xss from "xss";

type FormData = {
  firstName: string;
  lastName: string;
  contact: string;
  email: string;
  subject: string;
  description: string;
};

export default function ContactForm() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const sanitizedValue: string =
      name === "description" ? xss(value) : sanitizeInput(value);

    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: sanitizedValue };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setError(null);

    const response = await fetch("/api/contact", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setLoading(false);

    if (response.ok) {
      setMessage(result.message);
      setFormData({
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        subject: "",
        description: "",
      });
      console.log(`result.message after reset : `, result.message);
      console.log(`Form data after reset : `, formData);
    } else {
      setError(
        result.message ||
          "Something went wrong. Please try again. We'll reachout to you asap"
      );
    }
  };

  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <div className="row">
            <div className="col-12 col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                First name*
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Bruce"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-12 col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Last name*
              </label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Wayne"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Contact number*
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="+1 303 300 33"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Your email address*
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="brucewayne@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Subject*
          </label>
          <select
            name="subject"
            id="subject"
            className="form-select"
            aria-label="Default select example"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Any Level
            </option>
            {servicesList &&
              servicesList.map((service) => (
                <option key={service.title} value={service.title}>
                  {service.title}
                </option>
              ))}
          </select>
          {/* <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Let's work together"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          /> */}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Short description*
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={4}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-0">
          <button
            type="submit"
            className="btn btn-bg w-100 border-0 text-white"
          >
            {loading ? "Sending..." : "Send"}{" "}
          </button>
        </div>
      </form>
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
