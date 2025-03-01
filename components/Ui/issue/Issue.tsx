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
          <div className="issue row" key={i + issue.issue}>
            <div className="col-10">
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
            </div>
            <div className="col-2 d-flex mt-2 flex-column">
              <div className="pill sucsess">Proceed</div>
              <div className="pill completed">Done</div>
              <button className="pill edit">Edit</button>
              <button className="pill edit">Delete</button>
            </div>
          </div>
        ))
      )}
    </>
  );
}
