import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function GrowthFacilitation() {
  return (
    <section
      id="Growth-Facilitation"
      style={{ backgroundColor: "#F5F5F3" }}
      className="flex justify-center w-full gap-16 md:flex-col md:items-center md:gap-8"
    >
      <img
        src="./Assets/Images/strategic/growth1.jpg"
        className="w-1/3 md:w-full object-cover"
      />
      <div className="flex flex-col w-2/5 md:w-11/12 gap-4 justify-center py-20 md:py-6">
        <h1>Growth Facilitation</h1>
        <p className="text-justify font-normal text-2xl md:text-xl text-gray2">
          Omniscient Perspectives' Growth Facilitation service is designed to
          help businesses define and execute a clear path towards long-term
          growth and success. This service involves creating a detailed growth
          plan up to FY 2028-29, focusing on business process optimization,
          standardization, and strategic private investment readiness.
          <br />
          <br /> Our approach ensures that businesses are well-prepared for
          scaling up, managing risks effectively, and achieving their strategic
          objectives.
        </p>
        <div className="flex gap-4 items-center mt-4">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-bluepurple font-bold text-2xl"
          />
          <p className="text-2xl font-normal md:text-xl text-gray2">
            Creating growth plans for sustainable business expansion.
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-bluepurple font-bold text-2xl"
          />
          <p className="text-2xl font-normal md:text-xl text-gray2">
            Enhancing risk management and controls for stable growth.
          </p>
        </div>
      </div>
    </section>
  );
}
