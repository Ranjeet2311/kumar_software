import React, { useState } from "react";
import { truncateText } from "@/utils/Truncate";

interface Issues {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  issue: string;
  description: string;
  progress: boolean;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

interface IssueProps {
  issuesList: Issues[];
}

export default function Issue({ issuesList }: IssueProps) {
  const [expandDescription, setExpandDescription] = useState<string | null>(
    null
  );

  // function handleDescLenght(e: React.MouseEvent<HTMLDivElement>) {
  //   console.log(e.currentTarget);
  //   console.log(e.currentTarget.children[1]);
  //   setExpandDescription(!expandDescription);
  // }

  return (
    <div className="row">
      {issuesList && issuesList.length === 0 ? (
        <p>Start creating</p>
      ) : (
        issuesList.map((issue, i) => (
          <>
            <div
              key={issue._id}
              onMouseEnter={() => {
                setExpandDescription(issue._id);
              }}
              onMouseLeave={() => {
                setExpandDescription(null);
              }}
              className="col-11 col-lg-6 issue"
            >
              <h4 className="title">
                ⚒️ {issue.issue}
                <span className="createdBy ms-2">
                  created by:
                  <i className="ms-1">
                    {issue.firstName + " " + issue.lastName} at{" "}
                    {issue.createdAt}
                  </i>
                </span>
              </h4>
              <p className="description">
                {expandDescription === issue._id
                  ? issue.description
                  : truncateText({ text: issue.description, maxLength: 60 })}
              </p>
              <div className="col-12 d-flex mt-2">
                <div className="pill sucsess">⚙️ In Progress</div>
                <div className="pill completed">✅ Completed</div>
              </div>
              <div className="col-12 d-flex mt-3 issue-actions">
                <button className="btn">📝 Update</button>
                <button className="btn">🗑️ Delete</button>
              </div>
            </div>
          </>
        ))
      )}
    </div>
  );
}
