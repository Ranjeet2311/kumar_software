import { setQueries } from "@/store/slices/querySlice";
import { AppDispatch } from "@/store/store";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export default function useFetchQueries() {
  const dispatch = useDispatch<AppDispatch>();
  const fetchIssues = useCallback(async () => {
    try {
      const response = await fetch("/api/queries/getQueries", {
        method: "GET",
      });

      const result = await response.json();
      const data = result.data;

      if (response.ok) {
        console.log(`Query data :: `, data);
        dispatch(setQueries(data));
        // console.log(` useState issues array :: `, issues);
      }
    } catch (error) {
      console.error("Error in fetching issues: ", error);
    }
  }, [dispatch]);

  return fetchIssues;
}
