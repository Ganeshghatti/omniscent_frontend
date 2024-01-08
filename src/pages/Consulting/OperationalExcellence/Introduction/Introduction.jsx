import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
  const isLaptop = useMediaQuery({ query: "(min-width: 867px)" });
  const user = useSelector((state) => state.user.user);

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
  useEffect(() => {
    if (isLaptop) {
      gsap.from(".operational-sec1-p", {
        x: "-70px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".operational-sec1",
        },
      });
      gsap.from(".operational-sec1-img", {
        x: "70px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".operational-sec1",
        },
      });
    } else {
      gsap.from(".operational-sec1-p", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".operational-sec1",
        },
      });
      gsap.from(".operational-sec1-img", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".operational-sec1",
        },
      });
    }
  }, [isLaptop]);
  return (
    <>
      <div className="operational-header flex items-center justify-center gap-4 flex-col w-full page-header">
        <p className="text-white text-5xl md:text-3xl font-bold text-center page-header-heading">
          Operational Excellence
        </p>
        <p className="text-white text-lg text-center page-heading-subheading">
          Focused on strategic planning, risk management, and HR optimization
          for operational superiority.{" "}
        </p>
      </div>
      <section
        id="operational-introduction"
        className="flex w-11/12 md:w-11/12 md:flex-col justify-around items-center md:gap-8 operational-sec1"
      >
        <div className="w-1/2 md:w-full flex flex-col gap-4 md:gap-2 md:pt-4 operational-sec1-p py-12">
          <h1 className="OperationalExcellence-introduction-heading">
            Introduction
          </h1>
          <p className="text-navyblue text-2xl font-semibold md:text-xl OperationalExcellence-introduction-heading">
            Efficiency, Risk Mitigation, Performance Enhancement
          </p>
          <p className="text-justify font-normal text-2xl md:text-xl text-gray2">
            Operational Excellence is not just a goal—it's a continuous journey
            towards optimizing your business functions. Our Operational
            Excellence services focus on strategic planning, risk management,
            and human resources to ensure your organization operates at its peak
            efficiency. Collaborate with us to develop clear objectives,
            implement risk mitigation strategies, and streamline your human
            capital management.
            <br />
            <br /> Whether it's ESOP advisory or internal auditing, we provide
            the tools and expertise to foster a culture of excellence within
            your organization. Experience a new level of operational efficiency
            with our Operational Excellence solutions.
          </p>
        </div>
        <div className="flex justify-center items-center h-full w-1/2 md:w-full operational-sec1-img">
          <img
            src="./Assets/Images/Operational/intro.png"
            className="object-cover w-11/12 md:w-full self-end"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </div>
      </section>
      <div className="operational-sec-bg flex items-center justify-center gap-4 flex-col w-full py-16">
        <p className="text-white text-5xl md:text-3xl font-bold text-center w-1/2 md:w-11/12">
          Get access to the right financial direction for your growing business
        </p>
        <p className="text-white text-lg text-center font-light w-1/2 md:w-11/12">
          All the power of having a CFO on board, backed by a large team of
          professionals
        </p>
        <Link to={`${user.email ? "/form" : "/login"}`} className="w-fit mt-6">
          <button className="border-1 border-solid border-bluepurple text-navyblue rounded flex items-center px-4 py-2 bg-white button-hover-outlined">
            Get started
          </button>
        </Link>
      </div>
    </>
  );
}
