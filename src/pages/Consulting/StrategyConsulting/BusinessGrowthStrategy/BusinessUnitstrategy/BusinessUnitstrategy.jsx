import React from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

export default function BusinessUnitstrategy() {
  return (
    <section
      id="Business-Unit-strategy-and-Planning"
      className="w-full flex flex-col justify-center py-24 gap-4 items-center"
    >
      <p className="Business-Unit-strategy-and-Planning-title text-center md:text-left md:w-11/12">
        Business Unit Strategy
        <br className="md:hidden" /> & Planning
      </p>
      <p className="text-white font-normal text-xl md:text-lg w-3/4 md:w-11/12 text-center md:text-left">
        Omniscient Perspectives' Business Unit Strategy and Planning service is
        designed to align each business unit's strategies with the company's
        overarching goals
      </p>
      <div className="w-4/5 flex md:flex-col md:w-11/12 items-center justify-center gap-8 lg:gap-0 md:gap-14 lg:flex-wrap lg:w-11/12 m-auto mt-16">
        <div className="flex flex-col w-1/4 gap-4 md:w-full p-2 lg:w-1/2 md:items-center">
          <div className="flex items-center justify-center p-3 bg-white w-fit rounded-full">
            <LightbulbIcon className=" text-bluepurple text-2xl md:text-xl" />
          </div>
          <p className="text-white font-semibold text-2xl md:text-xl md:text-center">
            Strategic Review and Optimization
          </p>
          <p className="text-white text-lg md:text-base font-normal md:text-center">
            Comprehensive review and optimization of existing business and
            market strategies
          </p>
        </div>
        <div className="w-0.5 h-72 block bg-white md:hidden lg:hidden" />
        <div className="flex flex-col w-1/4 gap-4 md:w-full p-2 lg:w-1/2 md:items-center">
          <div className="flex items-center justify-center p-3 bg-white w-fit rounded-full">
            <PendingActionsIcon className="text-bluepurple text-2xl md:text-xl" />
          </div>
          <p className="text-white font-semibold text-2xl md:text-xl md:text-center">
            Efficiency and Productivity Enhancement
          </p>
          <p className="text-white text-lg md:text-base font-normal md:text-center">
            Gap analysis and process improvements to boost efficiency and
            productivity.
          </p>
        </div>
        <div className="w-0.5 h-72 block bg-white md:hidden lg:hidden" />
        <div className="flex flex-col w-1/4 gap-4 md:w-full p-2 lg:w-1/2  md:items-center">
          <div className="flex items-center justify-center p-3 bg-white w-fit rounded-full">
            <AutoGraphIcon className=" text-bluepurple text-2xl md:text-xl" />
          </div>
          <p className="text-white font-semibold text-2xl md:text-xl md:text-center">
            Competitive Benchmarking
          </p>
          <p className="text-white text-lg md:text-base font-normal md:text-center">
            Continuous benchmarking against industry standards to maintain
            competitive edge.
          </p>
        </div>
        <div className="w-0.5 h-72 block bg-white md:hidden lg:hidden" />
        <div className="flex flex-col w-1/4 gap-4 md:w-full p-2 lg:w-1/2  md:items-center">
          <div className="flex items-center justify-center p-3 bg-white w-fit rounded-full">
            <IntegrationInstructionsIcon className="text-bluepurple text-2xl md:text-xl" />
          </div>
          <p className="text-white font-semibold text-2xl md:text-xl md:text-center">
            Cross-Departmental Integration
          </p>
          <p className="text-white text-lg md:text-base font-normal md:text-center">
            Enhancing inter-departmental and inter-company process integration
            for overall organizational effectiveness.
          </p>
        </div>
      </div>
    </section>
  );
}
