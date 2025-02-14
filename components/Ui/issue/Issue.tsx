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
  return (
    <>
      {issuesList && issuesList.length < 0 ? (
        <p>Start creating</p>
      ) : (
        issuesList.map((issue, i) => (
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
