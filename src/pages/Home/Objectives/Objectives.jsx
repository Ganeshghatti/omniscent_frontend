import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);
export default function Objectives() {
  const isLaptop = useMediaQuery({ query: "(min-width: 867px)" });

  useEffect(() => {
    if (isLaptop) {
      gsap.from(".objectives-div", {
        x: "-70px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: "#objectives",
        },
      });
      gsap.from(".objectives-img", {
        x: "70px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: "#objectives",
        },
      });
    } else {
      gsap.from(".objectives-div", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: "#objectives",
        },
      });
      gsap.from(".objectives-img", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: "#objectives",
        },
      });
    }
  }, [isLaptop]);
  return (
    <section
      id="objectives"
      className="flex w-full justify-between md:flex-col-reverse md:gap-12 gap-6"
    >
      <div className="flex flex-col justify-center gap-6 w-3/5 md:w-full px-24 md:px-3 objectives-div">
        <h1>Objectives</h1>
        <ul className="list-disc flex flex-col gap-4 text-gray2 text-2xl md:text-xl font-normal pl-10">
          <li>
            <span className="text-bluepurple font-semibold">Lead in Startup and SME Consulting:</span> Establish as the go-to
            consulting leader for startups and SMEs globally.
          </li>
          <li>
            <span className="text-bluepurple font-semibold">Enable Entrepreneurial Success:</span> Empower young entrepreneurs with
            engaged partnerships and insightful advisory.
          </li>
          <li>
            <span className="text-bluepurple font-semibold">Deliver Quality and Sustainable Solutions:</span> Uphold the highest
            standards in quality, sustainability, and efficiency in consulting
            services.
          </li>
          <li>
            <span className="text-bluepurple font-semibold">Foster Compliance and Transparency:</span> Ensure strict adherence to
            compliance and maintain transparency in all business practices.
          </li>
          <li>
            <span className="text-bluepurple font-semibold">Drive Result-Oriented Consulting:</span> Commit to delivering tangible and
            impactful results for all clients.
          </li>
        </ul>
      </div>
      <img
        src="./Assets/Images/Home/Objectives/profile.png"
        className="w-2/5 md:w-full objectives-img object-cover"
      />
    </section>
  );
}
