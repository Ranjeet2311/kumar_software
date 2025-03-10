"use client";

import React, { ReactNode, useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setAppUser } from "@/store/slices/userSlice";
import Footer from "@/components/footer/Footer";
import Link from "next/link";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar/Sidebar";

type TabType = {
  name: string;
  path: string;
};
type UserData = {
  firstName: string;
  lastName: string;
  userId: string;
  position: string;
  email: string;
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
  { name: "All issues", path: "/dashboard/issues" },
  { name: "Create new issue", path: "/dashboard/new-issue" },
  { name: "Messages", path: "/dashboard/messages" },
  { name: "User profile", path: "/dashboard/profile" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [error, setError] = useState<string | null>(null);
  // const [user, setUser] = useState<UserData>({
  //   firstName: "",
  //   lastName: "",
  //   userId: "",
  //   position: "",
  //   email: "",
  // });

  // const dispatch = useDispatch<AppDispatch>();
  const userData = useSelector((state: RootState) => state.user.user);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    console.log(`user auth : `, userData);

    if (!userData?.userId) {
      redirect("/auth");
    }
  }, [userData]);

  return (
    <>
      <div className="container dashboard">
        {userData ? (
          <div className="row">
            {/* Sidebar */}
            <div
              className={`dashboard-sidebar ${
                isExpanded ? "broad_sidebar" : "narrow_sidebar"
              }`}
            >
              <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
            </div>

            {/* Main Content */}
            <div
              className={`dashboard-content ${
                isExpanded ? "narrow_content" : "broad_content"
              }`}
            >
              {children}
            </div>
          </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
      <Footer />
    </>
  );
}
