import React from "react";
import "./form.scss";

export default function ContactForm() {
  return (
    <div className="form-wrap">
      <form>
        <div className="mb-2">
          <div className="row">
            <div className="col-12 col-md-6">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                First name*
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Bruce"
                name="firstname"
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
                id="exampleFormControlInput1"
                placeholder="Wayne "
                name="lastname"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Contact number
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="+44 000 000 00"
            name="contact"
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
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Subject*
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Let's work together"
            name="topic"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Short description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            name="textarea"
          ></textarea>
        </div>
        <div className="mb-0">
          <button
            type="submit"
            className="btn btn-bg w-100 border-0 text-white"
          >
            Send
          </button>
        </div>
      </form>
      <h5 className="mt-2">
        <span className="text-white h6">result</span>
      </h5>
    </div>
  );
}
