import React from "react";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import TerminalIcon from "@mui/icons-material/Terminal";
import BusinessIcon from "@mui/icons-material/Business";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import GroupsIcon from "@mui/icons-material/Groups";

export default function HumanResources() {
  return (
    <section
      id="Human-Resources"
      style={{ backgroundColor: "#F5F5F3" }}
      className="flex w-full justify-center gap-16 items-center md:flex-col md:py-20"
    >
      <div className="flex flex-col gap-4 w-1/2 md:w-11/12">
        <h1>Human Resources</h1>
        <p className="text-justify font-normal text-2xl md:text-xl text-gray2">
          Optimize your human capital with our human resources consulting. From
          talent acquisition to performance management and employee development,
          we provide end-to-end HR solutions.
        </p>
        <div className="flex flex-wrap justify-between md:flex-col mt-6 md:mt-0 md:gap-4">
          <div className="flex flex-col gap-4 p-5 w-1/2 md:w-full md:items-center">
            <div className="bg-navyblue rounded-full w-fit p-3">
              <CorporateFareIcon className="text-white" />
            </div> 
            <p className="text-navyblue text-2xl font-semibold md:text-lg uppercase md:text-center">
              Organizational Analysis
            </p>
            <p className="md:text-center font-normal text-lg md:text-lg text-gray2">
              Comprehensive review of organization structure, role alignment,
              and key personnel competency assessment.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-5 w-1/2 md:w-full md:items-center">
            <div className="bg-navyblue rounded-full w-fit p-3">
              <GroupsIcon className="text-white" />
            </div>
            <p className="text-navyblue text-2xl font-semibold md:text-lg uppercase md:text-center">
              Talent and Compliance
            </p>
            <p className="md:text-center font-normal text-lg md:text-lg text-gray2">
              Focused on recruitment, performance management, employee
              development, and adherence to compliance standards.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-5 w-1/2 md:w-full md:items-center">
            <div className="bg-navyblue rounded-full w-fit p-3">
              <TrendingUpIcon className="text-white" />
            </div>
            <p className="text-navyblue text-2xl font-semibold md:text-lg uppercase md:text-center">
              Marketing & Business Growth
            </p>
            <p className="md:text-center font-normal text-lg md:text-lg text-gray2">
              Enhancing business development, marketing strategies, and pipeline
              management for growth and profitability.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-5 w-1/2 md:w-full md:items-center">
            <div className="bg-navyblue rounded-full w-fit p-3">
              <TerminalIcon className="text-white" />
            </div>
            <p className="text-navyblue text-2xl font-semibold md:text-lg uppercase md:text-center">
              Operations & Tech Efficiency
            </p>
            <p className="md:text-center font-normal text-lg md:text-lg text-gray2">
              Streamlining operational processes and technology utilization for
              improved efficiency and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
      <img
        src="./Assets/Images/Operational/hr1.jpg"
        className="w-2/5 md:hidden h-full object-cover"
      />
    </section>
  );
}
