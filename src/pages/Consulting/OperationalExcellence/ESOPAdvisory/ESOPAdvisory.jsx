import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ESOPAdvisory() {
  return (
    <section
      id="ESOP-Advisory"
      style={{ backgroundColor: "#F5F5F3" }}
      className="w-full flex gap-16 justify-center md:flex-col md:items-center md:gap-8 md:py-8"
    >
      <img
        src="./Assets/Images/Operational/esop.jpg"
        className="w-2/5 md:w-full"
      />
      <div className="flex flex-col gap-4 w-1/2 justify-center md:w-11/12">
        <h1>ESOP Advisory</h1>
        <p className="text-justify font-normal text-2xl md:text-xl text-gray2">
          Omniscient Perspectives specializes in guiding organizations through
          the intricate process of Employee Stock Ownership Plan (ESOP)
          implementation and advisory. Our services align with your strategic
          goals, ensuring that your ESOP scheme is a powerful tool for
          organizational development and employee engagement.
          <br />
          <br /> Our ESOP Advisory is a crucial component of our comprehensive
          suite of services. We assist businesses in navigating the complexities
          of capital raising and organizational development through bespoke ESOP
          strategies, fostering a culture of ownership among employees and
          enhancing commitment and performance.
        </p>
        <div className="flex flex-col gap-6 mt-8">
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-bluepurple font-bold text-3xl"
              />
              <p className="text-navyblue text-3xl font-semibold md:text-xl ">
                Strategic ESOP Implementation
              </p>
            </div>
            <p className="text-justify font-normal text-lg md:text-base text-gray2 pl-10">
              We provide strategic guidance for the effective implementation of
              ESOPs, ensuring they align with your company's overall growth and
              employee engagement objectives.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 items-center">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-bluepurple font-bold text-3xl"
              />
              <p className="text-navyblue text-3xl font-semibold md:text-xl ">
                Comprehensive ESOP Support
              </p>
            </div>
            <p className="text-justify font-normal text-lg md:text-base text-gray2 pl-10">
              Our services encompass due diligence, training, and culture
              development, vital for successfully integrating ESOPs into your
              business strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
