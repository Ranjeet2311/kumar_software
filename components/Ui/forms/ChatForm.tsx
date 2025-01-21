import React from "react";

export default function ChatForm() {
  return (
    <div>
      <div className="form-wrap">
        {/* <form onSubmit={handleLogin}> */}
        <form>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Your message*
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={4}
              name="description"
              // value={formData.description}
              // onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-0">
            <button
              type="submit"
              className="btn btn-bg w-100 text-dark"
              // disabled={loading}
            >
              {/* {loading ? "Login..." : "Login"}{" "} */}
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
