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
        trigger: ".page-header",
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
      gsap.from(".fractional-cfo-sec1-p", {
        x: "-70px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".fractional-cfo-sec1",
        },
      });
      gsap.from(".fractional-cfo-sec1-img", {
        x: "70px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".fractional-cfo-sec1",
        },
      });
    } else {
      gsap.from(".fractional-cfo-sec1-p", {
        y: "100px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".fractional-cfo-sec1",
        },
      });
      gsap.from(".fractional-cfo-sec1-img", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".fractional-cfo-sec1",
        },
      });
    }
  }, [isLaptop]);
  return (
    <>
      <div className="fractional-cfo-header flex items-center justify-center gap-4 flex-col w-full page-header">
        <p className="text-white text-5xl md:text-3xl font-bold text-center page-header-heading">
          Fractional CFO Services
        </p>
        <p className="text-white text-lg text-center page-heading-subheading">
          From Complexity to Clarity
        </p>
      </div>
      <section className="flex w-11/12 md:w-11/12 md:flex-col justify-around items-center md:gap-8 fractional-cfo-sec1 py-8">
        <div className="w-1/2 md:w-full flex flex-col gap-4 md:gap-2 md:pt-4 fractional-cfo-sec1-p py-12">
          <h1>Introduction</h1>
          <p className="text-navyblue text-2xl font-semibold md:text-xl">
            Efficiency, Risk Mitigation, Performance Enhancement
          </p>
          <p className="text-justify font-normal text-2xl md:text-xl text-gray2">
            A fractional CFO is an experienced finance professional who
            brings extensive business management expertise to a company on a
            part-time or project basis. Small & Medium Businesses and Startups
            at their early stage of evolution may not have the scale or the
            ability to higher Senior and experienced professionals for this
            critical management activity.<br/><br/> Omniscient Perspectives through its
            vast network of professionals enables to hire an experienced
            professional, duly vetted after undergoing a stringent process of
            evaluation while being affordable to the client.
          </p>
        </div>
        <div className="flex justify-center items-center h-full w-2/5 md:w-full fractional-cfo-sec1-img">
          <img
            src="./Assets/Images/fractionalcfo/intro.png"
            className="object-cover  self-end"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </div>
      </section>{" "}
      <div className="fractional-cfo-sec-bg flex items-center justify-center gap-4 flex-col w-full py-16">
        <p className="text-white text-5xl md:text-3xl font-bold text-center w-3/5 md:w-11/12">
          Get access to the right financial direction for your growing business
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
