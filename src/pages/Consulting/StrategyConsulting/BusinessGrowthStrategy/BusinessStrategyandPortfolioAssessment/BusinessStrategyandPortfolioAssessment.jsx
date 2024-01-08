import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function BusinessStrategyandPortfolioAssessment() {
  return (
    <section
      id="Business-Strategy-and-Portfolio-Assessment"
      className="w-11/12 flex flex-col py-24 gap-12"
    >
      <img
        src="./Assets/Images/strategic/meeting1.jpg"
        className="w-full object-cover"
        style={{ height: "60vh", objectPosition: "center 30%" }}
      />
      <div className="flex md:flex-col justify-between gap-16">
        <div className="flex flex-col w-3/5 md:w-full gap-6">
          <h1 className="md:text-center">
            Business Strategy &<br className="md:hidden" /> Portfolio Assessment
          </h1>
          <p className="text-justify font-normal list-disc text-2xl md:text-xl text-gray2">
            Omniscient Perspectives excels in Business Strategy & Portfolio
            Assessment, ensuring your company's strategic alignment with market
            dynamics and internal efficiencies. Our approach encompasses a
            comprehensive review of your current strategies, processes, and
            performance metrics to identify areas for improvement and align them
            with your overall business objectives.
          </p>
        </div>
        <div className="w-2/5 flex gap-4 flex-col md:w-full">
          <p className="text-navyblue text-2xl font-semibold md:text-lg uppercase">
            Benefits Of Consultancy
          </p>
          <ul className="text-justify font-normal text-xl gap-2 flex flex-col md:text-lg text-gray2">
            <li className="flex">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-bluepurple font-bold text-2xl pr-2"
              />
              <p>Enhanced efficiency and productivity optimization.</p>
            </li>
            <li className="flex">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-bluepurple font-bold text-2xl pr-2"
              />
              <p>Competitive analysis for market positioning.</p>
            </li>
            <li className="flex">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-bluepurple font-bold text-2xl pr-2"
              />
              <p>Strategies for improved revenue generation.</p>
            </li>
            <li className="flex">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-bluepurple font-bold text-2xl pr-2"
              />
              <p>Comprehensive risk identification and mitigation.</p>
            </li>
            <li className="flex">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-bluepurple font-bold text-2xl pr-2"
              />
              <p>Streamlining of operational business processes.</p>
            </li>
            <li className="flex">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-bluepurple font-bold text-2xl pr-2"
              />
              <p>Robust organizational structuring for growth.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
