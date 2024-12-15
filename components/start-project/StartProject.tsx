import React from "react";
import Button from "../Ui/button/Button";

export default function StartProject() {
  return (
    <div>
      <div className="row section-space">
        <div className="col-12 col-md-4 text-center">
          <h2>60+</h2>
          <p>Projects Finished</p>
        </div>
        <div className="col-12 col-md-4 text-center">
          <h2>25,356</h2>
          <p>Projects Finished</p>
        </div>
        <div className="col-12 col-md-4 text-center">
          <h2>95%</h2>
          <p>Happy Customers</p>
        </div>
        <div className="col-12 text-center">
          <h2>Want to start a Project With us?</h2>
          <p>
            Warrant present garrets limited cordial in inquiry to. Supported me
            sweetness behaviour shameless excellent so arranging.
          </p>
          <Button button={true}>Get Started</Button>
        </div>
      </div>
      ;
    </div>
  );
}
