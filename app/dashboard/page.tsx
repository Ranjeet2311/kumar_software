import { redirect } from "next/navigation";

export default function DashboardPage() {
  redirect("/dashboard/issues"); // Redirect to the issues page
}

// "use client";

// import { useEffect, useState } from "react";

// import Issue from "@/components/Ui/issue/Issue";
// import NewIssue from "@/components/Ui/forms/NewIssue";
// import Message from "@/components/message/Message";
// import Profile from "@/components/Ui/profile/Profile";

// // import { useSearchParams } from "next/navigation";
// // import { useRouter } from "next/router"; // Import from next/router, not next/navigation

// // const tabs: TabType[] = [
// //   { tabText: "All issues", tabType: "issue" },
// //   { tabText: "Create new issue", tabType: "newIssue" },
// //   { tabText: "Messages", tabType: "messages" },
// //   { tabText: "User profile", tabType: "profile" },
// // ];

// export default function DashboardPage() {
//   const [activeTab, setActiveTab] = useState("issue");

//   // -------------------------

//   // const router = useRouter();
//   // const searchParams = useSearchParams(); // Get query parameters

//   // -----------------

//   useEffect(() => {
//     // const tabFromUrl = searchParams.get("tab");
//     // if (tabFromUrl) {
//     //   setActiveTab(tabFromUrl); // Set tab based on URL if present
//     // }
//     async function fetchToken() {
//       try {
//         const response = await fetch("/api/cookie");
//         const data: string = await response.json();

//         // console.log(`Token: `, data);

//         if (data) {
//           const decoded = jwt.decode(data) as DecodedToken | null;
//           console.log(`decoded: `, decoded);

//           if (decoded?.user) {
//             const user = decoded.user;
//             // console.log(`decoded.user: `, user);

//             setUser((prevUser) => {
//               return {
//                 ...prevUser,
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 userId: user.userId,
//                 position: user.position,
//                 email: user.email,
//               };
//             });

//             dispatch(setAppUser(user));

//             console.log(`setting User from token on page : `, user);
//           } else {
//             console.error("Invalid decoded user data");
//           }
//         } else {
//           console.error("No token value found");
//         }
//       } catch (err) {
//         setError("Failed to fetch token");
//       }
//     }

//     fetchToken();
//   }, []);

//   // const dispatch = useDispatch<AppDispatch>();
//   // const userData = useSelector((state: RootState) => state.user.user);

//   // console.log(`userData :: `, userData);

//   const tabSwitch = (event: React.MouseEvent<HTMLButtonElement>) => {
//     const tabType = event.currentTarget.dataset.tabtype;
//     console.log(`tabType :: `, tabType);

//     // if (tabType) {
//     //   setActiveTab(tabType);
//     //   router.push(`?tab=${tabType}`); // Update URL without page reload
//     // }
//   };

//   return (
//     <>
//       <div className="container dashboard">
//         <div className="row greeting">
//           <div className="col-12">
//             <h1 className="greeting-text text-center">
//               Welcome to your dashboard
//             </h1>
//           </div>
//         </div>
//         {/* <div className="row swap-container">
//           <div className="col-12 col-md-2 dashboard-nav d-flex flex-column">
//             {tabs.map((tab, i) => (
//               <button
//                 key={tab.tabText + i}
//                 data-tabtype={`${tab.tabType}`}
//                 className="btn action-btn"
//                 onClick={tabSwitch}
//               >
//                 {tab.tabText}
//               </button>
//             ))}
//           </div>
//           <div className="col-12 col-md-9">
//             {activeTab === "issue" && <Issue />}
//             {activeTab === "messages" && <Message />}
//             {activeTab === "newIssue" && <NewIssue />}
//             {activeTab === "profile" && <Profile />}
//           </div>
//         </div> */}
//       </div>
//       {/* <Footer /> */}
//     </>
//   );
// }
