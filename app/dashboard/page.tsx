"use client";

import Footer from "@/components/footer/Footer";
import Chat from "@/components/Ui/chat/Chat";
import Issue from "@/components/Ui/issue/Issue";
import NewIssue from "@/components/Ui/forms/NewIssue";
import Profile from "@/components/Ui/profile/Profile";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

type TabType = {
  tabText: string;
  tabType: string;
};
type UserData = {
  firstName: string;
  lastName: string;
  userId: string;
  position: string;
};

type User = {
  email: string;
  firstName: string;
  lastName: string;
  userId: string;
  position: string;
};
interface DecodedToken {
  exp: string;
  iat: string;
  user: User;
}

const tabs: TabType[] = [
  { tabText: "All issues", tabType: "issue" },
  { tabText: "Create new issue", tabType: "newIssue" },
  { tabText: "Messages", tabType: "messages" },
  { tabText: "User profile", tabType: "profile" },
];

export default function DashboardPage() {
  const [activeTab, setactiveTab] = useState("issue");
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<UserData>({
    firstName: "",
    lastName: "",
    userId: "",
    position: "",
  });

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

  console.log(`user dashboard :: `, user);

  useEffect(() => {
    async function fetchToken() {
      try {
        const response = await fetch("/api/cookie");
        const data: string = await response.json();

        // console.log(`Token: `, data);

        if (data) {
          const decoded = jwt.decode(data) as DecodedToken | null;
          console.log(`decoded: `, decoded);

          if (decoded?.user) {
            const user = decoded.user;
            // console.log(`decoded.user: `, user);

            setUser((prevUser) => {
              return {
                ...prevUser,
                firstName: user.firstName,
                lastName: user.lastName,
                userId: user.userId,
                position: user.position,
              };
            });

            console.log(`setting user: `, user);
            // console.log(`setting user position: `, user.position);
          } else {
            console.error("Invalid decoded user data");
          }
        } else {
          console.error("No token value found");
        }
      } catch (err) {
        setError("Failed to fetch token");
      }
    }

    fetchToken();
  }, []);

  return (
    <>
      <div className="container dashboard">
        <div className="row greeting">
          <div className="col-12">
            <h1 className="greeting-text text-center">
              Welcome {user.firstName} {user.position} to your dashboard
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
