import React, { Fragment, useState } from "react";
import { truncateText } from "@/utils/Truncate";
import { Badge } from "@chakra-ui/react";
import {
  CircleAlert,
  Wrench,
  CircleCheckBig,
  Settings2,
  Trash2,
} from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { formatTime } from "@/utils/TimeConverter";

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

  const user = useSelector((state: RootState) => state.user.user);

  // console.log(`issue user: `, user);

  function handleExpand(id: string) {
    if (expandDescription === id) {
      setExpandDescription(null);
      return;
    }
    setExpandDescription(id);
  }

  async function handleStatus(issueId: string, tag: string) {
    console.log("In handle-Progress");

    try {
      const response = await fetch("/api/issue/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ issueId: issueId, tag: tag }),
      });
      console.log(`issue update response : `, response);

      const result = await response.json();
      console.log("Issue update result:", result);
    } catch (error) {
      console.log(`error : `, error);
    }
  }

  function handleUpdate(e: React.MouseEvent<HTMLElement>) {
    console.log("In handle-Update");
  }
  function handleDelete(e: React.MouseEvent<HTMLElement>) {
    console.log("In handle-Delete");
  }

  return (
    <div className="row">
      {issuesList && issuesList.length === 0 ? (
        <p>Start creating</p>
      ) : (
        issuesList.map((issue, i) => (
          <Fragment key={issue._id}>
            <div
              key={issue._id}
              onClick={() => handleExpand(issue._id)}
              className="col-11 col-lg-6 issue"
            >
              <h4 className="title">
                <CircleAlert />
                <span className="d-block mt-2"> {issue.issue}</span>
              </h4>
              <h3 className="createdBy">
                By:
                <i className="ms-1">
                  {issue.firstName + " " + issue.lastName},{" "}
                  <span>{formatTime(issue.createdAt)}</span>
                </i>
              </h3>
              <p className="description">
                {expandDescription === issue._id
                  ? issue.description
                  : truncateText({ text: issue.description, maxLength: 60 })}
              </p>
              {(issue.progress || issue.completed) && <hr />}
              <div className="my-2">
                {issue.progress && (
                  <Badge
                    size="sm"
                    className="pill"
                    variant="solid"
                    colorPalette="accent"
                  >
                    <Wrench size={16} className="me-1" />
                    <span>In Progress</span>
                  </Badge>
                )}
                {issue.completed && (
                  <Badge
                    size="sm"
                    className="pill"
                    variant="solid"
                    colorPalette="green"
                  >
                    <CircleCheckBig size={16} className="me-1" />
                    <span>Completed</span>
                  </Badge>
                )}
              </div>

              {user && user.position === "admin" && (
                <div className="col-12 d-flex flex-wrap mt-2">
                  <div onClick={() => handleStatus(issue._id, "inProgress")}>
                    <Badge
                      size="sm"
                      className="pill"
                      variant="solid"
                      colorPalette="accent"
                    >
                      <Wrench size={16} className="me-1" />
                      <span>In Progress</span>
                    </Badge>
                  </div>
                  <div onClick={() => handleStatus(issue._id, "completed")}>
                    <Badge
                      size="sm"
                      className="pill"
                      variant="solid"
                      colorPalette="green"
                    >
                      <CircleCheckBig size={16} className="me-1" />
                      <span>Completed</span>
                    </Badge>
                  </div>
                  <button onClick={handleUpdate}>
                    <Badge
                      size="sm"
                      className="pill"
                      variant="solid"
                      colorPalette="cyan"
                    >
                      <Settings2 size={16} className="me-1" />
                      <span>Update</span>
                    </Badge>
                  </button>
                  <button onClick={handleDelete}>
                    <Badge
                      size="sm"
                      className="pill"
                      variant="solid"
                      colorPalette="pink"
                    >
                      <Trash2 size={16} className="me-1" />
                      <span>Delete</span>
                    </Badge>
                  </button>
                </div>
              )}
            </div>
          </Fragment>
        ))
      )}
    </div>
  );
}
