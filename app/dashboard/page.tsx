"use client";

import Footer from "@/components/footer/Footer";
import Chat from "@/components/Ui/chat/Chat";
import Issue from "@/components/Ui/issue/Issue";
import { cookies } from "next/headers";
import { useState } from "react";

export default function DashboardPage() {
  const [selectIssues, setSelectIssues] = useState(true);
  // const cookieStore = cookies(); // No need for `await` here
  // const authToken = cookieStore.get("authToken").value;

  // if (!authToken) {
  //   return (
  //     <div className="container top-padding">
  //       <h1>Unauthorized access</h1>
  //       <p>You are not authorized to access this page.</p>
  //     </div>
  //   );
  // }

  const tabSwitch = (event: React.MouseEvent<HTMLButtonElement>) => {
    const tabType = event.currentTarget.dataset.tabtype;
    console.log(`tabType :: `, tabType);

    const isChat = tabType === "chat";
    const isIssue = tabType === "issue";
    if (isChat || isIssue) {
      setSelectIssues(isIssue);
    }
    // if (tabType === "issue") {
    //   setSelectIssues(true);
    // }
  };

  return (
    <>
      <div className="container dashboard">
        <div className="row greeting">
          <div className="col-6">
            <h1 className="greeting-text text-center">
              Welcome to your dashboard
            </h1>
          </div>
          <div className="col-6">
            <div className="profile-wrap">
              <p>Name : Kumar</p>
              <p>Email : Kumar</p>
            </div>
          </div>
        </div>
        <div className="row swap-container">
          <div className="col-12 col-md-2 dashboard-nav d-flex flex-column">
            <button
              data-tabtype="issue"
              className="btn action-btn"
              onClick={tabSwitch}
            >
              All issues
            </button>
            <button
              data-tabtype="issue"
              className="btn action-btn"
              onClick={tabSwitch}
            >
              Create new issue
            </button>
            <button
              data-tabtype="chat"
              className="btn action-btn"
              onClick={tabSwitch}
            >
              Messages
            </button>
          </div>
          <div className="col-12 col-md-9">
            {selectIssues ? (
              <div className="issues-container">
                <Issue />
              </div>
            ) : (
              <div className="chat-container">
                <Chat />
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
