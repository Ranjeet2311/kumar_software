"use client";

import Footer from "@/components/footer/Footer";
import Chat from "@/components/Ui/chat/Chat";
import Issue from "@/components/Ui/issue/Issue";
import NewIssue from "@/components/Ui/forms/NewIssue";
import Profile from "@/components/Ui/profile/Profile";
import { useState } from "react";

type TabType = {
  tabText: string;
  tabType: string;
};

const tabs: TabType[] = [
  { tabText: "All issues", tabType: "issue" },
  { tabText: "Create new issue", tabType: "newIssue" },
  { tabText: "Messages", tabType: "messages" },
  { tabText: "User profile", tabType: "profile" },
];

export default function DashboardPage() {
  const [activeTab, setactiveTab] = useState("issue");
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

    if (tabType) {
      setactiveTab(tabType);
    }
    // if (tabType === "issue") {
    //   setSelectIssues(true);
    // }
  };

  return (
    <>
      <div className="container dashboard">
        <div className="row greeting">
          <div className="col-12">
            <h1 className="greeting-text text-center">
              Welcome to your dashboard
            </h1>
          </div>
        </div>
        <div className="row swap-container">
          <div className="col-12 col-md-2 dashboard-nav d-flex flex-column">
            {tabs.map((tab, i) => (
              <button
                key={tab.tabText + i}
                data-tabtype={`${tab.tabType}`}
                className="btn action-btn"
                onClick={tabSwitch}
              >
                {tab.tabText}
              </button>
            ))}
          </div>
          <div className="col-12 col-md-9">
            {activeTab === "issue" && <Issue />}
            {activeTab === "messages" && <Chat />}
            {activeTab === "newIssue" && <NewIssue />}
            {activeTab === "profile" && <Profile />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
