import { redirect, useRouter } from "next/navigation";
import React, { MouseEvent } from "react";

export default function useLogout() {
  const router = useRouter();
  async function logout() {
    // console.log("Logout");

    try {
      const response = await fetch("/api/auth/logout", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        // console.log("Logout failed");
        throw new Error("Logout failed");
      }

      ["selectedTab"].forEach((key) => localStorage.removeItem(key)); //using it like this, just in case if we have more storages

      router.replace("/authentication");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }
  return logout;
}
