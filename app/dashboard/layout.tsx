// app/(dashboard)/layout.tsx
"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/sidebar/Sidebar";
import Loader from "@/components/Loader";
import useAuthCheck from "@/hooks/useAuthCheck";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const userData = useSelector((s: RootState) => s.user.user);
  const checked = useAuthCheck(); // <-- use it here too

  useEffect(() => {
    if (!checked) return; // wait for auth check to finish
    if (userData?.userId) {
      setLoading(false);
    } else {
      router.replace("/authentication");
    }
  }, [checked, userData, router]);

  // While checking, render nothing (or a full-page loader)
  if (!checked) {
    return (
      <div className="col-12">
        <p className="text-center mt-5 mx-auto">
          <Loader size="lg" />
        </p>
      </div>
    );
  }

  // If not authenticated, we already navigated away
  if (!userData?.userId) return null;

  return (
    <div className="container dashboard">
      <div className="dashboard-layout">
        <div
          className={`dashboard-sidebar ${isExpanded ? "broad_sidebar" : ""}`}
        >
          <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        </div>
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
    </div>
  );
}
