import React from "react";
import StrategicConsulting from "./StrategyConsulting/StrategicConsulting";
import OperationalExcellence from "./OperationalExcellence/OperationalExcellence";
import Introduction from "./Introduction/Introduction";
import "./Consulting.scss"

export default function Consulting() {
  return (
    <div className="flex flex-col items-center" style={{marginTop:"10vh"}}>
      <Introduction />
      <StrategicConsulting />
      <OperationalExcellence />
    </div>
  );
}
