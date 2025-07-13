import NewIssue from "@/components/Ui/forms/NewIssue";
import React from "react";

export default function NewIssuesPage() {
  return (
    <div className="container ps-4">
      <div className="row">
        <div className="col-12">
          <h4>Create New Issue</h4>
        </div>
        <div className="col-12 col-md-8 mt-4">
          <NewIssue />
        </div>
      </div>
    </div>
  );
}
