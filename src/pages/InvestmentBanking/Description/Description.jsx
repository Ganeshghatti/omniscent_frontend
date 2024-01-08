import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
gsap.registerPlugin(ScrollTrigger);

export default function Description() {
  const user = useSelector((state) => state.user.user);
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };
  return (
    <section
      id="investment-banking-description"
      style={{ backgroundColor: "#F5F5F3" }}
      className="w-full flex py-24 justify-center gap-16 md:flex-col md:items-center md:gap-8"
    >
      <div className="flex w-2/5 gap-8 md:w-11/12 md:gap-4 h-full">
        <img
          src="./Assets/Images/strategic/Brand2.jpg"
          className="w-2/5 mt-24 object-cover"
        />
        <div className="flex flex-col gap-4 w-3/5">
          <img
            src="./Assets/Images/strategic/Brand1.jpg"
            className="h-2/5 object-cover"
          />
          <img
            src="https://elkit.wirastudio.co/covad/wp-content/uploads/sites/26/elementor/thumbs/pleasant-friendly-indian-guy-manager-or-financial-consultant-communicates-with-colleagues-on-a-q560rt4on9kwm600ta40auge1p9t93ip1sfr1zwdi0.jpg"
            className="h-2/5 object-cover"
          />
        </div>
      </div>
      <div className="flex w-1/2 flex-col gap-8 justify-center md:w-11/12">
        <h1>Investment Banking</h1>
        <p className="text-justify font-normal text-2xl md:text-xl text-gray2">
          Under the Investment Banking services, the consultants of Omniscient
          Perspectives address the needs of the client for Capital raise,
          Mergers & Acquisitions, divestitures etc., The key activities under
          these services include
        </p>
        <Link to={`${user.email ? "/form" : "/login"}`} className="w-fit">
          <button className="bg-navyblue border-1 border-solid border-navyblue text-white rounded flex items-center px-4 py-2 hero-hover-animated-button">
            Know More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="36"
              viewBox="0 0 37 36"
              fill="none"
            >
              <path
                d="M8.37509 18.1499C8.37509 17.8419 8.49362 17.5465 8.70459 17.3288C8.91557 17.111 9.20172 16.9886 9.50009 16.9886L24.7888 16.9886L23.3263 15.4906C23.1145 15.2719 22.9955 14.9753 22.9955 14.666C22.9955 14.3568 23.1145 14.0602 23.3263 13.8415C23.5382 13.6228 23.8255 13.5 24.1251 13.5C24.4247 13.5 24.712 13.6228 24.9238 13.8415L28.2988 17.3254C28.4549 17.4887 28.5607 17.6961 28.6027 17.9214C28.6448 18.1466 28.6212 18.3797 28.5351 18.5912C28.4507 18.8033 28.3074 18.9848 28.1232 19.1129C27.939 19.2411 27.7222 19.3101 27.5001 19.3112L9.50009 19.3112C9.20172 19.3112 8.91557 19.1889 8.70459 18.9711C8.49362 18.7533 8.37509 18.4579 8.37509 18.1499Z"
                fill="white"
              />
              <path
                d="M22.9998 21.6337C22.9989 21.4809 23.0273 21.3294 23.0833 21.1879C23.1393 21.0464 23.2218 20.9177 23.326 20.8092L26.701 17.3254C26.9129 17.1067 27.2002 16.9838 27.4998 16.9838C27.6481 16.9838 27.795 17.014 27.9321 17.0726C28.0691 17.1312 28.1936 17.2171 28.2985 17.3254C28.4034 17.4336 28.4866 17.5622 28.5434 17.7036C28.6002 17.8451 28.6294 17.9967 28.6294 18.1499C28.6294 18.4591 28.5104 18.7557 28.2985 18.9744L24.9235 22.4582C24.819 22.5671 24.6945 22.6535 24.5574 22.7124C24.4203 22.7714 24.2733 22.8018 24.1248 22.8018C23.9763 22.8018 23.8292 22.7714 23.6921 22.7124C23.5551 22.6535 23.4306 22.5671 23.326 22.4582C23.2218 22.3497 23.1393 22.2211 23.0833 22.0796C23.0273 21.9381 22.9989 21.7866 22.9998 21.6337Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>

        <Accordion
          expanded={expandedPanel === "panel1-"}
          onChange={handleChange("panel1-")}
        >
          <AccordionSummary
            expandIcon={
              expandedPanel === "panel1-" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#1F20AE" />
                  <path
                    d="M11.7957 15.3517L17.4998 21.03L23.2039 15.3517"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="81"
                  height="83"
                  viewBox="0 0 81 83"
                  fill="none"
                >
                  <g filter="url(#filter0_d_378_1441)">
                    <ellipse
                      cx="40.6886"
                      cy="36.3309"
                      rx="24.2215"
                      ry="25.3309"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M37.7147 44.5874L45.574 36.3308L37.7147 28.0742"
                    stroke="#1F20AE"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <filter
                      id="filter0_d_378_1441"
                      x="0.467163"
                      y="0"
                      width="80.443"
                      height="82.6617"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="5" />
                      <feGaussianBlur stdDeviation="8" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_378_1441"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_378_1441"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              )
            }
            aria-controls="panel1-a-content"
            id="panel1-a-header"
          >
            <p className="text-2xl md:text-xl text-navyblue font-semibold">
              Advisory Services:{" "}
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray2 text-xl md:text-lg">
              Our Investment Banking consultants provide advisory services
              addressing the need for better Financial Management. We also
              assist in Mergers and acquisitions (M&A) advice, divestitures, and
              assistance for strategic partnerships are key areas of focus.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expandedPanel === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={
              expandedPanel === "panel2" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#1F20AE" />
                  <path
                    d="M11.7957 15.3517L17.4998 21.03L23.2039 15.3517"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="81"
                  height="83"
                  viewBox="0 0 81 83"
                  fill="none"
                >
                  <g filter="url(#filter0_d_378_1441)">
                    <ellipse
                      cx="40.6886"
                      cy="36.3309"
                      rx="24.2215"
                      ry="25.3309"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M37.7147 44.5874L45.574 36.3308L37.7147 28.0742"
                    stroke="#1F20AE"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <filter
                      id="filter0_d_378_1441"
                      x="0.467163"
                      y="0"
                      width="80.443"
                      height="82.6617"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="5" />
                      <feGaussianBlur stdDeviation="8" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_378_1441"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_378_1441"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              )
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <p className="text-2xl md:text-xl text-navyblue font-semibold">
              Capital Raising:{" "}
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray2 text-xl md:text-lg">
              Our efforts under Capital raising address raising capital through
              various means such as, Angel Investments, Venture Capital Funds,
              Private Equity and Initial Public Offerings for Startups, Small
              and Medium Enterprises and small NBFCs
              <br />
              We also assist in Debt Financing and Working Capital Financing
              through our Network of Banks, NBFCs and Large Financial
              Institutions as per the need of the client.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expandedPanel === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={
              expandedPanel === "panel3" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#1F20AE" />
                  <path
                    d="M11.7957 15.3517L17.4998 21.03L23.2039 15.3517"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="81"
                  height="83"
                  viewBox="0 0 81 83"
                  fill="none"
                >
                  <g filter="url(#filter0_d_378_1441)">
                    <ellipse
                      cx="40.6886"
                      cy="36.3309"
                      rx="24.2215"
                      ry="25.3309"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M37.7147 44.5874L45.574 36.3308L37.7147 28.0742"
                    stroke="#1F20AE"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <filter
                      id="filter0_d_378_1441"
                      x="0.467163"
                      y="0"
                      width="80.443"
                      height="82.6617"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="5" />
                      <feGaussianBlur stdDeviation="8" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_378_1441"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_378_1441"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              )
            }
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <p className="text-2xl md:text-xl text-navyblue font-semibold">
              Financial Modeling and Valuation:{" "}
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray2 text-xl md:text-lg">
              As part of our services for Raising Capital through Debt or
              Equity, Mergers & Acquisitions or Divestitures we acknowledge the
              need for complex Financial Models. Our Consultants enable clients
              to not only develop complex Financial Models but also enable the
              defense of these Financial Forecasts while addressing
              institutional funding, thus assisting in quick Fund raise or
              closure of deals.
              <br />
              Our team also assist clients requiring Valuation of their
              Businesses through various methods that are employed to determine
              the fair value of companies, assets, or securities, enabling
              negotiation and defense of these Valuation numbers in front of the
              potential investors. Further, for Fair value Certifications, we
              are networked with Certified Valuation professionals to address
              the regulatory compliance for Valuation.
            </p>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expandedPanel === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={
              expandedPanel === "panel4" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#1F20AE" />
                  <path
                    d="M11.7957 15.3517L17.4998 21.03L23.2039 15.3517"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="81"
                  height="83"
                  viewBox="0 0 81 83"
                  fill="none"
                >
                  <g filter="url(#filter0_d_378_1441)">
                    <ellipse
                      cx="40.6886"
                      cy="36.3309"
                      rx="24.2215"
                      ry="25.3309"
                      fill="white"
                    />
                  </g>
                  <path
                    d="M37.7147 44.5874L45.574 36.3308L37.7147 28.0742"
                    stroke="#1F20AE"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <filter
                      id="filter0_d_378_1441"
                      x="0.467163"
                      y="0"
                      width="80.443"
                      height="82.6617"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="5" />
                      <feGaussianBlur stdDeviation="8" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_378_1441"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_378_1441"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              )
            }
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <p className="text-2xl md:text-xl text-navyblue font-semibold">
              Due Diligence:{" "}
            </p>
          </AccordionSummary>
          <AccordionDetails>
            <p className="text-gray2 text-xl md:text-lg">
              One of the key objectives of Omniscient Perspectives is to ensure
              that our clients are complying with Regulatory requirements or
              Investor or Institutional capital requirements, while planning a
              Fund raiser or M&A event. As part of our services, we assist our
              clients in readiness for Due diligence addressing financial health
              checks, risks, and opportunities associated with a transaction
              involving Fund raise or M&A. This is to enable quicker closure of
              the planned transaction as well as negotiating the deal
              positively.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </section>
  );
}
