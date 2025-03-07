import { redirect, useRouter } from "next/navigation";
import React, { MouseEvent } from "react";

export default function useLogout() {
  const router = useRouter();
  async function logout(e: MouseEvent<HTMLElement>) {
    console.log("Logout");

    try {
      const response = await fetch("/api/auth/logout", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      ["selectedTab"].forEach((key) => localStorage.removeItem(key)); //using it like this, just in case if we have more storages

      console.log(`logout response : `, response);
      console.log("Logout successful");
      router.push("/auth");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }
  return logout;
}
