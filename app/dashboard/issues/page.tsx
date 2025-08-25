"use client";

import React, { useEffect } from "react";
import Loader from "@/components/Loader";
import Issue from "@/components/Ui/issue/Issue";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useSelector } from "react-redux";
import useFetchIssues from "@/hooks/useFetchIssues";
import { useTranslation } from "react-i18next";

export default function IssuesPage() {
  const issuesList = useSelector((state: RootState) => state.issues.issuesList);
  const user = useSelector((state: RootState) => state.user.user);

  const { t } = useTranslation();

  const fetchIssues = useFetchIssues();

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return (
    <div className="container ps-4">
      {!issuesList ? (
        <div className="text-center d-flex justify-content-center align-items-center flex-column">
          <p>Loading all issues</p>
          <Loader size="lg" />
        </div>
      ) : issuesList.length > 0 ? (
        <Issue issuesList={issuesList} />
      ) : (
        <h4 className="text-center">
          {t("No issues")}
          <br />
          {user?.position !== "admin" && (
            <Link
              className="ms-1 text-decoration-underline fw-bolder"
              href="/dashboard/add-issue"
            >
              {t("create it now")}
            </Link>
          )}
        </h4>
      )}
    </div>
  );
}
