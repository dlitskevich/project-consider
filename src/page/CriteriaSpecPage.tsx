import React from "react";
import { CriteriaSpecTable } from "../components/CriteriaSpecTable";
import { useFile } from "../hooks/useFile";
import "./index.scss";
import "../components/index.scss";

export const CriteriaSpecPage = () => {
  const data = useFile({ url: "data/car" });
  if (data.isLoading) {
    return <p>Loading...</p>;
  }
  return <CriteriaSpecTable data={data.data!} />;
};
