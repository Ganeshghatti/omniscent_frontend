import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Description() {
  return (
    <section
      id="fractional-CFO-services-description"
      className="w-11/12 flex flex-col py-24 gap-6"
    >
      <img
        src="./Assets/Images/strategic/meeting3.jpg"
        className="w-full object-cover"
        style={{ height: "60vh", objectPosition: "center 30%" }}
      />
      <h1 className="md:text-center">Fractional CFO Services</h1>
      <p className="text-justify font-normal list-disc text-2xl md:text-xl text-gray2 w-full">
        As a regular retainership engagement we support the target segments
        covering Startups, Small and Medium Enterprises and Small Non-Banking
        Financial Companies through our dedicated Fractional CFO Services
        <br />
        <br />A fractional CFO is an experienced finance professional who brings
        extensive business management expertise to a company on a part-time or
        project basis. Small & Medium Businesses and Startups at their early
        stage of evolution may not have the scale or the ability to higher
        Senior and experienced professionals for this critical management
        activity. Omniscient Perspectives through its vast network of
        professionals enables to hire an experienced professional, duly vetted
        after undergoing a stringent process of evaluation while being
        affordable to the client.
      </p>
      <p className="text-justify font-normal list-disc text-2xl md:text-xl text-gray2 w-full">
        Scope of work for CFO services
      </p>
      <div className="flex md:flex-col md:gap-8 gap-12">
        <ul className="text-justify font-normal text-xl gap-2 flex flex-col md:text-lg text-gray2 w-2/5 md:w-full">
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-bluepurple font-bold text-2xl pr-2"
            />
            <p>Preparation and Analysis of periodical Financial Statements</p>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-bluepurple font-bold text-2xl pr-2"
            />
            <p>Assistance with Forecasting</p>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-bluepurple font-bold text-2xl pr-2"
            />
            <p>Develop and Analyse Business Plans</p>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-bluepurple font-bold text-2xl pr-2"
            />
            <p>Develop Financial Models</p>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-bluepurple font-bold text-2xl pr-2"
            />
            <p>Reporting assistance addressing</p>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-bluepurple font-bold text-2xl pr-2"
            />
            <p>Analysis of Major Expenses</p>
          </li>
        </ul>
        <ul className="text-justify font-normal text-xl gap-2 flex flex-col md:text-lg text-gray2 w-2/5 md:w-full">
          <li className="flex">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-bluepurple font-bold text-2xl pr-2"
            />
            <p>Budgeting Reports</p>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-bluepurple font-bold text-2xl pr-2"
            />
            <p>Cash Flow Reports</p>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-bluepurple font-bold text-2xl pr-2"
            />
            <p>Manage Accounts Receivable and Accounts Payable</p>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-bluepurple font-bold text-2xl pr-2"
            />
            <p>
              Prepare Presentations for Shareholders, Management, and
              Company-wide meetings.
            </p>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-bluepurple font-bold text-2xl pr-2"
            />
            <p>Analyse Business Opportunities and Supporting in Strategies</p>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-bluepurple font-bold text-2xl pr-2"
            />
            <p>Assistance in raising Funds through Debt or Equity</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
