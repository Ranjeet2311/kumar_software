"use client";

import Loader from "@/components/Loader";
import Card from "@/components/Ui/card/Card";
import useFetchIssues from "@/hooks/useFetchIssues";
import { RootState } from "@/store/store";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

export default function DashboardPage() {
  // redirect("/dashboard/issues"); // Redirect to the issues page
  const [loading, setLoading] = useState(true);
  const user = useSelector((state: RootState) => state.user.user);
  const chatList = useSelector((state: RootState) => state.chat.chats);
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
    setLoading(false);
  }, [fetchIssues]);

  if (loading) {
    return <Loader />; // Show loader until issues are fetched
  }

  console.log(`user : `, user);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="greeting w-100">
            Welcome to the dashboard,{" "}
            <strong className="fwb colored-text">
              {user &&
                user?.firstName?.charAt(0).toUpperCase() +
                  user?.firstName?.slice(1)}
            </strong>
          </h2>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <Card title={`All issues`}>
                <h3>{issuesList.length}</h3>
              </Card>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <Card title={`Completed`}>
                <h3>{issueFinished.length}</h3>
              </Card>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <Card title={`Progressing`}>
                <h3>{issueProgressing.length}</h3>
              </Card>
            </div>
            {user?.position === "admin" && (
              <div className="col-12 col-md-6 col-lg-4 mb-4">
                <Card title={`Chats`}>
                  <h3>{chatList.length}</h3>
                </Card>
              </div>
            )}
            <div className="col-12">
              <hr />
            </div>
            <div className="col-12 d-flex flex-wrap justify-content-start align-items-center ">
              <Link href="/dashboard/issues" className="btn_main me-2 mb-2">
                See all issues
              </Link>
              <Link href="/dashboard/messages" className="btn_main mb-2">
                Chat with admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
