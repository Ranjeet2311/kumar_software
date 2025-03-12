"use client";

import Loader from "@/components/Loader";
import Issue from "@/components/Ui/issue/Issue";
import { setIssues } from "@/store/slices/issuesSlice";
import { AppDispatch, RootState } from "@/store/store";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function IssuesPage() {
  const issuesList = useSelector((state: RootState) => state.issues.issuesList);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    async function fetchIssues() {
      try {
        const response = await fetch("/api/issue/get", {
          method: "GET",
        });

        // console.log(`response issues section : `, response);

        const result = await response.json();
        const data = result.data;

        if (response.ok) {
          // console.log(`issue result data :: `, data);
          dispatch(setIssues(data));
          // console.log(` useState issues array :: `, issues);
        }
      } catch (error) {
        console.error("Error in fetching issues: ", error);
      }
    }

    fetchIssues();
  }, [dispatch]);

  return (
    <div>
      {issuesList && issuesList.length > 0 ? (
        <Issue issuesList={issuesList} />
      ) : (
        <div className="text-center">
          <p>
            No issues found.
            <Link className="ms-1" href="/dashboard/add-issue">
              create it now
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
