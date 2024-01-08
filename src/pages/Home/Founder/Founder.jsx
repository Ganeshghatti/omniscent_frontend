import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const isLaptop = useMediaQuery({ query: "(min-width: 867px)" });

  useEffect(() => {
    if (isLaptop) {
      gsap.from(".founder-div", {
        x: "70px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: "#founder",
        },
      });
      gsap.from(".founder-img", {
        x: "-70px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: "#founder",
        },
      });
    } else {
      gsap.from(".founder-div", {
        y: "100px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: "#founder",
        },
      });
      gsap.from(".founder-img", {
        y: "100px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: "#founder",
        },
      });
    }
  }, [isLaptop]);

  return (
    <section
      id="founder"
      className="w-full flex md:flex-col-reverse justify-between "
    >
      {" "}
      <img
        src="./Assets/Images/About/founder.jpeg"
        className="w-1/3 md:w-full founder-img object-cover"
      />
      <div className="flex flex-col gap-8 justify-center w-2/3 md:w-full md:p-6 px-24 founder-div">
        <p className="home-founder-title">About The Founder</p>
        <p className="text-blue-2 text-2xl md:text-xl">
          Ramakrishnan Venkateswaran is the Founder Director of Omniscient
          Perspectives. He is a seasoned professional in Financial Services and
          Strategy Consulting and has an impressive track record across all
          aspects of the Lending industry. His multifaceted role extends to
          senior advisory positions for strategy and business development in a
          prominent NBFC & Fintech Company, where he also serves as a Director.
          Notably, he played a pivotal role in co-founding a Financial Services
          Distribution and Collection services company.
        </p>
        <Link to="/about" className="w-fit">
          <p className="flex text-white font-normal text-2xl md:text-xl hero-founder-readmore">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M7.87509 18.1499C7.87509 17.8419 7.99362 17.5465 8.20459 17.3288C8.41557 17.111 8.70172 16.9886 9.00009 16.9886L24.2888 16.9886L22.8263 15.4906C22.6145 15.2719 22.4955 14.9753 22.4955 14.666C22.4955 14.3568 22.6145 14.0602 22.8263 13.8415C23.0382 13.6228 23.3255 13.5 23.6251 13.5C23.9247 13.5 24.212 13.6228 24.4238 13.8415L27.7988 17.3254C27.9549 17.4887 28.0607 17.6961 28.1027 17.9214C28.1448 18.1466 28.1212 18.3797 28.0351 18.5912C27.9507 18.8033 27.8074 18.9848 27.6232 19.1129C27.439 19.2411 27.2222 19.3101 27.0001 19.3112L9.00009 19.3112C8.70172 19.3112 8.41557 19.1889 8.20459 18.9711C7.99362 18.7533 7.87509 18.4579 7.87509 18.1499Z"
                fill="white"
              />
              <path
                d="M22.4998 21.6338C22.4989 21.481 22.5273 21.3295 22.5833 21.188C22.6393 21.0465 22.7218 20.9178 22.826 20.8093L26.201 17.3254C26.4129 17.1067 26.7002 16.9839 26.9998 16.9839C27.1481 16.9839 27.295 17.014 27.4321 17.0726C27.5691 17.1312 27.6936 17.2171 27.7985 17.3254C27.9034 17.4337 27.9866 17.5622 28.0434 17.7037C28.1002 17.8452 28.1294 17.9968 28.1294 18.1499C28.1294 18.4592 28.0104 18.7558 27.7985 18.9744L24.4235 22.4583C24.319 22.5672 24.1945 22.6536 24.0574 22.7125C23.9203 22.7715 23.7733 22.8018 23.6248 22.8018C23.4763 22.8018 23.3292 22.7715 23.1921 22.7125C23.0551 22.6536 22.9306 22.5672 22.826 22.4583C22.7218 22.3498 22.6393 22.2211 22.5833 22.0796C22.5273 21.9381 22.4989 21.7866 22.4998 21.6338Z"
                fill="white"
              />
            </svg>
          </p>
        </Link>
      </div>
    </section>
  );
}
