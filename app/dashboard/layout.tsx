"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar/Sidebar";
import Loader from "@/components/Loader";

type TabType = {
  name: string;
  path: string;
};

const tabs: TabType[] = [
  { name: "All issues", path: "/dashboard/issues" },
  { name: "Create new issue", path: "/dashboard/new-issue" },
  { name: "Messages", path: "/dashboard/messages" },
  { name: "User profile", path: "/dashboard/profile" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [loading, setLoading] = useState(true);

  const userData = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    // console.log(`user auth : `, userData);

    if (userData?.userId) {
      setLoading(false);
    }

    if (!userData?.userId) {
      redirect("/authentication");
    }
  }, [userData]);

  return (
    <>
      <div className="container dashboard">
        {userData && (
          <div className="dashboard-layout">
            {/* Sidebar */}
            <div
              className={`dashboard-sidebar ${
                isExpanded ? "broad_sidebar" : "narrow_sidebar"
              }`}
            >
              <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            </div>

            {/* Main Content */}
            <div className="dashboard-content">
              {loading ? (
                <div className="col-12">
                  <p className="text-center mt-5 mx-auto">
                    <Loader size="lg" />
                  </p>
                </div>
              ) : (
                children
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
