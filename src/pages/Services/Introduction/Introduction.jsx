import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export default function Introduction() {
  const isLaptop = useMediaQuery({ query: "(min-width: 867px)" });

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
      gsap.from(".nbfc-sec1-p", {
        x: "-70px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".nbfc-sec1",
        },
      });
      gsap.from(".nbfc-sec1-img", {
        x: "70px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".nbfc-sec1",
        },
      });
    } else {
      gsap.from(".nbfc-sec1-p", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".nbfc-sec1",
        },
      });
      gsap.from(".nbfc-sec1-img", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".nbfc-sec1",
        },
      });
    }
  }, [isLaptop]);
  return (
    <>
      <div className="page-header flex items-center justify-center gap-4 flex-col w-full">
        <p className="text-white page-header-heading text-5xl md:text-3xl font-bold text-center">
          NBFC Consulting
        </p>
        <p className="text-white page-heading-subheading text-lg text-center">
          Expert financial services tailored for NBFCs and Fintechs, emphasizing
          innovation and compliance.{" "}
        </p>
      </div>
      <section
        className="flex w-11/12 md:flex-col justify-around items-center md:gap-8 nbfc-sec1"
      >
        <div className="w-1/2 md:w-full flex flex-col gap-4 nbfc-sec1-p">
          <h1>Introduction</h1>
          <p className="text-justify font-normal text-2xl md:text-xl text-gray2">
            In this consulting engagement, our team will work closely with your
            credit company to develop a comprehensive and customized
            underwriting policy. The underwriting policy serves as a foundation
            for your credit risk assessment process, outlining the guidelines,
            criteria, and procedures to evaluate credit applications. By
            leveraging our expertise in underwriting practices, risk management,
            and industry best practices, we will help you establish a robust and
            effective underwriting policy that aligns with your business
            objectives and risk appetite.
          </p>
        </div>
        <div className="flex justify-center items-center w-1/2 md:w-full nbfc-sec1-img">
          <img
            src="./Assets\Images\nbfc\nbfcintro.png"
            className="w-3/4 md:w-full"
          />
        </div>
      </section>
    </>
  );
}
