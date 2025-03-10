"use client";

import { redirect } from "next/navigation";

export default function DashboardPage() {
  // redirect("/dashboard/issues"); // Redirect to the issues page

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard.</p>
    </div>
  );
}
