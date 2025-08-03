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
import classes from "./Issue.module.scss";

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

  function handleExpand(id: string) {
    if (expandDescription === id) {
      setExpandDescription(null);
      return;
    }
    setExpandDescription(id);
  }

  async function handleStatus(issueId: string, tag: string) {
    // console.log("In handle-Progress");

    try {
      const response = await fetch("/api/issue/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ issueId: issueId, tag: tag }),
      });
      // console.log(`issue update response : `, response);

      const result = await response.json();
      // console.log("Issue update result:", result);
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
              className={`${classes.issue} `}
            >
              <h4 className={classes.title}>
                <CircleAlert size={18} />
                <span className="d-block"> {issue.issue}</span>
              </h4>
              <h3 className={classes.createdBy}>
                <i className="ms-1">
                  {issue.firstName + " " + issue.lastName},{" "}
                  <span>{formatTime(issue.createdAt)}</span>
                </i>
              </h3>
              <p className={classes.description}>
                {expandDescription === issue._id
                  ? issue.description
                  : truncateText({ text: issue.description, maxLength: 60 })}
              </p>
              {(issue.progress || issue.completed) && <hr className="my-1" />}

              {issue.progress && (
                <Badge
                  size="sm"
                  className="pill"
                  variant="solid"
                  colorPalette="orange"
                >
                  <Wrench size={12} className="me-1" />
                  <span>Progress</span>
                </Badge>
              )}
              {issue.completed && (
                <Badge
                  size="sm"
                  className="pill"
                  variant="solid"
                  colorPalette="teal"
                >
                  <CircleCheckBig size={12} className="me-1" />
                  <span>Completed</span>
                </Badge>
              )}

              {user && user.position === "admin" && (
                <div className="col-12 d-flex flex-wrap mt-2">
                  <hr className="w-100 my-1" />
                  <Badge
                    size="sm"
                    className="pill"
                    variant="solid"
                    colorPalette="orange"
                    onClick={() => handleStatus(issue._id, "inProgress")}
                  >
                    <Wrench size={12} className="me-1" />
                    <span>Progress</span>
                  </Badge>
                  <Badge
                    onClick={() => handleStatus(issue._id, "completed")}
                    size="sm"
                    className="pill"
                    variant="solid"
                    colorPalette="teal"
                  >
                    <CircleCheckBig size={12} className="me-1" />
                    <span>Completed</span>
                  </Badge>
                  <Badge
                    onClick={handleUpdate}
                    size="sm"
                    className="pill"
                    variant="solid"
                    colorPalette="blue"
                  >
                    <Settings2 size={12} className="me-1" />
                    <span>Update</span>
                  </Badge>
                  <Badge
                    onClick={handleUpdate}
                    size="sm"
                    className="pill"
                    variant="solid"
                    colorPalette="pink"
                  >
                    <Trash2 size={12} className="me-1" />
                    <span>Delete</span>
                  </Badge>
                </div>
              )}
            </div>
          </Fragment>
        ))
      )}
    </div>
  );
}
