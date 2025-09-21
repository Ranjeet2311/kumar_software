// hooks/useLogout.ts
"use client";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAppUser } from "@/store/slices/userSlice";

export default function useLogout() {
  const router = useRouter();
  const dispatch = useDispatch();

  return async function logout() {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
        cache: "no-store",
      });
    } finally {
      dispatch(setAppUser(null)); // <-- immediate
      localStorage.removeItem("selectedTab");
      router.replace("/authentication");
    }
  };
}
