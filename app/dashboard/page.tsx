"use client";

import Loader from "@/components/Loader";
import Card from "@/components/Ui/card/Card";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  // redirect("/dashboard/issues"); // Redirect to the issues page

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Dashboard</h1>
          <p>Welcome to the dashboard.</p>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <Card title="Total issues: 10" />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <Card title=" Completed issues: 10" />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <Card title="Progressing issues: 10" />
            </div>
            <div className="col-12">
              <hr />
            </div>
            <div className="col-12 col-md-6 mb-4">Issues stats</div>
            <div className="col-12 col-md-6 mb-4 d-flex flex-column  justify-content-center align-items-center">
              <button className="btn btn-primary mb-2">
                <Link href="/dashboard/issues" /> See all issues
              </button>
              <button className="btn btn-primary mb-2">
                <Link href="/dashboard/messages" /> Chat with admin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
