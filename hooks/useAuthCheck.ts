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
      try {
        const response = await fetch("/api/cookie");
        const data: string = await response.json();

        if (!data) {
          dispatch(setAppUser(null));
          console.log(`No token in auth check`);
          // throw new Error("No token found");
        }

        const decoded = jwt.decode(data) as DecodedToken | null;

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

          // throw new Error("Invalid decoded user data");
          // console.log(`Regular user`);
        }
      } catch (error: unknown) {
        console.log(`error`, error);

        if (error instanceof Error) {
          if (error.message === "No token found") {
            console.error("No token found in cookie");
          } else if (error.message === "Invalid decoded user data") {
            console.log("Token decoding failed");
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
      }
    }

    checkAuth();

    const authInterval = setInterval(checkAuth, 10000);
    // console.log("useAuthCheck running");

    return () => clearInterval(authInterval);
  }, [path, user, router, dispatch]);
}
