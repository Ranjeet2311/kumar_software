import { setIssues } from "@/store/slices/issuesSlice";
import { AppDispatch } from "@/store/store";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export default function useFetchIssues() {
  const dispatch = useDispatch<AppDispatch>();

  // Wraping fetchIssues in useCallback to ensure it remains the same function reference across renders.
  const fetchIssues = useCallback(async () => {
    try {
      const response = await fetch("/api/issue/get", {
        method: "GET",
      });

      // console.log(`response issues section : `, response);

      // console.log("Fetching isssues");
      const result = await response.json();
      const data = result.data;

      if (response.ok) {
        // console.log(`issue result data :: `, data);
        dispatch(setIssues(data));
        // console.log(` useState issues array :: `, issues);
      }
    } catch (error) {
      console.error("Error in fetching issues: ", error);
    }
  }, [dispatch]);

  return fetchIssues;
}
