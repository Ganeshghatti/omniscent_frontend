import React from "react";
import CorporateFareRoundedIcon from "@mui/icons-material/CorporateFareRounded";
import TerminalIcon from "@mui/icons-material/Terminal";
import BusinessIcon from "@mui/icons-material/Business";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import GroupsIcon from "@mui/icons-material/Groups";
import about_partners from "./about_partners.jpg";
import billionloans from "./logos/billionloans.png";
import billiontech from "./logos/billiontech.png";

export default function Partners() {
  return (
    <div className="flex flex-col items-center" style={{ marginTop: "10vh" }}>
      <div className="about-partners-header flex items-center justify-center gap-4 flex-col w-full page-header">
        <p className="text-white text-5xl md:text-3xl font-bold text-center page-header-heading">
          Our Partners
        </p>
        <p className="text-white text-lg text-center page-heading-subheading">
          From Complexity to Clarity
        </p>
      </div>

      <section
        id="about-partners"
        style={{ backgroundColor: "#F5F5F3"}}
        className="flex w-full justify-center gap-16 items-center md:flex-col md:py-20 py-16"
      >
        <div className="flex flex-col gap-4 w-1/2 md:w-11/12">
          <h1>Our Partners</h1>
          <p className="text-justify font-normal text-2xl md:text-xl text-gray2">
            A Solid and result oriented Consulting engagement needs to be
            complemented with successful execution of the desired outcomes. This
            calls for implementation of the suggested strategies or changes. At
            Omniscient Perspectives we acknowledge the need for implementation
            through domain experts. To establish our philosophy and back the
            needs of our clients, we have partnered with like minded expertise.
            We work closely with our partners to ensure that our client is well
            served as per their requirements.
          </p>
          <div className="flex flex-wrap justify-between md:flex-col mt-6 md:mt-0 md:gap-4">
            <div className="flex flex-col gap-4 p-5 w-1/2 md:w-full md:items-center">
              <p className="text-navyblue text-2xl font-semibold md:text-lg uppercase md:text-center">
                BillionLoans Financial Services Pvt Ltd
              </p>
              <p className="md:text-center font-normal text-lg md:text-lg text-gray2">
                For Debt Funds both Term Loans and Working Capital Funds
              </p>{" "}
              <a
                href="http://www.billionloans.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="flex text-navyblue font-normal text-lg md:text-base">
                  Know More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M7.87509 18.1499C7.87509 17.8419 7.99362 17.5465 8.20459 17.3288C8.41557 17.111 8.70172 16.9886 9.00009 16.9886L24.2888 16.9886L22.8263 15.4906C22.6145 15.2719 22.4955 14.9753 22.4955 14.666C22.4955 14.3568 22.6145 14.0602 22.8263 13.8415C23.0382 13.6228 23.3255 13.5 23.6251 13.5C23.9247 13.5 24.212 13.6228 24.4238 13.8415L27.7988 17.3254C27.9549 17.4887 28.0607 17.6961 28.1027 17.9214C28.1448 18.1466 28.1212 18.3797 28.0351 18.5912C27.9507 18.8033 27.8074 18.9848 27.6232 19.1129C27.439 19.2411 27.2222 19.3101 27.0001 19.3112L9.00009 19.3112C8.70172 19.3112 8.41557 19.1889 8.20459 18.9711C7.99362 18.7533 7.87509 18.4579 7.87509 18.1499Z"
                      fill="#1F20AE"
                    />
                    <path
                      d="M22.4998 21.6338C22.4989 21.481 22.5273 21.3295 22.5833 21.188C22.6393 21.0465 22.7218 20.9178 22.826 20.8093L26.201 17.3254C26.4129 17.1067 26.7002 16.9839 26.9998 16.9839C27.1481 16.9839 27.295 17.014 27.4321 17.0726C27.5691 17.1312 27.6936 17.2171 27.7985 17.3254C27.9034 17.4337 27.9866 17.5622 28.0434 17.7037C28.1002 17.8452 28.1294 17.9968 28.1294 18.1499C28.1294 18.4592 28.0104 18.7558 27.7985 18.9744L24.4235 22.4583C24.319 22.5672 24.1945 22.6536 24.0574 22.7125C23.9203 22.7715 23.7733 22.8018 23.6248 22.8018C23.4763 22.8018 23.3292 22.7715 23.1921 22.7125C23.0551 22.6536 22.9306 22.5672 22.826 22.4583C22.7218 22.3498 22.6393 22.2211 22.5833 22.0796C22.5273 21.9381 22.4989 21.7866 22.4998 21.6338Z"
                      fill="#1F20AE"
                    />
                  </svg>
                </p>
              </a>
            </div>
            <div className="flex flex-col gap-4 p-5 w-1/2 md:w-full md:items-center">
              <p className="text-navyblue text-2xl font-semibold md:text-lg uppercase md:text-center">
                BillionTech Pvt Ltd
              </p>
              <p className="md:text-center font-normal text-lg md:text-lg text-gray2">
                For Digital Transformation
              </p>
              <a
                href="http://www.billiontech.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="flex text-navyblue font-normal text-lg md:text-base">
                  Know More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M7.87509 18.1499C7.87509 17.8419 7.99362 17.5465 8.20459 17.3288C8.41557 17.111 8.70172 16.9886 9.00009 16.9886L24.2888 16.9886L22.8263 15.4906C22.6145 15.2719 22.4955 14.9753 22.4955 14.666C22.4955 14.3568 22.6145 14.0602 22.8263 13.8415C23.0382 13.6228 23.3255 13.5 23.6251 13.5C23.9247 13.5 24.212 13.6228 24.4238 13.8415L27.7988 17.3254C27.9549 17.4887 28.0607 17.6961 28.1027 17.9214C28.1448 18.1466 28.1212 18.3797 28.0351 18.5912C27.9507 18.8033 27.8074 18.9848 27.6232 19.1129C27.439 19.2411 27.2222 19.3101 27.0001 19.3112L9.00009 19.3112C8.70172 19.3112 8.41557 19.1889 8.20459 18.9711C7.99362 18.7533 7.87509 18.4579 7.87509 18.1499Z"
                      fill="#1F20AE"
                    />
                    <path
                      d="M22.4998 21.6338C22.4989 21.481 22.5273 21.3295 22.5833 21.188C22.6393 21.0465 22.7218 20.9178 22.826 20.8093L26.201 17.3254C26.4129 17.1067 26.7002 16.9839 26.9998 16.9839C27.1481 16.9839 27.295 17.014 27.4321 17.0726C27.5691 17.1312 27.6936 17.2171 27.7985 17.3254C27.9034 17.4337 27.9866 17.5622 28.0434 17.7037C28.1002 17.8452 28.1294 17.9968 28.1294 18.1499C28.1294 18.4592 28.0104 18.7558 27.7985 18.9744L24.4235 22.4583C24.319 22.5672 24.1945 22.6536 24.0574 22.7125C23.9203 22.7715 23.7733 22.8018 23.6248 22.8018C23.4763 22.8018 23.3292 22.7715 23.1921 22.7125C23.0551 22.6536 22.9306 22.5672 22.826 22.4583C22.7218 22.3498 22.6393 22.2211 22.5833 22.0796C22.5273 21.9381 22.4989 21.7866 22.4998 21.6338Z"
                      fill="#1F20AE"
                    />
                  </svg>
                </p>
              </a>
            </div>
            <div className="flex flex-col gap-4 p-5 w-1/2 md:w-full md:items-center">
              <p className="text-navyblue text-2xl font-semibold md:text-lg uppercase md:text-center">
                Ecovate Tech LLP{" "}
              </p>
              <p className="md:text-center font-normal text-lg md:text-lg text-gray2">
                For Environment and Sustainability solutions
              </p>{" "}
              <a
                href="http://www.ecovatetech.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="flex text-navyblue font-normal text-lg md:text-base">
                  Know More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M7.87509 18.1499C7.87509 17.8419 7.99362 17.5465 8.20459 17.3288C8.41557 17.111 8.70172 16.9886 9.00009 16.9886L24.2888 16.9886L22.8263 15.4906C22.6145 15.2719 22.4955 14.9753 22.4955 14.666C22.4955 14.3568 22.6145 14.0602 22.8263 13.8415C23.0382 13.6228 23.3255 13.5 23.6251 13.5C23.9247 13.5 24.212 13.6228 24.4238 13.8415L27.7988 17.3254C27.9549 17.4887 28.0607 17.6961 28.1027 17.9214C28.1448 18.1466 28.1212 18.3797 28.0351 18.5912C27.9507 18.8033 27.8074 18.9848 27.6232 19.1129C27.439 19.2411 27.2222 19.3101 27.0001 19.3112L9.00009 19.3112C8.70172 19.3112 8.41557 19.1889 8.20459 18.9711C7.99362 18.7533 7.87509 18.4579 7.87509 18.1499Z"
                      fill="#1F20AE"
                    />
                    <path
                      d="M22.4998 21.6338C22.4989 21.481 22.5273 21.3295 22.5833 21.188C22.6393 21.0465 22.7218 20.9178 22.826 20.8093L26.201 17.3254C26.4129 17.1067 26.7002 16.9839 26.9998 16.9839C27.1481 16.9839 27.295 17.014 27.4321 17.0726C27.5691 17.1312 27.6936 17.2171 27.7985 17.3254C27.9034 17.4337 27.9866 17.5622 28.0434 17.7037C28.1002 17.8452 28.1294 17.9968 28.1294 18.1499C28.1294 18.4592 28.0104 18.7558 27.7985 18.9744L24.4235 22.4583C24.319 22.5672 24.1945 22.6536 24.0574 22.7125C23.9203 22.7715 23.7733 22.8018 23.6248 22.8018C23.4763 22.8018 23.3292 22.7715 23.1921 22.7125C23.0551 22.6536 22.9306 22.5672 22.826 22.4583C22.7218 22.3498 22.6393 22.2211 22.5833 22.0796C22.5273 21.9381 22.4989 21.7866 22.4998 21.6338Z"
                      fill="#1F20AE"
                    />
                  </svg>
                </p>
              </a>
            </div>
            <div className="flex flex-col gap-4 p-5 w-1/2 md:w-full md:items-center">
              <p className="text-navyblue text-2xl font-semibold md:text-lg uppercase md:text-center">
                Syne
              </p>
              <p className="md:text-center font-normal text-lg md:text-lg text-gray2">
                For Startup and Sustainability Financing
              </p>{" "}
              <a
                href="http://www.syne.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="flex text-navyblue font-normal text-lg md:text-base">
                  Know More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 36 36"
                    fill="none"
                  >
                    <path
                      d="M7.87509 18.1499C7.87509 17.8419 7.99362 17.5465 8.20459 17.3288C8.41557 17.111 8.70172 16.9886 9.00009 16.9886L24.2888 16.9886L22.8263 15.4906C22.6145 15.2719 22.4955 14.9753 22.4955 14.666C22.4955 14.3568 22.6145 14.0602 22.8263 13.8415C23.0382 13.6228 23.3255 13.5 23.6251 13.5C23.9247 13.5 24.212 13.6228 24.4238 13.8415L27.7988 17.3254C27.9549 17.4887 28.0607 17.6961 28.1027 17.9214C28.1448 18.1466 28.1212 18.3797 28.0351 18.5912C27.9507 18.8033 27.8074 18.9848 27.6232 19.1129C27.439 19.2411 27.2222 19.3101 27.0001 19.3112L9.00009 19.3112C8.70172 19.3112 8.41557 19.1889 8.20459 18.9711C7.99362 18.7533 7.87509 18.4579 7.87509 18.1499Z"
                      fill="#1F20AE"
                    />
                    <path
                      d="M22.4998 21.6338C22.4989 21.481 22.5273 21.3295 22.5833 21.188C22.6393 21.0465 22.7218 20.9178 22.826 20.8093L26.201 17.3254C26.4129 17.1067 26.7002 16.9839 26.9998 16.9839C27.1481 16.9839 27.295 17.014 27.4321 17.0726C27.5691 17.1312 27.6936 17.2171 27.7985 17.3254C27.9034 17.4337 27.9866 17.5622 28.0434 17.7037C28.1002 17.8452 28.1294 17.9968 28.1294 18.1499C28.1294 18.4592 28.0104 18.7558 27.7985 18.9744L24.4235 22.4583C24.319 22.5672 24.1945 22.6536 24.0574 22.7125C23.9203 22.7715 23.7733 22.8018 23.6248 22.8018C23.4763 22.8018 23.3292 22.7715 23.1921 22.7125C23.0551 22.6536 22.9306 22.5672 22.826 22.4583C22.7218 22.3498 22.6393 22.2211 22.5833 22.0796C22.5273 21.9381 22.4989 21.7866 22.4998 21.6338Z"
                      fill="#1F20AE"
                    />
                  </svg>
                </p>
              </a>
            </div>
          </div>
        </div>
        <img src={about_partners} className="w-2/5 md:hidden h-full object-cover" />
      </section>
    </div>
  );
}
