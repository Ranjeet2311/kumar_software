"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar/Sidebar";
import Loader from "@/components/Loader";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [loading, setLoading] = useState(true);

  const userData = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (userData?.userId) {
      setLoading(false);
    } else {
      redirect("/authentication");
    }
  }, [userData]);

  return (
    <div className="container dashboard">
      {userData && (
        <div className="dashboard-layout">
          {/* Sidebar */}
          <div
            className={`dashboard-sidebar ${isExpanded ? "broad_sidebar" : ""}`}
          >
            <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          </div>

          {/* Main Content */}
          <div
            className={`dashboard-content ${isExpanded ? "content-shift" : ""}`}
          >
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
  );
}
