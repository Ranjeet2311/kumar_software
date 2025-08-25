"use client";

import Loader from "@/components/Loader";
import Card from "@/components/Ui/card/Card";
import useFetchIssues from "@/hooks/useFetchIssues";
import { RootState } from "@/store/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Mail, Cable, Send } from "lucide-react";
import useFetchQueries from "@/hooks/useFetchQueries";
import { useTranslation } from "react-i18next";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  const user = useSelector((state: RootState) => state.user.user);
  const chatList = useSelector((state: RootState) => state.chat.chats);
  const issuesList = useSelector(
    (state: RootState) => state.issues.issuesList,
    shallowEqual
  );
  const issueProgressing = issuesList.filter(
    (issue) => issue.progress && !issue.completed,
    shallowEqual
  );
  const issueFinished = issuesList.filter(
    (issue) => issue.completed,
    shallowEqual
  );
  const fetchIssues = useFetchIssues();
  const fetchQueries = useFetchQueries();
  const queryData = useSelector((state: RootState) => state.query.queryList);

  useEffect(() => {
    fetchIssues();
    setLoading(false);
    fetchQueries();
  }, [fetchIssues, fetchQueries]);

  if (loading) {
    return <Loader />; // Show loader until issues are fetched
  }

  const data = {
    labels: [
      t("dashboard.all issues"),
      t("dashboard.completed"),
      t("dashboard.progressing"),
    ],
    datasets: [
      {
        data: [
          issuesList.length,
          issueFinished.length,
          issueProgressing.length,
        ],
        backgroundColor: ["#74b9ff", "#55efc4", "#ffeaa7"],
        borderColor: ["#74b9ff", "#55efc4", "#ffeaa7"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="greeting w-100">
            {t("dashboard.welcome")},{" "}
            <strong className="fwb colored-text">
              {user &&
                user?.firstName?.charAt(0).toUpperCase() +
                  user?.firstName?.slice(1)}
            </strong>
          </h2>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-6 pie_chart d-none d-md-block">
              <Pie
                data={data}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 col-md-6">
                  <Card customClass="p-0" title={t("dashboard.all issues")}>
                    <h3>{issuesList.length}</h3>
                  </Card>
                </div>
                <div className="col-12 col-md-6">
                  <Card customClass="p-0" title={t("dashboard.completed")}>
                    <h3>{issueFinished.length}</h3>
                  </Card>
                </div>
                <div className="col-12 col-md-6">
                  <Card customClass="p-0" title={t("dashboard.progressing")}>
                    <h3>{issueProgressing.length}</h3>
                  </Card>
                </div>
                {user?.position === "admin" && (
                  <div className="col-12 col-md-6">
                    <Card customClass="p-0" title={t("dashboard.chats")}>
                      <h3>{chatList.length}</h3>
                    </Card>
                  </div>
                )}
                {user?.position === "admin" && (
                  <div className="col-12 col-md-6">
                    <Card customClass="p-0" title={t("dashboard.queries")}>
                      <h3>{queryData.length}</h3>
                    </Card>
                  </div>
                )}
                <div className="col-12 d-flex flex-wrap justify-content-start align-items-center pb-4 mt-4">
                  <Link
                    href="/dashboard/issues"
                    className="btn_main me-2 mb-2 d-flex justify-content-center"
                  >
                    <Cable size={18} strokeWidth={2} />
                    <span className="ms-2">{t("dashboard.check issues")}</span>
                  </Link>
                  <Link
                    href="/dashboard/messages"
                    className="btn_main me-2 mb-2 d-flex justify-content-center"
                  >
                    <Send size={18} strokeWidth={2} />
                    <span className="ms-2">{t("dashboard.send message")}</span>
                  </Link>
                  {user?.position === "admin" && (
                    <Link
                      href="/dashboard/queries"
                      className="btn_main me-2 mb-2 d-flex justify-content-center"
                    >
                      <Mail size={18} strokeWidth={2} />
                      <span className="ms-2">{t("dashboard.see queries")}</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
