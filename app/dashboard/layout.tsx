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
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <div className="container dashboard">
        {/* <div className="row greeting">
          <div className="col-12">
            <h1 className="greeting-text text-center">
              {userData?.firstName
                ? `Welcome ${userData?.firstName} ${userData?.position} to your
                dashboard`
                : "No user in store"}
            </h1>
          </div>
        </div> */}
        <div className="row swap-container">
          {/* Sidebar */}
          <div
            className={`dashboard-sidebar ${
              isExpanded ? "col-md-2" : "col-md-1"
            }`}
          >
            <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          </div>

          {/* Main Content */}
          <div
            className={`dashboard-content ${
              isExpanded ? "col-md-10" : "col-md-11"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
