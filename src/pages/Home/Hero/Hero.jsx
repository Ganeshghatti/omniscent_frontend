import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
// import { useSelector } from "react-redux";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faPhone, faGears } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  // const user = useSelector((state) => state.user.user);
  const isLaptop = useMediaQuery({ query: "(min-width: 867px)" });

  useEffect(() => {
    if (isLaptop) {
      gsap.from(".hero-heading", {
        x: "-70px",
        opacity: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: "#hero",
        },
      });
      gsap.from(".hero-subheading", {
        x: "-70px",
        opacity: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: "#hero",
        },
      });
      gsap.from(".hero-button", {
        x: "-70px",
        opacity: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: "#hero",
        },
      });
    } else {
      gsap.from(".hero-heading", {
        y: "100px",
        opacity: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: "#hero",
        },
      });
      gsap.from(".hero-subheading", {
        y: "100px",
        opacity: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: "#hero",
        },
      });
      gsap.from(".hero-button", {
        y: "100px",
        opacity: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: "#hero",
        },
      });
    }
  }, [isLaptop]);
  useEffect(() => {
    // gsap.from(".hero-heading", {
    //   x: "-70px",
    //   opacity: 0,
    //   duration: 0.75,
    //   scrollTrigger: {
    //     trigger: "#hero",
    //   },
    // });
    // gsap.from(".hero-subheading", {
    //   x: "-70px",
    //   opacity: 0,
    //   duration: 0.75,
    //   scrollTrigger: {
    //     trigger: "#hero",
    //   },
    // });
    // gsap.from(".hero-button", {
    //   x: "-70px",
    //   opacity: 0,
    //   duration: 0.75,
    //   scrollTrigger: {
    //     trigger: "#hero",
    //   },
    // });
    gsap.from(".hero-divs-subdiv", {
      y: "100px",
      ease: "power4.out",
      opacity: "0",
      stagger: 0.2,
      duration: 0.75,
      scrollTrigger: {
        trigger: "#hero",
      },
    });
  }, []);

  return (
    <section
      id="hero"
      className="w-full flex justify-left items-center h-screen lg:h-auto md:h-auto lg:mt-32 md:mt-32 lg:flex-col md:flex-col"
    >
      <div className="flex gap-4 flex-col justify-center pl-20 lg:w-full md:w-11/12 lg:items-center md:items-center lg:p-0 md:p-0 hero-content-div">
        {/* <p className="text-bluepurple font-semibold text-lg md:text-center">
          Hi, There!
        </p> */}
        <h1 className="lg:text-center md:text-center lg:w-3/4 md:w-full hero-heading">
          Navigate Business
          <br className="md:hidden lg:hidden" />Challenges with
          <br className="hidden md:block"/><span>&nbsp;</span>
          <br className="md:hidden lg:hidden" />
          Sustainable Growth
        </h1>
        <p className="text-justify text-gray text-lg font-base lg:text-center md:text-center lg:w-3/4 md:w-full hero-subheading">
          Where Visionary Guidance Enables Efficient Execution
        </p>
        <Link
          to="/form"
          className="w-fit hero-button"
        >
          <button className="rounded flex items-center px-8 py-2 navbar-pc-animation-item hero-hover-animated-button bg-navyblue border-2 border-solid border-navyblue">
            Get started
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
                className="hover:text-bluepurple"
              />
              <path
                d="M22.9998 21.6337C22.9989 21.4809 23.0273 21.3294 23.0833 21.1879C23.1393 21.0464 23.2218 20.9177 23.326 20.8092L26.701 17.3254C26.9129 17.1067 27.2002 16.9838 27.4998 16.9838C27.6481 16.9838 27.795 17.014 27.9321 17.0726C28.0691 17.1312 28.1936 17.2171 28.2985 17.3254C28.4034 17.4336 28.4866 17.5622 28.5434 17.7036C28.6002 17.8451 28.6294 17.9967 28.6294 18.1499C28.6294 18.4591 28.5104 18.7557 28.2985 18.9744L24.9235 22.4582C24.819 22.5671 24.6945 22.6535 24.5574 22.7124C24.4203 22.7714 24.2733 22.8018 24.1248 22.8018C23.9763 22.8018 23.8292 22.7714 23.6921 22.7124C23.5551 22.6535 23.4306 22.5671 23.326 22.4582C23.2218 22.3497 23.1393 22.2211 23.0833 22.0796C23.0273 21.9381 22.9989 21.7866 22.9998 21.6337Z"
                fill="white"
                className="hover:text-bluepurple"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className="flex w-full md:mt-12 lg:mt-12 items-center justify-start md:flex-col lg:flex-col md:p-0 lg:p-0 lg:w-11/12 md:w-11/12 md:items-center lg:items-center  gap-8 pl-20 hero-divs">
        <div className="bg-navyblue flex flex-col gap-3 justify-center items-start rounded lg:w-full md:w-full md:p-12 p-12 hero-divs-subdiv">
          <FontAwesomeIcon icon={faGears} className="text-white text-5xl" />
          <p className="text-white text-xl font-medium">Services</p>
          <p className="font-base text-base" style={{ color: "#ADD7F6" }}>
            Comprehensive Services for Business Growth, Efficiency, and
            Financial Expertise
          </p>
        </div>
        <div className="bg-navyblue flex flex-col gap-4 justify-center items-start rounded lg:w-full md:w-full md:p-12 p-12 hero-divs-subdiv">
          <FontAwesomeIcon icon={faCoins} className="text-white text-5xl" />
          <p className="text-white text-xl font-medium ">Fund Raising</p>
          <p className="font-base text-base" style={{ color: "#ADD7F6" }}>
            Strategically Crafting Financial Roadmaps for Long-Term Business
            Success
          </p>
        </div>
        <div className="bg-navyblue flex flex-col gap-4 justify-center items-start rounded lg:w-full md:w-full md:p-12 p-12 hero-divs-subdiv">
          <FontAwesomeIcon icon={faPhone} className="text-white text-5xl" />
          <p className="text-white text-xl font-medium ">Get in Touch</p>
          <p className="font-base text-base" style={{ color: "#ADD7F6" }}>
            Reach Out Now for Tailored Solutions and Expert Guidance Today.
          </p>
        </div>
      </div>
    </section>
  );
}
