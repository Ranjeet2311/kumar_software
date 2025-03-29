"use client";

import React from "react";
import Loader from "@/components/Loader";
import Issue from "@/components/Ui/issue/Issue";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function IssuesPage() {
  const issuesList = useSelector((state: RootState) => state.issues.issuesList);
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <>
      {!issuesList ? (
        <div className="text-center d-flex justify-content-center align-items-center flex-column">
          <p>Loading all issues</p>
          <Loader size="lg" />
        </div>
      ) : issuesList.length > 0 ? (
        <Issue issuesList={issuesList} />
      ) : (
        <h4 className="text-center">
          No issues found
          <br />
          {user?.position !== "admin" && (
            <Link className="ms-1" href="/dashboard/add-issue">
              create it now
            </Link>
          )}
        </h4>
      )}
    </>
  );
}
