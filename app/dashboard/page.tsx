"use client";

import Loader from "@/components/Loader";
import Card from "@/components/Ui/card/Card";
import { RootState } from "@/store/store";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function DashboardPage() {
  // redirect("/dashboard/issues"); // Redirect to the issues page

  const issuesList = useSelector((state: RootState) => state.issues.issuesList);
  const issueProgressing = issuesList.filter(
    (issue) => issue.progress && !issue.completed
  );
  const issueFinished = issuesList.filter((issue) => issue.completed);

  console.log(`isProgressing :: , `, issueProgressing);

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
              <Card title={`Total issues: ${issuesList.length}  `} />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <Card title={`Completed issues: ${issueFinished.length}  `} />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <Card
                title={`Progressing issues: ${issueProgressing.length}  `}
              />
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
