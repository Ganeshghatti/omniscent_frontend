import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./StrategicConsulting.scss";
import Introduction from "./Introduction/Introduction";
import ListOfConsulting from "./ListOfConsulting/ListOfConsulting";
import GeographicalExpansion from "./BusinessGrowthStrategy/GeographicalExpansion/GeographicalExpansion";
import BrandManagement from "./BusinessGrowthStrategy/BrandManagement/BrandManagement";
import GrowthFacilitation from "./BusinessGrowthStrategy/GrowthFacilitation/GrowthFacilitation";
import BusinessStrategyandPortfolioAssessment from "./BusinessGrowthStrategy/BusinessStrategyandPortfolioAssessment/BusinessStrategyandPortfolioAssessment";
import BusinessUnitstrategy from "./BusinessGrowthStrategy/BusinessUnitstrategy/BusinessUnitstrategy";

export default function StrategicConsulting() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetSection = document.querySelector(location.hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <div
      id="strategy-consulting"
      style={{ marginTop: "10vh" }}
      className="flex flex-col items-center w-full"
    >
      <ListOfConsulting />
    </div>
  );
}
