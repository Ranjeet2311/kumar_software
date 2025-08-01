"use client";

import useGoBack from "@/hooks/useGoBack";

export default function AppNotFound() {
  const goback = useGoBack();

  return (
    <div
      id="home"
      className="top-padding container d-flex flex-column h-100 justify-space-between "
    >
      <h2 className="colored-text text-center">404 Page Not Found {":("}</h2>
      <p className="text-center fw-bold mt-2">
        Return back to the{" "}
        <span
          className="pointer text-decoration-underline link"
          onClick={goback}
        >
          page
        </span>
      </p>
    </div>
  );
}
