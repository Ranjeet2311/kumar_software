"use client";

import Loader from "@/components/Loader";
import Card from "@/components/Ui/card/Card";
import useFetchIssues from "@/hooks/useFetchIssues";
import { RootState } from "@/store/store";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";

export default function DashboardPage() {
  // redirect("/dashboard/issues"); // Redirect to the issues page
  const issuesList = useSelector(
    (state: RootState) => state.issues.issuesList,
    shallowEqual
  );
  const issueProgressing = issuesList.filter(
    (issue) => issue.progress && !issue.completed,
    shallowEqual
  );
  const issueFinished = issuesList.filter(
    (issue) => issue.completed,
    shallowEqual
  );
  const fetchIssues = useFetchIssues();

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

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
            <div className="col-12 col-md-6 mb-4 d-flex flex-wrap justify-content-center align-items-center">
              <Link
                href="/dashboard/issues"
                className="btn btn-primary mb-2 me-2"
              >
                See all issues
              </Link>
              <Link href="/dashboard/messages" className="btn btn-primary mb-2">
                Chat with admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
