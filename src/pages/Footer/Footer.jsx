import React, { useEffect } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MailIcon from "@mui/icons-material/Mail";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const location = useLocation();
  const isSignupOrLogin =
    location.pathname === "/signup" ||
    location.pathname === "/login" ||
    location.pathname === "/auth";
  useEffect(() => {
    gsap.from(".footer-div", {
      y: "70px",
      opacity: 0,
      duration: 0.75,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#footer",
      },
    });
  }, []);
  return isSignupOrLogin ? (
    ""
  ) : (
    <footer
      id="footer"
      className="flex md:flex-col justify-center items-start py-12 md:gap-16 md:items-center"
    >
      <div className="w-1/4 flex flex-col items-left gap-4 md:items-center md:w-full footer-div">
        <p className="text-white uppercase text-lg">Call us Today</p>
        <a
          href="tel:7411035211"
          className="text-base text-white md:text-lg font-semibold gap-2 w-fit"
        >
          <PhoneIcon style={{ color: "white" }} />
          +91 7411035211
        </a>
        <a
          href="mailto:ramakrishnan@omniscientperspectives.in"
          className="text-base flex text-white md:text-base font-semibold gap-2 text-left w-fit"
        >
          <MailIcon style={{ color: "white" }} />
          ramakrishnan
          <br />
          @omniscientperspectives.in
        </a>

        <div className="flex gap-3 ">
          <a
            href=""
            className="bg-white flex items-center justify-center"
            style={{ borderRadius: "50%", width: "40px", height: "40px" }}
          >
            <img src="./Assets/Images/Icons/linkedin.png" />
          </a>
          <a
            href=""
            className="bg-white flex items-center justify-center"
            style={{ borderRadius: "50%", width: "40px", height: "40px" }}
          >
            <img
              src="./public\Assets\Images\Icons\facebook.png"
              className="object-contain"
            />
          </a>{" "}
          <a
            href=""
            className="bg-white flex items-center justify-center"
            style={{ borderRadius: "50%", width: "40px", height: "40px" }}
          >
            <img
              src="./Assets/Images/Icons/twitter.png"
              className="object-contain"
            />
          </a>{" "}
          <a
            href=""
            className="bg-white flex items-center justify-center"
            style={{ borderRadius: "50%", width: "40px", height: "40px" }}
          >
            <img
              src="./Assets/Images/Icons/youtube.png"
              className="object-cover"
            />
          </a>
        </div>
      </div>
      <ul className="text-xl text-white md:text-xl flex flex-col w-1/5 gap-6 font-semibold md:w-full footer-div">
        <li className=" md:text-center">
          <Link to="/">Home</Link>
        </li>
        <li className=" md:text-center">
          <Link to="/about">About us</Link>
        </li>
        <li className=" md:text-center">
          <Link to="/form">Contact us</Link>
        </li>
        <li className=" md:text-center">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        {/* <div className="mt-8 flex flex-col  md:pl-6">
          <p className="text-white font-medium text-xl md:pl-4">Services</p>
          <ul className="text-base text-white flex flex-col gap-5">
            <li className="mt-4">
              <Link
                to="/services/outsource-CFO"
                className="hover:text-navyblue text-base flex items-center font-normal"
              >
                <ArrowRightOutlinedIcon className="text-navyblue" />
                <p>Outsourced CFO Services</p>
              </Link>
            </li>
            <li>
              <Link
                to="/services/fundraising"
                className="hover:text-navyblue text-base flex font-normal"
              >
                <ArrowRightOutlinedIcon className="text-navyblue" />
                <p>Fundraising through Debt and/or Equity</p>
              </Link>
            </li>
          </ul>
        </div> */}
      </ul>
      <div className="w-1/5 flex gap-4 flex-col md:pl-6  md:w-full footer-div md:items-center">
        <p className="text-white font-medium text-xl md:pl-4">Consulting</p>
        <ul className="text-base text-white flex flex-col gap-5">
          <li className="mt-4">
            <Link
              to="/consulting/#strategy-consulting"
              className="hover:text-navyblue flex items-center "
            >
              <ArrowRightOutlinedIcon className="text-navyblue" />
              <p>Strategy Consulting</p>
            </Link>
          </li>
          <li>
            <Link
              to="/consulting/#operational-excellence"
              className="hover:text-navyblue  flex"
            >
              <ArrowRightOutlinedIcon className="text-navyblue" />
              <p>Operational Excellence</p>
            </Link>
          </li>
          {/* <li>
            <Link
              to="/consulting/portfolio-evaluation"
              className="hover:text-navyblue  flex"
            >
              <ArrowRightOutlinedIcon className="text-navyblue" />
              <p>Portfolio Evaluation</p>
            </Link>
          </li>
          <li>
            <Link
              to="/consulting/brand-management"
              className="hover:text-navyblue  flex"
            >
              <ArrowRightOutlinedIcon className="text-navyblue" />
              <p>Brand Management</p>
            </Link>
          </li>
          <li>
            <Link
              to="/strategic-consulting/geographical-expansion"
              className="hover:text-navyblue  flex"
            >
              <ArrowRightOutlinedIcon className="text-navyblue" />
              <p>Geographical Expansion</p>
            </Link>
          </li>
          <li>
            <Link
              to="/strategic-consulting/mergers-and-acquisitions"
              className="hover:text-navyblue flex items-center "
            >
              <ArrowRightOutlinedIcon className="text-navyblue" />
              <p>Mergers & Acquisitions</p>
            </Link>
          </li>
          <li>
            <Link
              to="/consulting/divestiture"
              className="hover:text-navyblue  flex"
            >
              <ArrowRightOutlinedIcon className="text-navyblue" />
              <p>Divestiture</p>
            </Link>
          </li>
          <li>
            <Link
              to="/consulting/strategising-fundraise-for-growth"
              className="hover:text-navyblue  flex"
            >
              <ArrowRightOutlinedIcon className="text-navyblue" />
              <p>Strategising Fundraise for growth</p>
            </Link>
          </li>
          <li>
            <Link
              to="/consulting/business-valuation"
              className="hover:text-navyblue  flex"
            >
              <ArrowRightOutlinedIcon className="text-navyblue" />
              <p>Business Valuation</p>
            </Link>
          </li>
          <li>
            <Link
              to="/consulting/IPO-strategy-for-small-and-medium-enterprises"
              className="hover:text-navyblue  flex"
            >
              <ArrowRightOutlinedIcon className="text-navyblue" />
              <p>IPO Strategy for Small and Medium Enterprises</p>
            </Link>
          </li> */}
        </ul>
      </div>
      <div className="w-1/5 flex gap-4 flex-col  md:w-full footer-div md:items-center">
        <Link
          to="/consulting/fractional-CFO-services"
          className="hover:text-navyblue flex items-center "
        >
          <p className="text-white font-medium text-xl md:pl-4 hover:text-navyblue">
            Fractional CFO Services
          </p>
        </Link>
        <Link
          to="/consulting/investment-banking"
          className="hover:text-navyblue flex items-center "
        >
          <p className="text-white font-medium text-xl md:pl-4 hover:text-navyblue">
            Investment Banking{" "}
          </p>
        </Link>
        {/* <ul className="text-base text-white flex flex-col gap-5">
          <li className="mt-4">
            <Link
              to="/consulting/human-capital"
              className="hover:text-navyblue flex items-center "
            >
              <ArrowRightOutlinedIcon className="text-navyblue" />
              <p>Human Capital</p>
            </Link>
          </li>
          <li>
            <Link
              to="/consulting/internal-control-and-process-improvement"
              className="hover:text-navyblue  flex"
            >
              <ArrowRightOutlinedIcon className="text-navyblue" />
              <p>Internal Controls and Process Improvement</p>
            </Link>
          </li>
          <li>
            <Link
              to="/consulting/risk-management"
              className="hover:text-navyblue  flex"
            >
              <ArrowRightOutlinedIcon className="text-navyblue" />
              <p>Risk Management</p>
            </Link>
          </li>
          <li>
            <Link
              to="/consulting/digital-transformation"
              className="hover:text-navyblue  flex"
            >
              <ArrowRightOutlinedIcon className="text-navyblue" />
              <p>Digital Transformation</p>
            </Link>
          </li>
          <li>
            <Link
              to="/consulting/sustainability-consulting-covering-ESG"
              className="hover:text-navyblue  flex"
            >
              <ArrowRightOutlinedIcon className="text-navyblue" />
              <p>Sustainability Consulting covering ESG</p>
            </Link>
          </li>
        </ul> */}
      </div>
    </footer>
  );
}
