import React, { useEffect, useState } from "react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import RouteIcon from "@mui/icons-material/Route";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PaidIcon from "@mui/icons-material/Paid";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export default function RiskManagement() {
  const [visible, setvisible] = useState(1);

  const visibilityf = (value) => {
    setvisible(value);
  };
  // useEffect(() => {
  //   gsap.from(".RiskManagement-img", {
  //     y: "100px",
  //     ease: "power4.out",
  //     opacity: "0",
  //     delay: 0.5,
  //     duration: 0.75,
  //     scrollTrigger: {
  //       trigger: "#RiskManagement",
  //     },
  //   });
  //   gsap.from(".RiskManagement-content-div", {
  //     y: "100px",
  //     ease: "power4.out",
  //     opacity: "0",
  //     delay: 1,
  //     duration: 0.75,
  //     scrollTrigger: {
  //       trigger: "#RiskManagement",
  //     },
  //   });

  // });
  return (
    <section
      id="Risk-Management"
      className="w-11/12 flex flex-col gap-8 md:gap-4 py-24"
    >
      <img
        src="https://elkit.wirastudio.co/covad/wp-content/uploads/sites/26/2023/04/business-consultant-and-financial-planning-business-financial-planning-analysis-consulting-concept--1024x682.jpg"
        className="w-full object-cover RiskManagement-img"
        style={{ height: "40vh" }}
      />
      <h1 className="md:block hidden">
        Risk
        <br /> Management
      </h1>
      <div className="w-full flex justify-between items-start gap-16 md:flex-col">
        <div className="flex flex-col gap-6 w-3/5 md:w-full RiskManagement-content-div">
          {visible == 1 && (
            <div className="flex flex-col pl-12 pr-20 py-8 gap-4 RiskManagement-div-displaydiv md:pl-4 md:pr-4">
              <p className="text-navyblue text-3xl font-semibold md:text-lg uppercase">
                1 . Services
              </p>
              <ul className="text-justify font-normal list-disc text-2xl pl-8 md:text-xl text-gray2">
                <li>
                  Comprehensive examination of governance, risk management, and
                  internal controls to ensure organizational goals are met.
                </li>
                <li>
                  Evaluation of risk exposure in achieving strategic objectives
                  and the reliability of information management.
                </li>
                <li>
                  Analysis of compliance systems, safeguarding of assets, and
                  efficiency in resource utilization.
                </li>
                <li>
                  Detailed assessment of operational consistency with
                  established goals and effective risk management processes.
                </li>
              </ul>
            </div>
          )}
          {visible == 2 && (
            <div className="flex flex-col pl-12 pr-20 py-8 gap-4 RiskManagement-div-displaydiv md:pl-4 md:pr-4">
              <p className="text-navyblue text-3xl font-semibold md:text-lg uppercase">
                2 . Approach
              </p>
              <ul className="text-justify font-normal list-disc text-2xl pl-8 md:text-xl text-gray2">
                <li>
                  Conducting an entity status exercise to evaluate system
                  readiness and encompassing all company departments.
                </li>
                <li>
                  Developing and implementing detailed SOPs aligned with
                  organizational objectives and performance standards.
                </li>
                <li>
                  Performing gap analysis with soft reporting to management and
                  initiating improvements based on SOPs.
                </li>
                <li>
                  Regular evaluations of SOPs and departmental performance to
                  manage internal resources effectively.
                </li>
              </ul>
            </div>
          )}
          {visible == 3 && (
            <div className="flex flex-col pl-12 pr-20 py-8 gap-4 RiskManagement-div-displaydiv md:pl-4 md:pr-4">
              <p className="text-navyblue text-3xl font-semibold md:text-lg uppercase">
                3 . Length of Assignment
              </p>
              <ul className="text-justify font-normal list-disc text-2xl pl-8 md:text-xl text-gray2">
                <li>
                  Engagement as a regular outsourced function, with initial SOP
                  implementation followed by frequent evaluations.
                </li>
                <li>
                  Finance and accounting evaluated every 20 days, with other
                  departments reviewed quarterly.
                </li>
                <li>
                  Reporting and personal interactions with department leads
                  post-evaluation to discuss and initiate actions.
                </li>
              </ul>
            </div>
          )}
          {visible == 4 && (
            <div className="flex flex-col pl-12 pr-20 py-8 gap-4 RiskManagement-div-displaydiv md:pl-4 md:pr-4">
              <p className="text-navyblue text-3xl font-semibold md:text-lg uppercase">
                4 . Pricing
              </p>
              <ul className="text-justify font-normal list-disc text-2xl pl-8 md:text-xl text-gray2">
                <li>
                  Initial engagement priced on a case-by-case basis, with costs
                  determined in advance plus applicable GST.
                </li>
                <li>
                  Periodic evaluations conducted on a retainership basis, with
                  monthly payments made in advance.
                </li>
                <li>
                  Separate billing for each entity, with additional costs for
                  any required outstation work.
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="w-2/5 gap-6 justify-between flex flex-wrap  md:w-full md:mt-0">
          <h1 className="md:hidden">
            Risk
            <br /> Management
          </h1>
          <div
            className="w-2/5 flex  items-center RiskManagement-div-controllerdiv px-6 py-6 gap-3 md:flex-col cursor-pointer hover:text-navyblue"
            onClick={() => visibilityf(1)}
            style={{
              borderLeft: `${
                visible === 1 ? "4px solid #1F20AE" : "4px solid gray"
              }`,
            }}
          >
            <DesignServicesIcon
              style={{
                color: visible === 1 ? "#1F20AE" : "gray",
                fontSize: "40px",
              }}
              className="hover:text-navyblue"
            />

            <div className="flex flex-col justify-center">
              <p
                className={`text-${
                  visible === 1 ? "navyblue" : "gray2"
                } text-xl font-semibold md:text-base uppercase hover:text-navyblue`}
              >
                1.Services
              </p>
            </div>
          </div>
          <div
            className="w-2/5 flex items-center RiskManagement-div-controllerdiv px-6 py-6 gap-3 md:flex-col cursor-pointer hover:text-navyblue"
            onClick={() => visibilityf(2)}
            style={{
              borderLeft: `${
                visible === 2 ? "4px solid #1F20AE" : "4px solid gray"
              }`,
            }}
          >
            <RouteIcon
              style={{
                color: visible === 2 ? "#1F20AE" : "gray",
                fontSize: "40px",
              }}
              className="hover:text-navyblue"
            />

            <div className="flex flex-col justify-center">
              <p
                className={`text-${
                  visible === 2 ? "navyblue" : "gray2"
                } text-xl font-semibold md:text-base uppercase hover:text-navyblue`}
              >
                2.Approach
              </p>
            </div>
          </div>{" "}
          <div
            className="w-2/5 flex items-center RiskManagement-div-controllerdiv px-4 py-6 gap-3 md:flex-col cursor-pointer hover:text-navyblue"
            onClick={() => visibilityf(3)}
            style={{
              borderLeft: `${
                visible === 3 ? "4px solid #1F20AE" : "4px solid gray"
              }`,
            }}
          >
            <AssignmentIcon
              style={{
                color: visible === 3 ? "#1F20AE" : "gray",
                fontSize: "40px",
              }}
              className="hover:text-navyblue"
            />

            <div className="flex flex-col justify-center">
              <p
                className={`text-${
                  visible === 3 ? "navyblue" : "gray2"
                } text-xl font-semibold md:text-base uppercase hover:text-navyblue`}
              >
                3.Assignment
              </p>
            </div>
          </div>{" "}
          <div
            className="w-2/5 flex items-center RiskManagement-div-controllerdiv px-6 py-6 gap-3 md:flex-col cursor-pointer hover:text-navyblue"
            onClick={() => visibilityf(4)}
            style={{
              borderLeft: `${
                visible === 4 ? "4px solid #1F20AE" : "4px solid gray"
              }`,
            }}
          >
            <PaidIcon
              style={{
                color: visible === 4 ? "#1F20AE" : "gray",
                fontSize: "40px",
              }}
              className="hover:text-navyblue"
            />

            <div className="flex flex-col justify-center">
              <p
                className={`text-${
                  visible === 4 ? "navyblue" : "gray2"
                } text-xl font-semibold md:text-base uppercase hover:text-navyblue`}
              >
                4.Pricing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
