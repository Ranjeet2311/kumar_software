import React from "react";

const issues = [
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

export default function Issue() {
  return (
    <>
      {issues.map((issue, i) => (
        <>
          <div className="col-12 issue" key={i + issue.title}>
            <h4 className="title">
              ⚒️ {issue.title}
              <span className="createdBy ms-2">
                created by: <i className="ms-1">John Doe at 03/2/2025</i>
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
      ))}
    </>
  );
}
