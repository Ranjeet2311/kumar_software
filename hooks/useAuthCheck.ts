import React, { useEffect } from "react";
import jwt from "jsonwebtoken";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setAppUser } from "@/store/slices/userSlice";
import { redirect, usePathname, useRouter } from "next/navigation";

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

export default function useAuthCheck() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user, shallowEqual);

  const path = usePathname();
  const router = useRouter();
  // console.log(`params : `, path);

  useEffect(() => {
    async function checkAuth() {
      // if (path === "/") return; // Skip home page
      // if (user?.userId) return; // Skip if user is already authenticated

      try {
        const response = await fetch("/api/cookie");
        const data: string = await response.json();

        // console.log(`useAuthCheck found  :: `, data);

        if (!data) {
          dispatch(setAppUser(null));
          // console.log(`No token in auth check`);
          throw new Error("No token found");
        }

        const decoded = jwt.decode(data) as DecodedToken | null;

        // console.log(`useAuthCheck decoded :: `, decoded);

        if (decoded?.user) {
          const currentTime = Math.floor(Date.now() / 1000);
          // console.log(`currentTime :: `, currentTime);

          // if (decoded.exp < currentTime) {
          //   throw new Error("Token expired");
          // }
          // console.log(`setting user in auth check`);
          dispatch(setAppUser(decoded.user));
        } else {
          dispatch(setAppUser(null));
          // router.push("/auth");
          // console.log(`Setting user to null in auth check`);
          throw new Error("Invalid decoded user data");
        }

        // console.log("useAuthCheck try running");
      } catch (error: unknown) {
        // error instanceof Error: a type guard that ensures the error is actually an Error object before accessing properties like message.
        console.log(`Error in useAuthCheck ::: `, error);

        if (error instanceof Error) {
          if (error.message === "No token found") {
            console.error("No token found in cookie");
          } else if (error.message === "Invalid decoded user data") {
            console.error("Token decoding failed");
          } else {
            console.error("Error checking authentication:", error);
          }
        } else {
          console.error("An unexpected error occurred", error);
        }
        dispatch(setAppUser(null));
        // router.push("/auth");

        // if (path === "/" && path.startsWith("/services") && path !== "/auth") {
        //   console.log("Redirecting to /auth");
        //   router.push("/auth");
        // }

        console.log("useAuthCheck catch running");
      }
    }

    checkAuth();

    const authInterval = setInterval(checkAuth, 10000);
    console.log("useAuthCheck running");

    return () => clearInterval(authInterval);
  }, [path, user, router, dispatch]);
}
