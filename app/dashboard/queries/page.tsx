"use client";

import useFetchQueries from "@/hooks/useFetchQueries";
import { RootState } from "@/store/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Queriespage() {
  const queryData = useSelector((state: RootState) => state.query.queryList);

  const fetchQueries = useFetchQueries();

  useEffect(() => {
    fetchQueries();
  }, [fetchQueries]);

  return (
    <div className="container ps-4">
      <h2>Enquiry page</h2>
      <div className="mt-4">
        {queryData &&
          queryData.map((query) => {
            return (
              <div className="my-4 border p-4" key={query._id}>
                <h3>Subject: {query.subject} </h3>
                <p className="mb-1">Contact: {query.contact} </p>
                <p className="mb-1">Description: {query.description} </p>
                <p className="mb-1">firstName: {query.firstName} </p>
                <p className="mb-1">lastName: {query.lastName} </p>
                <p className="mb-1">email: {query.email} </p>
                <p>updatedAt: {query.updatedAt} </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
