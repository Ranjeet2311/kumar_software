"use client";

import NewIssue from "@/components/Ui/forms/NewIssue";
import React from "react";
import { useTranslation } from "react-i18next";

export default function NewIssuesPage() {
  const { t } = useTranslation();

  return (
    <div className="container ps-4">
      <div className="row">
        <div className="col-12">
          <h4>{t("create_issue")}</h4>
        </div>
        <div className="col-12 col-md-8 mt-4">
          <NewIssue />
        </div>
      </div>
    </div>
  );
}
