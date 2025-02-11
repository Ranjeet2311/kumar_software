"use client";

import React, { useEffect, useState } from "react";

const userIssues = [
  {
    title: "Please help me with the new design of the app",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolore nam perspiciatis consectetur dolorem hic voluptatum necessitatibus debitis consequatur fugit numquam, cupiditate minus sapiente consequuntur rem facilis quidem cumque! Nam?",
  },
  {
    title: "Add new database",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolore nam perspiciatis consectetur dolorem hic voluptatum necessitatibus debitis consequatur fugit numquam, cupiditate minus sapiente consequuntur rem facilis quidem cumque! Nam?",
  },
  {
    title: "Contact messages not received",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolore nam perspiciatis consectetur dolorem hic voluptatum necessitatibus debitis consequatur fugit numquam, cupiditate minus sapiente consequuntur rem facilis quidem cumque! Nam?",
  },
  {
    title: "Need yearly maintenance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolore nam perspiciatis consectetur dolorem hic voluptatum necessitatibus debitis consequatur fugit numquam, cupiditate minus sapiente consequuntur rem facilis quidem cumque! Nam?",
  },
];

type Issue = {
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
};

export default function Issue() {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function fetchIssues() {
      try {
        const response = await fetch("api/issue/get", {
          method: "GET",
        });

        // console.log(`response issues section : `, response);

        const result = await response.json();
        const data = result.data;

        if (response.ok) {
          // console.log(`issue result data :: `, data);
          setIssues(data);
          // console.log(` useState issues array :: `, issues);
        }

        // console.log(response?.data);
      } catch (error) {
        console.error("Error in fetching issues: ", error);
      }
    }

    fetchIssues();
  }, []);
  return (
    <>
      {issues && issues.length < 0 ? (
        <p>Start creating</p>
      ) : (
        issues.map((issue, i) => (
          <>
            <div className="col-12 issue" key={i + issue.issue}>
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
              <p className="description">{issue.description}</p>
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
    </>
  );
}
