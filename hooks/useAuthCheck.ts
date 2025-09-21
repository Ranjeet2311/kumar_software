// hooks/useAuthCheck.ts
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setAppUser } from "@/store/slices/userSlice";

type User = {
  email: string;
  firstName: string;
  lastName: string;
  userId: string;
  position: string;
};
interface DecodedToken {
  exp: number;
  iat: number;
  user: User;
}

export default function useAuthCheck() {
  const dispatch = useDispatch<AppDispatch>();
  const [checked, setChecked] = useState(false); // <-- NEW

  useEffect(() => {
    let isMounted = true;

    async function checkAuth() {
      try {
        const res = await fetch("/api/cookie", { cache: "no-store" });
        if (!res.ok) throw new Error(`cookie endpoint ${res.status}`);

        const { token }: { token: string | null } = await res.json();

        if (!token) {
          if (isMounted) dispatch(setAppUser(null));
          return;
        }

        const decoded = jwt.decode(token) as DecodedToken | null;
        if (
          decoded?.user &&
          (!decoded.exp || decoded.exp >= Math.floor(Date.now() / 1000))
        ) {
          if (isMounted) dispatch(setAppUser(decoded.user));
        } else {
          if (isMounted) dispatch(setAppUser(null));
        }
      } catch (err) {
        console.error("Auth check error:", err);
        if (isMounted) dispatch(setAppUser(null));
      } finally {
        if (isMounted) setChecked(true); // <-- signal we're done
      }
    }

    checkAuth();
    const interval = setInterval(checkAuth, 60000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [dispatch]); // <-- no "user" here

  return checked; // <-- expose status
}
