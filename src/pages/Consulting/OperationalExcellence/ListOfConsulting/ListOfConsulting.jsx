import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function ListOfConsulting() {
  const location = useLocation();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (location.hash) {
      const targetSection = document.querySelector(location.hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    // <section
    //   className="flex w-full flex-col items-center md:gap-8 gap-4 py-16 "
    // >
    //   <p className="text-xl font-bold text-navyblue md:text-center">
    //     Operational Excellence
    //   </p>
    //   <h1 className="w-3/5 text-center lg:w-4/5 md:w-full hover:text-bluepurple">
    //     Get access to the Right Financial direction for your growing business.
    //   </h1>
    //   <div className="flex flex-wrap md:flex-col md:items-center justify-center w-3/4 md:w-11/12 gap-x-12 md:gap-x-6">
    //     <div className="flex flex-col gap-4 w-1/5 md:w-11/12 mt-16">
    //       <Link to="/consulting/human-capital">
    //         <p className="text-navyblue text-xl font-semibold md:text-xl">
    //           Human
    //           <br /> Capital
    //         </p>
    //         <p className="text-gray2 text-base hover:text-navyblue my-2">
    //           Elevate business with comprehensive growth strategy. Navigate
    //           global markets with M&A, divestiture, brand management, and
    //           strategic fundraising, including SMEs' tailored IPO strategies.
    //         </p>
    //         <p className="flex items-center text-bluepurple consulting-learnmore">
    //           Learn More
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="31"
    //             height="30"
    //             viewBox="0 0 31 30"
    //             fill="none"
    //             className="consulting-learnmore-arrow-icon"
    //           >
    //             <path
    //               d="M6.89055 15.1749C6.89055 14.9206 6.98842 14.6767 7.16263 14.4969C7.33683 14.317 7.57311 14.216 7.81947 14.216L20.4435 14.216L19.2359 12.9791C19.0609 12.7985 18.9627 12.5536 18.9627 12.2983C18.9627 12.0429 19.0609 11.798 19.2359 11.6174C19.4108 11.4369 19.648 11.3354 19.8954 11.3354C20.1428 11.3354 20.38 11.4369 20.5549 11.6174L23.3417 14.4941C23.4706 14.6289 23.5579 14.8002 23.5926 14.9862C23.6273 15.1722 23.6079 15.3647 23.5367 15.5393C23.4671 15.7144 23.3487 15.8643 23.1966 15.9701C23.0446 16.0759 22.8655 16.1328 22.6821 16.1338L7.81947 16.1338C7.57311 16.1338 7.33683 16.0328 7.16263 15.8529C6.98842 15.6731 6.89055 15.4292 6.89055 15.1749Z"
    //               fill="#1F20AE"
    //             />
    //             <path
    //               d="M18.9654 18.0514C18.9647 17.9252 18.9881 17.8001 19.0343 17.6833C19.0806 17.5665 19.1487 17.4602 19.2348 17.3706L22.0215 14.494C22.1964 14.3134 22.4337 14.212 22.6811 14.212C22.8035 14.212 22.9248 14.2369 23.038 14.2853C23.1511 14.3336 23.254 14.4046 23.3406 14.494C23.4272 14.5834 23.4959 14.6895 23.5428 14.8063C23.5896 14.9231 23.6138 15.0483 23.6138 15.1748C23.6138 15.4301 23.5155 15.675 23.3406 15.8556L20.5538 18.7322C20.4675 18.8221 20.3647 18.8934 20.2515 18.9421C20.1383 18.9908 20.0169 19.0159 19.8943 19.0159C19.7717 19.0159 19.6503 18.9908 19.5371 18.9421C19.4239 18.8934 19.3211 18.8221 19.2348 18.7322C19.1487 18.6426 19.0806 18.5364 19.0343 18.4195C18.9881 18.3027 18.9647 18.1776 18.9654 18.0514Z"
    //               fill="#1F20AE"
    //             />
    //           </svg>
    //         </p>
    //       </Link>
    //     </div>
    //     <div className="flex flex-col gap-4 w-1/5 md:w-11/12 mt-16">
    //       <Link to="/consulting/internal-control-and-process-improvement">
    //         <p className="text-navyblue text-xl font-semibold md:text-xl">
    //           Internal Control & <br />
    //           Process Improvement
    //         </p>
    //         <p className="text-gray2 text-base hover:text-navyblue my-2">
    //           Elevate business with comprehensive growth strategy. Navigate
    //           global markets with M&A, divestiture, brand management, and
    //           strategic fundraising, including SMEs' tailored IPO strategies.
    //         </p>
    //         <p className="flex items-center text-bluepurple consulting-learnmore">
    //           Learn More
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="31"
    //             height="30"
    //             viewBox="0 0 31 30"
    //             fill="none"
    //             className="consulting-learnmore-arrow-icon"
    //           >
    //             <path
    //               d="M6.89055 15.1749C6.89055 14.9206 6.98842 14.6767 7.16263 14.4969C7.33683 14.317 7.57311 14.216 7.81947 14.216L20.4435 14.216L19.2359 12.9791C19.0609 12.7985 18.9627 12.5536 18.9627 12.2983C18.9627 12.0429 19.0609 11.798 19.2359 11.6174C19.4108 11.4369 19.648 11.3354 19.8954 11.3354C20.1428 11.3354 20.38 11.4369 20.5549 11.6174L23.3417 14.4941C23.4706 14.6289 23.5579 14.8002 23.5926 14.9862C23.6273 15.1722 23.6079 15.3647 23.5367 15.5393C23.4671 15.7144 23.3487 15.8643 23.1966 15.9701C23.0446 16.0759 22.8655 16.1328 22.6821 16.1338L7.81947 16.1338C7.57311 16.1338 7.33683 16.0328 7.16263 15.8529C6.98842 15.6731 6.89055 15.4292 6.89055 15.1749Z"
    //               fill="#1F20AE"
    //             />
    //             <path
    //               d="M18.9654 18.0514C18.9647 17.9252 18.9881 17.8001 19.0343 17.6833C19.0806 17.5665 19.1487 17.4602 19.2348 17.3706L22.0215 14.494C22.1964 14.3134 22.4337 14.212 22.6811 14.212C22.8035 14.212 22.9248 14.2369 23.038 14.2853C23.1511 14.3336 23.254 14.4046 23.3406 14.494C23.4272 14.5834 23.4959 14.6895 23.5428 14.8063C23.5896 14.9231 23.6138 15.0483 23.6138 15.1748C23.6138 15.4301 23.5155 15.675 23.3406 15.8556L20.5538 18.7322C20.4675 18.8221 20.3647 18.8934 20.2515 18.9421C20.1383 18.9908 20.0169 19.0159 19.8943 19.0159C19.7717 19.0159 19.6503 18.9908 19.5371 18.9421C19.4239 18.8934 19.3211 18.8221 19.2348 18.7322C19.1487 18.6426 19.0806 18.5364 19.0343 18.4195C18.9881 18.3027 18.9647 18.1776 18.9654 18.0514Z"
    //               fill="#1F20AE"
    //             />
    //           </svg>
    //         </p>
    //       </Link>
    //     </div>
    //     <div className="flex flex-col gap-4 w-1/5 md:w-11/12 mt-16">
    //       <Link to="/consulting/risk-management">
    //         <p className="text-navyblue text-xl font-semibold md:text-xl">
    //           Risk
    //           <br /> Management
    //         </p>
    //         <p className="text-gray2 text-base hover:text-navyblue my-2">
    //           Elevate business with comprehensive growth strategy. Navigate
    //           global markets with M&A, divestiture, brand management, and
    //           strategic fundraising, including SMEs' tailored IPO strategies.
    //         </p>
    //         <p className="flex items-center text-bluepurple consulting-learnmore">
    //           Learn More
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="31"
    //             height="30"
    //             viewBox="0 0 31 30"
    //             fill="none"
    //             className="consulting-learnmore-arrow-icon"
    //           >
    //             <path
    //               d="M6.89055 15.1749C6.89055 14.9206 6.98842 14.6767 7.16263 14.4969C7.33683 14.317 7.57311 14.216 7.81947 14.216L20.4435 14.216L19.2359 12.9791C19.0609 12.7985 18.9627 12.5536 18.9627 12.2983C18.9627 12.0429 19.0609 11.798 19.2359 11.6174C19.4108 11.4369 19.648 11.3354 19.8954 11.3354C20.1428 11.3354 20.38 11.4369 20.5549 11.6174L23.3417 14.4941C23.4706 14.6289 23.5579 14.8002 23.5926 14.9862C23.6273 15.1722 23.6079 15.3647 23.5367 15.5393C23.4671 15.7144 23.3487 15.8643 23.1966 15.9701C23.0446 16.0759 22.8655 16.1328 22.6821 16.1338L7.81947 16.1338C7.57311 16.1338 7.33683 16.0328 7.16263 15.8529C6.98842 15.6731 6.89055 15.4292 6.89055 15.1749Z"
    //               fill="#1F20AE"
    //             />
    //             <path
    //               d="M18.9654 18.0514C18.9647 17.9252 18.9881 17.8001 19.0343 17.6833C19.0806 17.5665 19.1487 17.4602 19.2348 17.3706L22.0215 14.494C22.1964 14.3134 22.4337 14.212 22.6811 14.212C22.8035 14.212 22.9248 14.2369 23.038 14.2853C23.1511 14.3336 23.254 14.4046 23.3406 14.494C23.4272 14.5834 23.4959 14.6895 23.5428 14.8063C23.5896 14.9231 23.6138 15.0483 23.6138 15.1748C23.6138 15.4301 23.5155 15.675 23.3406 15.8556L20.5538 18.7322C20.4675 18.8221 20.3647 18.8934 20.2515 18.9421C20.1383 18.9908 20.0169 19.0159 19.8943 19.0159C19.7717 19.0159 19.6503 18.9908 19.5371 18.9421C19.4239 18.8934 19.3211 18.8221 19.2348 18.7322C19.1487 18.6426 19.0806 18.5364 19.0343 18.4195C18.9881 18.3027 18.9647 18.1776 18.9654 18.0514Z"
    //               fill="#1F20AE"
    //             />
    //           </svg>
    //         </p>
    //       </Link>
    //     </div>
    //     <div className="flex flex-col gap-4 w-1/5 md:w-11/12 mt-16">
    //       <Link to="/consulting/digital-transformation">
    //         <p className="text-navyblue text-xl font-semibold md:text-xl">
    //           Digital
    //           <br /> Transformation
    //         </p>
    //         <p className="text-gray2 text-base hover:text-navyblue my-2">
    //           Elevate business with comprehensive growth strategy. Navigate
    //           global markets with M&A, divestiture, brand management, and
    //           strategic fundraising, including SMEs' tailored IPO strategies.
    //         </p>
    //         <p className="flex items-center text-bluepurple consulting-learnmore">
    //           Learn More
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="31"
    //             height="30"
    //             viewBox="0 0 31 30"
    //             fill="none"
    //             className="consulting-learnmore-arrow-icon"
    //           >
    //             <path
    //               d="M6.89055 15.1749C6.89055 14.9206 6.98842 14.6767 7.16263 14.4969C7.33683 14.317 7.57311 14.216 7.81947 14.216L20.4435 14.216L19.2359 12.9791C19.0609 12.7985 18.9627 12.5536 18.9627 12.2983C18.9627 12.0429 19.0609 11.798 19.2359 11.6174C19.4108 11.4369 19.648 11.3354 19.8954 11.3354C20.1428 11.3354 20.38 11.4369 20.5549 11.6174L23.3417 14.4941C23.4706 14.6289 23.5579 14.8002 23.5926 14.9862C23.6273 15.1722 23.6079 15.3647 23.5367 15.5393C23.4671 15.7144 23.3487 15.8643 23.1966 15.9701C23.0446 16.0759 22.8655 16.1328 22.6821 16.1338L7.81947 16.1338C7.57311 16.1338 7.33683 16.0328 7.16263 15.8529C6.98842 15.6731 6.89055 15.4292 6.89055 15.1749Z"
    //               fill="#1F20AE"
    //             />
    //             <path
    //               d="M18.9654 18.0514C18.9647 17.9252 18.9881 17.8001 19.0343 17.6833C19.0806 17.5665 19.1487 17.4602 19.2348 17.3706L22.0215 14.494C22.1964 14.3134 22.4337 14.212 22.6811 14.212C22.8035 14.212 22.9248 14.2369 23.038 14.2853C23.1511 14.3336 23.254 14.4046 23.3406 14.494C23.4272 14.5834 23.4959 14.6895 23.5428 14.8063C23.5896 14.9231 23.6138 15.0483 23.6138 15.1748C23.6138 15.4301 23.5155 15.675 23.3406 15.8556L20.5538 18.7322C20.4675 18.8221 20.3647 18.8934 20.2515 18.9421C20.1383 18.9908 20.0169 19.0159 19.8943 19.0159C19.7717 19.0159 19.6503 18.9908 19.5371 18.9421C19.4239 18.8934 19.3211 18.8221 19.2348 18.7322C19.1487 18.6426 19.0806 18.5364 19.0343 18.4195C18.9881 18.3027 18.9647 18.1776 18.9654 18.0514Z"
    //               fill="#1F20AE"
    //             />
    //           </svg>
    //         </p>{" "}
    //       </Link>
    //     </div>
    //     <div className="flex flex-col gap-4 w-1/5 md:w-11/12 mt-16">
    //       {" "}
    //       <Link to="/consulting/sustainability-consulting-covering-ESG">
    //         <p className="text-navyblue text-xl font-semibold md:text-xl">
    //           Sustainability
    //           <br /> Consulting
    //         </p>
    //         <p className="text-gray2 text-base hover:text-navyblue my-2">
    //           Elevate business with comprehensive growth strategy. Navigate
    //           global markets with M&A, divestiture, brand management, and
    //           strategic fundraising, including SMEs' tailored IPO strategies.
    //         </p>
    //         <p className="flex items-center text-bluepurple consulting-learnmore">
    //           Learn More
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="31"
    //             height="30"
    //             viewBox="0 0 31 30"
    //             fill="none"
    //             className="consulting-learnmore-arrow-icon"
    //           >
    //             <path
    //               d="M6.89055 15.1749C6.89055 14.9206 6.98842 14.6767 7.16263 14.4969C7.33683 14.317 7.57311 14.216 7.81947 14.216L20.4435 14.216L19.2359 12.9791C19.0609 12.7985 18.9627 12.5536 18.9627 12.2983C18.9627 12.0429 19.0609 11.798 19.2359 11.6174C19.4108 11.4369 19.648 11.3354 19.8954 11.3354C20.1428 11.3354 20.38 11.4369 20.5549 11.6174L23.3417 14.4941C23.4706 14.6289 23.5579 14.8002 23.5926 14.9862C23.6273 15.1722 23.6079 15.3647 23.5367 15.5393C23.4671 15.7144 23.3487 15.8643 23.1966 15.9701C23.0446 16.0759 22.8655 16.1328 22.6821 16.1338L7.81947 16.1338C7.57311 16.1338 7.33683 16.0328 7.16263 15.8529C6.98842 15.6731 6.89055 15.4292 6.89055 15.1749Z"
    //               fill="#1F20AE"
    //             />
    //             <path
    //               d="M18.9654 18.0514C18.9647 17.9252 18.9881 17.8001 19.0343 17.6833C19.0806 17.5665 19.1487 17.4602 19.2348 17.3706L22.0215 14.494C22.1964 14.3134 22.4337 14.212 22.6811 14.212C22.8035 14.212 22.9248 14.2369 23.038 14.2853C23.1511 14.3336 23.254 14.4046 23.3406 14.494C23.4272 14.5834 23.4959 14.6895 23.5428 14.8063C23.5896 14.9231 23.6138 15.0483 23.6138 15.1748C23.6138 15.4301 23.5155 15.675 23.3406 15.8556L20.5538 18.7322C20.4675 18.8221 20.3647 18.8934 20.2515 18.9421C20.1383 18.9908 20.0169 19.0159 19.8943 19.0159C19.7717 19.0159 19.6503 18.9908 19.5371 18.9421C19.4239 18.8934 19.3211 18.8221 19.2348 18.7322C19.1487 18.6426 19.0806 18.5364 19.0343 18.4195C18.9881 18.3027 18.9647 18.1776 18.9654 18.0514Z"
    //               fill="#1F20AE"
    //             />
    //           </svg>
    //         </p>{" "}
    //       </Link>
    //     </div>
    //   </div>
    // </section>
    <section
      id="consulting-operational-list"
      style={{ backgroundColor: "#F5F5F3" }}
      className="flex justify-center w-full gap-16 md:flex-col md:items-center md:gap-8"
    >
      <img
        src="./Assets/Images/strategic/growth2.jpg"
        className="w-2/5 md:w-full object-cover"
      />
      <div className="flex flex-col w-1/2 md:w-11/12 gap-4 justify-center py-20 md:py-6">
        <h1>Operational Excellence</h1>{" "}
        <p className="text-navyblue text-xl md:text-lg font-medium">
          {" "}
          Where Expertise Enables Excellence
        </p>
        <p className="text-justify font-normal text-2xl md:text-xl text-gray2 mt-4">
          Our efforts are concentrated on optimizing and improving the
          day-to-day processes and activities within an organization. It
          involves efficiency, productivity, and effectiveness in the execution
          of business operations
        </p>
        <Link
          to={`${user.email ? "/form" : "/login"}`}
          className="w-fit hero-button"
        >
          <button
            variant="contained"
            className="bg-navyblue border-1 border-solid border-navyblue text-white rounded flex items-center px-4 py-2"
          >
            Know More
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
              />
              <path
                d="M22.9998 21.6337C22.9989 21.4809 23.0273 21.3294 23.0833 21.1879C23.1393 21.0464 23.2218 20.9177 23.326 20.8092L26.701 17.3254C26.9129 17.1067 27.2002 16.9838 27.4998 16.9838C27.6481 16.9838 27.795 17.014 27.9321 17.0726C28.0691 17.1312 28.1936 17.2171 28.2985 17.3254C28.4034 17.4336 28.4866 17.5622 28.5434 17.7036C28.6002 17.8451 28.6294 17.9967 28.6294 18.1499C28.6294 18.4591 28.5104 18.7557 28.2985 18.9744L24.9235 22.4582C24.819 22.5671 24.6945 22.6535 24.5574 22.7124C24.4203 22.7714 24.2733 22.8018 24.1248 22.8018C23.9763 22.8018 23.8292 22.7714 23.6921 22.7124C23.5551 22.6535 23.4306 22.5671 23.326 22.4582C23.2218 22.3497 23.1393 22.2211 23.0833 22.0796C23.0273 21.9381 22.9989 21.7866 22.9998 21.6337Z"
                fill="white"
              />
            </svg>
          </button>
        </Link>
        <p className="text-justify font-normal text-2xl md:text-xl text-gray2 mt-4">
          Our Coverage involves:-
        </p>
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-bluepurple font-bold text-2xl"
          />
          <p className="text-2xl font-normal md:text-xl text-gray2">
            Human Capital including Leadership Development{" "}
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-bluepurple font-bold text-2xl"
          />
          <p className="text-2xl font-normal md:text-xl text-gray2">
            Internal Controls and Process Improvement{" "}
          </p>
        </div>{" "}
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-bluepurple font-bold text-2xl"
          />
          <p className="text-2xl font-normal md:text-xl text-gray2">
            Process optimization and Supply Chain management{" "}
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-bluepurple font-bold text-2xl"
          />
          <p className="text-2xl font-normal md:text-xl text-gray2">
            Risk Management and Control{" "}
          </p>
        </div>{" "}
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-bluepurple font-bold text-2xl"
          />
          <p className="text-2xl font-normal md:text-xl text-gray2">
            Digital Transformation{" "}
          </p>
        </div>{" "}
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faCheck}
            className="text-bluepurple font-bold text-2xl"
          />
          <p className="text-2xl font-normal md:text-xl text-gray2">
            Sustainability Consulting including ESG responsibilities{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
