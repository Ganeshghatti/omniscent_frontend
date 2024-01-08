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

const FAQSection = () => {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  return (
    <section id="nbfc-faq" className="w-11/12 flex flex-col gap-6 pb-12">
      <Accordion
        expanded={expandedPanel === "panel1"}
        onChange={handleChange("panel1")}
        className="nbfc-faq-div"
      >
        <AccordionSummary
          expandIcon={
            expandedPanel === "panel1" ? (
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
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="text-2xl md:text-xl text-navyblue font-semibold">
            Current Assessment:
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-gray2 text-xl md:text-lg">
            We will begin by conducting a thorough assessment of your current
            underwriting practices, policies, and procedures. Our team will
            review existing documents, interview key stakeholders, and analyze
            historical data to understand your credit evaluation process. This
            assessment will provide insights into the strengths and weaknesses
            of your current underwriting framework, allowing us to identify
            areas for improvement and enhancement.{" "}
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === "panel2"}
        onChange={handleChange("panel2")}
        className="nbfc-faq-div"
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
            Risk Appetite and Guidelines:
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-gray2 text-xl md:text-lg">
            We will work with your management team to define and articulate your
            credit company's risk appetite. By understanding your risk tolerance
            and strategic objectives, we will establish clear guidelines and
            thresholds for credit evaluation. These guidelines will encompass
            factors such as credit scores, debt-to-income ratios, employment
            history, collateral requirements, and any other relevant criteria
            specific to your business.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === "panel3"}
        onChange={handleChange("panel3")}
        className="nbfc-faq-div"
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
            Policy Framework:
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-gray2 text-xl md:text-lg">
            Based on the assessment and risk appetite, we will develop a
            comprehensive underwriting policy framework tailored to your credit
            company's needs. This framework will include guidelines on loan
            origination, credit analysis, risk assessment, and decision-making
            processes. It will outline the roles and responsibilities of
            underwriters, loan officers, and other key personnel involved in the
            underwriting process.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === "panel4"}
        onChange={handleChange("panel4")}
        className="nbfc-faq-div"
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
            Documentation and Record Keeping:
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-gray2 text-xl md:text-lg">
            A robust underwriting policy requires proper documentation and
            record-keeping practices. We will develop guidelines for
            documentation requirements, ensuring that all necessary documents
            are obtained and properly maintained. This will include establishing
            procedures for verifying income, employment, and other relevant
            information provided by applicants.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === "panel5"}
        onChange={handleChange("panel5")}
        className="nbfc-faq-div"
      >
        <AccordionSummary
          expandIcon={
            expandedPanel === "panel5" ? (
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
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <p className="text-2xl md:text-xl text-navyblue font-semibold">
            Compliance and Regulatory Considerations:
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-gray2 text-xl md:text-lg">
            We will incorporate compliance and regulatory considerations into
            your underwriting policy to ensure adherence to applicable laws,
            regulations, and industry standards. Our team will review relevant
            regulatory requirements and incorporate them into the policy,
            covering areas such as fair lending practices, consumer protection
            laws, and anti-money laundering measures.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === "panel6"}
        onChange={handleChange("panel6")}
        className="nbfc-faq-div"
      >
        <AccordionSummary
          expandIcon={
            expandedPanel === "panel6" ? (
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
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <p className="text-2xl md:text-xl text-navyblue font-semibold">
            Credit Decision Processes:
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-gray2 text-xl md:text-lg">
            We will help you define clear and consistent credit decision
            processes, including procedures for loan approval, denial, or
            conditional approval. This will involve establishing appropriate
            levels of authority and documentation required for decision-making
            at various stages of the underwriting process.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === "panel7"}
        onChange={handleChange("panel7")}
        className="nbfc-faq-div"
      >
        <AccordionSummary
          expandIcon={
            expandedPanel === "panel7" ? (
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
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <p className="text-2xl md:text-xl text-navyblue font-semibold">
            Monitoring and Review Mechanisms:
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-gray2 text-xl md:text-lg">
            An effective underwriting policy requires ongoing monitoring and
            periodic reviews. We will assist in developing mechanisms to monitor
            the performance of loans originated under the policy, tracking key
            metrics such as delinquency rates, charge-offs, and credit losses.
            Regular reviews will be conducted to assess the effectiveness of the
            policy and identify areas for improvement.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === "panel8"}
        onChange={handleChange("panel8")}
        className="nbfc-faq-div"
      >
        <AccordionSummary
          expandIcon={
            expandedPanel === "panel8" ? (
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
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <p className="text-2xl md:text-xl text-navyblue font-semibold">
            Training and Implementation Support:
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-gray2 text-xl md:text-lg">
            To ensure successful implementation, we will provide training
            sessions to familiarize your team with the new underwriting policy
            and guidelines. We will also provide ongoing support during the
            implementation phase, assisting with any necessary adjustments,
            clarifications, or refinements.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === "panel9"}
        onChange={handleChange("panel9")}
        className="nbfc-faq-div"
      >
        <AccordionSummary
          expandIcon={
            expandedPanel === "panel9" ? (
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
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <p className="text-2xl md:text-xl text-navyblue font-semibold">
            Documentation and Final Delivery:
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-gray2 text-xl md:text-lg">
            Upon completion, we will provide you with a comprehensive
            underwriting policy document that incorporates all the elements
            discussed above. This document will serve as a reference guide for
            your credit company's underwriting practices and will be tailored to
            meet your specific needs and requirements.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === "panel10"}
        onChange={handleChange("panel10")}
        className="nbfc-faq-div"
      >
        <AccordionSummary
          expandIcon={
            expandedPanel === "panel10" ? (
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
          aria-controls="panel10a-content"
          id="panel10a-header"
        >
          <p className="text-2xl md:text-xl text-navyblue font-semibold">
            Credit Evaluation Criteria:
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-gray2 text-xl md:text-lg">
            We will assist in defining the specific criteria and parameters that
            underwriters will use to evaluate credit applications. This includes
            establishing benchmarks for creditworthiness, debt service coverage,
            loan-to-value ratios, and other pertinent metrics. Our team will
            ensure that the credit evaluation criteria align with industry
            standards, regulatory requirements, and best practices.
          </p>
        </AccordionDetails>
      </Accordion>
    </section>
  );
};

export default FAQSection;
