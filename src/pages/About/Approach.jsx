import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import workintroimg from "./workintroimg.png"

export default function Approach() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="flex flex-col items-center" style={{ marginTop: "10vh" }}>
      <div className="about-approach-header flex items-center justify-center gap-4 flex-col w-full page-header">
        <p className="text-white text-5xl md:text-3xl font-bold text-center page-header-heading">
          Our Approach
        </p>
        <p className="text-white text-lg text-center page-heading-subheading">
          Positioning Excellence to Unlock Value
        </p>
      </div>
      <section className="flex w-11/12 md:w-11/12 md:flex-col-reverse justify-around items-center md:gap-8 fractional-cfo-sec1 py-12">
        <div className="w-1/2 md:w-full flex flex-col gap-4 md:gap-2 md:pt-4 fractional-cfo-sec1-p">
          <h1>Introduction</h1>
          <p className="text-navyblue text-2xl font-semibold md:text-xl">
            Efficiency, Risk Mitigation, Performance Enhancement
          </p>
          <p className="text-justify font-normal text-2xl md:text-xl text-gray2">
            Omniscient Perspectives works with the principle of “Clarity
            Defined”. Our approach is to ensure transparency in all of our
            assignments irrespective of the size of the client or the size of
            our engagement.
            <br />
            <br /> Our target segments being Start-ups, Small and Medium
            Enterprises and Small NBFCs, we value the need of customising our
            offerings to suit each type of entity, their size and their ability
            to compensate us for our efforts.
          </p>
        </div>
        <div className="flex justify-center items-center h-full w-2/5 md:w-full fractional-cfo-sec1-img">
          <img
            src={workintroimg}
            className="object-cover  self-end "
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </div>
      </section>
      <section className="w-11/12 flex md:flex-col  items-stretch justify-between pb-4 md:gap-6">
        <div
          className="flex flex-col gap-3 custom-width-30 md:w-full p-6 rounded  justify-around"
          style={{ border: "1.5px solid gray" }}
        >
          <p className="text-navyblue font-medium text-2xl md:text-xl">
            For Start-ups
          </p>
          <p className="text-justify font-normal text-lg md:text-base text-gray2">
            Our offerings are tailored to suit the stage of the Start-up. Right
            from ideation, incubation, acceleration or growth stage we enable
            the client as per their need. Mentoring, Coaching, Advisory or a
            much longer engagement as a Board Member, we have provided all of
            these to our customers in the Start-up domain. The need to be
            flexible and nimble as per the cultural requirement of Start-ups, we
            are well positioned based on our experience of working extensively
            in this segment.{" "}
          </p>{" "}
          <Link
            to={`${user.email ? "/form" : "/login"}`}
            className="w-fit hero-button"
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
          </Link>
        </div>
        <div
          className="flex flex-col gap-3 custom-width-30 md:w-full p-6 rounded bg-navyblue justify-around"
          style={{ border: "1.5px solid gray" }}
        >
          <p className="text-white font-medium text-2xl md:text-xl">For SMEs </p>
          <p className="text-justify font-normal text-lg md:text-base text-white">
            We address the needs of the SMEs, whether for Fund raising as
            Working Capital or for Capex Loans or for enabling Technological or
            Digital transformation. Our understanding of the SME segment and the
            related vagaries is based on extensive years of working up-close in
            these segments as service providers either as Bankers or
            Consultants. Our networking in the various industries we have
            served, act as a catalyst to propel these SMEs to the next level, be
            it in terms of Revenue, Strategic partnerships or positioning them
            for Initial Public offerings.
          </p>
          <Link
            to={`${user.email ? "/form" : "/login"}`}
            className="w-fit hero-button"
          >
            <p className="flex text-white font-normal text-lg md:text-base">
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
                  fill="white"
                />
                <path
                  d="M22.4998 21.6338C22.4989 21.481 22.5273 21.3295 22.5833 21.188C22.6393 21.0465 22.7218 20.9178 22.826 20.8093L26.201 17.3254C26.4129 17.1067 26.7002 16.9839 26.9998 16.9839C27.1481 16.9839 27.295 17.014 27.4321 17.0726C27.5691 17.1312 27.6936 17.2171 27.7985 17.3254C27.9034 17.4337 27.9866 17.5622 28.0434 17.7037C28.1002 17.8452 28.1294 17.9968 28.1294 18.1499C28.1294 18.4592 28.0104 18.7558 27.7985 18.9744L24.4235 22.4583C24.319 22.5672 24.1945 22.6536 24.0574 22.7125C23.9203 22.7715 23.7733 22.8018 23.6248 22.8018C23.4763 22.8018 23.3292 22.7715 23.1921 22.7125C23.0551 22.6536 22.9306 22.5672 22.826 22.4583C22.7218 22.3498 22.6393 22.2211 22.5833 22.0796C22.5273 21.9381 22.4989 21.7866 22.4998 21.6338Z"
                  fill="white"
                />
              </svg>
            </p>
          </Link>
        </div>{" "}
        <div
          className="flex flex-col gap-3 custom-width-30 md:w-full p-6 rounded justify-around"
          style={{ border: "1.5px solid gray" }}
        >
          <p className="text-navyblue font-medium text-2xl md:text-xl">
            For small NBFCs
          </p>
          <p className="text-justify font-normal text-lg md:text-base text-gray2">
            Our experience as Bankers spans more than three decades. This has
            enabled us to know the NBFC sector very closely. Irrespective of the
            requirements of the client for Business Development, New Product
            launches, Credit underwriting strategies, Operational Excellence,
            Internal Controls and Compliance, we are well equipped with the
            expertise and experience. Our founder has experience of starting a
            NBFC right from scratch as a Co-founder. He is also currently a
            Board member in a Fintech and an Advisor with a NBFC. He is thus
            well equipped with understanding of the Compliance environment thus
            providing a strategic fit for our potential clients in this segment.
          </p>
          <Link
            to={`${user.email ? "/form" : "/login"}`}
            className="w-fit hero-button"
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
          </Link>
        </div>
      </section>
    </div>
  );
}
