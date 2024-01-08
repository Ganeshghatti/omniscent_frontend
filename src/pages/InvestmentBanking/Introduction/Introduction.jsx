import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useMediaQuery } from "react-responsive";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Introduction() {
  useEffect(() => {
    gsap.from(".page-header", {
      y: "40px",
      opacity: 0,
      duration: 0.75,
      scrollTrigger: {
        trigger: ".investment-header",
      },
    });
    gsap.from(
      ".page-header-heading",
      {
        y: "25px",
        opacity: 0,
        delay: 1,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".page-header",
        },
      },
      "-=0.5"
    );
    gsap.from(
      ".page-heading-subheading",
      {
        y: "25px",
        opacity: 0,
        delay: 1,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".page-header-heading",
        },
      },
      "-=0.5"
    );
  }, []);
  const isLaptop = useMediaQuery({ query: "(min-width: 867px)" });
  // const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (isLaptop) {
      gsap.from(".investment-sec1-p", {
        x: "-70px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".investment-sec1",
        },
      });
      gsap.from(".investment-sec1-img", {
        x: "70px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".investment-sec1",
        },
      });
    } else {
      gsap.from(".investment-sec1-p", {
        y: "100px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".investment-sec1",
        },
      });
      gsap.from(".investment-sec1-img", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".investment-sec1",
        },
      });
    }
  }, [isLaptop]);
  return (
    <>
      <div className="investment-header flex items-center justify-center gap-4 flex-col w-full page-header">
        <p className="text-white text-5xl md:text-3xl font-bold text-center page-header-heading">
          Investment Banking Services
        </p>
        <p className="text-white text-lg text-center page-heading-subheading">
          Positioning Excellence to Unlock Value
        </p>
      </div>
      <section className="flex w-11/12 md:w-11/12 md:flex-col justify-around items-center md:gap-8 investment-sec1">
        <div className="w-1/2 md:w-full flex flex-col gap-4 md:gap-2 md:pt-4 investment-sec1-p py-12">
          <h1>Introduction</h1>
          <p className="text-navyblue text-2xl font-semibold md:text-xl">
            Expert Guidance, measurable outcomes{" "}
          </p>
          <p className="text-justify font-normal text-2xl md:text-xl text-gray2">
            Omniscient Perspectives engages with Founders and Senior Management
            teams of Start-ups, Small and Medium Enterprises and Small
            Non-Banking Financial Companies addressing sustainable Business
            Growth. One of the key challenges for every business entity is the
            continuous flow of Capital to enable growth and sustainability.{" "}
            <br />
            <br />
            Our expertise as Bankers and our understanding of business needs
            from the eyes of the Business Owner helps in Strategising Fund
            raise, enabling Investments through accredited Funding institutions
            like Banks, NBFCs for Debt and through Venture Capital, Private
            Equities, Angel Investments for Equity Capital
          </p>
        </div>
        <div className="flex justify-center items-center h-full md:w-full investment-sec1-img w-2/5">
          <img
            src="./Assets/Images/investmentbanking/intro.png"
            className="object-cover  self-end"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </div>
      </section>{" "}
      <div className="investment-sec-bg flex items-center justify-center gap-4 flex-col w-full py-16">
        <p className="text-white text-5xl md:text-3xl font-bold text-center w-3/5 md:w-11/12">
          Get Access to Accredited Angels, Angel Networks, Venture Capital
          Funds, Branks and NBFCS for all your Capital Needs{" "}
        </p>
        <Link to="/form" className="w-fit mt-6">
          <button className="border-1 border-solid border-bluepurple text-navyblue rounded flex items-center px-4 py-2 bg-white button-hover-outlined">
            Get started
          </button>
        </Link>
      </div>
    </>
  );
}
