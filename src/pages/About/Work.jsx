import React, { Component } from "react";
import Slider from "react-slick";
import work1 from "./work1.jpg";
import work2 from "./work2.jpg";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import workimg from "./workimg.jpg";
import aasthy from "./logos/aasthy.webp";
import alkenist from "./logos/alkenist.png";
import billionloans from "./logos/billionloans.png";
import billiontech from "./logos/billiontech.png";
import bizlog from "./logos/bizlog.png";
import bull from "./logos/bull.png";
import concierge from "./logos/concierge.webp";
import gridsentry from "./logos/gridsentry.png";
import lesconcierges from "./logos/lesconcierges.png";
import mindescapes from "./logos/mindescapes.png";
import projectindigo from "./logos/projectindigo.webp";
import steelion from "./logos/steelion.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./About.scss";
import ourworkintro from "./ourworkintro.png"

export default function Work() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2, // Default for desktop
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 3000, settings: { slidesToShow: 5, slidesToScroll: 2 } }, // Desktop
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } }, // Tablet
      { breakpoint: 464, settings: { slidesToShow: 2, slidesToScroll: 1 } }, // Mobile
    ],
  };

  return (
    <div className="flex flex-col items-center" style={{ marginTop: "10vh" }}>
      <div className="about-work-header flex items-center justify-center gap-4 flex-col w-full page-header">
        <p className="text-white text-5xl md:text-3xl font-bold text-center page-header-heading">
          Our Work
        </p>
        <p className="text-white text-lg text-center page-heading-subheading">
          From Complexity to Clarity
        </p>
      </div>
      <section className="flex w-11/12 md:w-11/12 md:flex-col justify-around items-center md:gap-8 fractional-cfo-sec1 py-8">
        <div className="w-1/2 md:w-full flex flex-col gap-4 md:gap-2 md:pt-4 fractional-cfo-sec1-p">
          <h1>Introduction</h1>
          <p className="text-navyblue text-2xl font-semibold md:text-xl">
            Efficiency, Risk Mitigation, Performance Enhancement
          </p>
          <p className="text-justify font-normal text-2xl md:text-xl text-gray2">
            At Omniscient Perspectives, we walk the talk. Over the years
            directly or through our Partners we have executed more than 400+
            Consulting, Fractional CFO or Investment Banking assignments. We
            pride in being Industry agnostic and size is not a limiting factor
            for our clientele.
            <br />
            <br /> Our approach has always been growth oriented and we believe
            in continuity, thus cementing the relationship with our clients.
          </p>
        </div>
        <div className="flex justify-center items-center h-full w-2/5 md:w-full fractional-cfo-sec1-img">
          <img
            src={ourworkintro}
            className="object-cover self-end"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </div>
      </section>{" "}
      <section
        id="work"
        className="flex flex-col items-center w-full"
      >
        <div className="flex md:flex-col justify-center gap-12 py-20 w-11/12">
          <div className="flex flex-col gap-4 w-1/2 md:w-full">
            <p className="text-navyblue text-3xl mt-3 font-semibold md:text-2xl">
              Board and Strategy Advisory
            </p>

            <ul className="flex flex-col gap-2 text-justify font-normal text-2xl md:text-xl text-gray2">
              <li className="flex">
                <ArrowRightOutlinedIcon
                  className="text-navyblue"
                  style={{ fontSize: 35 }}
                />
                Advisor for Business Development and Strategy to a Non-Banking
                Finance Company focusing on Supply Chain Working Capital Loans
              </li>
              <li className="flex">
                <ArrowRightOutlinedIcon
                  className="text-navyblue"
                  style={{ fontSize: 35 }}
                />
                Director in a Fintech Company providing Embedded Financial
                Management technology to address value chain digitisation and
                working capital financing.
              </li>
              <li className="flex">
                <ArrowRightOutlinedIcon
                  className="text-navyblue"
                  style={{ fontSize: 35 }}
                />
                Outsourced agency for Compliance and MIS in a Non-Banking
                Finance Company.
              </li>
              <li className="flex">
                <ArrowRightOutlinedIcon
                  className="text-navyblue"
                  style={{ fontSize: 35 }}
                />
                Advisor for Strategy and Business Development in a ESG focused
                start-up providing Data gathering, Monitoring, Auditing and
                Reporting technology.
              </li>
            </ul>
          </div>
          <img src={work1} className="w-1/2 md:w-full object-cover" />
        </div>

        <div className="flex md:flex-col justify-center gap-12 pt-20 w-11/12">
          <img src={work2} className="w-1/2 md:w-full object-cover" />
          <div className="flex flex-col gap-4 w-1/2 md:w-full">
            <p className="text-navyblue text-3xl mt-3 font-semibold md:text-2xl">
              Strategy Advisory{" "}
            </p>

            <ul className="flex flex-col gap-2 text-justify font-normal text-2xl md:text-xl text-gray2">
              <li className="flex">
                <ArrowRightOutlinedIcon
                  className="text-navyblue"
                  style={{ fontSize: 35 }}
                />
                Advisor for Strategy and Legal Compliance for a Fintech focusing
                on Alternative investments in Real Estate sector.
              </li>
              <li className="flex">
                <ArrowRightOutlinedIcon
                  className="text-navyblue"
                  style={{ fontSize: 35 }}
                />
                Financial Management Advisor for a Security Tech company
                focusing on Cybersecurity for Power Sector
              </li>
              <li className="flex">
                <ArrowRightOutlinedIcon
                  className="text-navyblue"
                  style={{ fontSize: 35 }}
                />
                Capital Raising Advisor for a Infratech Company focusing on
                Pre-fabricated engineering and Design
              </li>
              <li className="flex">
                <ArrowRightOutlinedIcon
                  className="text-navyblue"
                  style={{ fontSize: 35 }}
                />
                Financial Management Advisor for a Innovation Eco-system based
                in Ooty, Nilgiris addressing Innovation as a Service (IaaS) for
                SMEs and Start-ups in collaboration with a leading Big-4
                consulting firm and a leading Private Bank. Our director
                Ramakrishnan advises the group on Financial Management and
                strategy for SMEs and participates in key workshops as a Subject
                Matter expert.
              </li>
              <li className="flex">
                <ArrowRightOutlinedIcon
                  className="text-navyblue"
                  style={{ fontSize: 35 }}
                />
                Pro-bono adviser and Mentor for IITStartups.org a start-up
                accelerator based in USA and Bangalore
              </li>
            </ul>
          </div>
        </div>

        <div
          className="w-full flex flex-col gap-12 py-24"
          style={{ backgroundColor: "#F5F5F3" }}
        >
          <h1 className="text-center">Our Clients</h1>
          <Slider {...settings}>
            <img src={projectindigo} className="about-our-work-logos" />
            <img src={billiontech} className="about-our-work-logos" />
            <img src={billionloans} className="about-our-work-logos" />
            <img src={bizlog} className="about-our-work-logos" />
            <img src={alkenist} className="about-our-work-logos" />
            <img src={bull} className="about-our-work-logos" />
            <img src={gridsentry} className="about-our-work-logos" />
            <img src={concierge} className="about-our-work-logos" />
            <img src={lesconcierges} className="about-our-work-logos" />
            <img src={steelion} className="about-our-work-logos" />
          </Slider>
        </div>

        <section
          id="about-our-work-description"
          className="w-11/12 flex flex-col gap-6 pb-12"
        >
          <img
            src={workimg}
            className="w-full object-cover"
            style={{ height: "60vh", objectPosition: "66%" }}
          />
          <p className="text-justify font-normal list-disc text-2xl md:text-xl text-gray2 w-full">
            In the past our team has delivered key assignments in Due-diligence
            work as a Principal Advisor: -
          </p>
          <p className="text-justify font-normal list-disc text-2xl md:text-xl text-gray2 w-full">
            Scope of work for CFO services :
          </p>
          <ul className="text-justify font-normal text-2xl gap-4 flex flex-col md:text-xl text-gray2 w-full">
            <li className="flex">
              <p>1.&nbsp; </p>
              <p>
                Setting up retail finance support ecosystem for a Large OEM in
                the Construction Equipment Industry.
              </p>
            </li>
            <li className="flex">
              <p>2.&nbsp; </p>
              <p>
                Financial Due-diligence and Business Plan for 3 investee
                Companies of a Leading Impact Venture Capital Fund.
              </p>
            </li>
            <li className="flex">
              <p>3.&nbsp; </p>
              <p>
                Post investment Financial Due diligence for 8 Investee Companies
                of a Leading Global Impact Venture Capital Fund, addressing
                Valuation thresholds and milestone achievements.{" "}
              </p>
            </li>
            <li className="flex">
              <p>4.&nbsp; </p>
              <p>
                Cross border M&A Due diligence addressing Business Plan,
                Accounting and advised on basic requirements of FDI for an
                Indian Company focused on the Fashion Apparel industry.
              </p>
            </li>
            <li className="flex">
              <p>5.&nbsp; </p>
              <p>
                Completed comprehensive Due diligence addressing Financial,
                Business Plan and basic legal due diligence for 2 Investment
                Target Companies for a Leading Global Impact Fund and Start-up
                Accelerator based in the USA.{" "}
              </p>
            </li>
            <li className="flex">
              <p>6. &nbsp;</p>
              <p>
                Sole advisor for M&A advisory on sell-side for a Company
                focusing on Engineering Solutions for Wastewater and Effluent
                treatment.
              </p>
            </li>
            <li className="flex">
              <p>7.&nbsp; </p>
              <p>
                Completed an M&A Due-diligence advisory covering all aspects of
                Due-diligence involving and leading the Legal, Financial and
                overall compliance due-diligence from the buy-side for a India
                based Core Investment Company focused on the fashion apparel
                industry involving the buyout of a 100% FDI Company.
              </p>
            </li>
            <li className="flex">
              <p>8.&nbsp; </p>
              <p>
                Assisted multiple Companies in their efforts towards Fund
                raising through Debt or Equity.
              </p>
            </li>
            <li className="flex">
              <p>9.&nbsp; </p>
              <p>
                Assisted multiple Companies for Business Valuation
                understanding.
              </p>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}
