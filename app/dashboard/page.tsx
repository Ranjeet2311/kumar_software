import { cookies } from "next/headers";

export default function DashboardPage() {
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

  return (
    <div className="container top-padding">
      <h1>Welcome to your dashboard</h1>
      {/* <p>User email: {user}</p> */}
    </div>
  );
}
