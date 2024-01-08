import React from "react";
import "./InvestmentBanking.scss";
import Introduction from "./Introduction/Introduction";
import Description from "./Description/Description";

export default function InvestmentBanking() {
  return (
    <div className="flex flex-col items-center" style={{ marginTop: "10vh" }}>
      <Introduction />
      <Description />
    </div>
  );
}
