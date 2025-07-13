"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { User as UserIcon } from "lucide-react";

export default function ProfilePage() {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) {
    return (
      <div className="container my-5">
        <div className="card shadow-sm p-4 text-center">
          <h2 className="mb-3">User Profile</h2>
          <p className="text-muted">No user data available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ maxWidth: 400, width: "100%" }}>
        {/* Profile Picture */}
        <div className="d-flex justify-content-center mb-4">
          <div
            className="rounded-circle overflow-hidden border border-secondary d-flex align-items-center justify-content-center bg-light"
            style={{ width: 120, height: 120 }}
          >
            <UserIcon size={48} className="text-secondary" />
          </div>
        </div>

        <h4 className="text-center mb-3">
          {user.firstName} {user.lastName}
        </h4>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Email:</strong>{" "}
            <span className="text-muted">{user.email}</span>
          </li>
          <li className="list-group-item">
            <strong>Position:</strong>{" "}
            <span className="text-muted">{user.position || "N/A"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
