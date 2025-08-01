"use client";
import { useRouter } from "next/navigation";

export default function useGoBack() {
  const router = useRouter();
  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/dashboard"); // fallback route
    }
  };

  return handleGoBack;
}
