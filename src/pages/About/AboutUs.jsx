import React, { useEffect } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import Aboutuspageimg from "./Aboutuspageimg.png";
import founderphoto from "./founderphoto.png";
import varun from "./varun.png";
import abhishek from "./abhishek.png";
import partner from "./partner.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
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

  const isLaptop = useMediaQuery({ query: "(min-width: 867px)" });

  useEffect(() => {
    if (isLaptop) {
      gsap.from(".about-sec1-p", {
        x: "-70px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec1",
        },
      });
      gsap.from(".about-sec1-img", {
        x: "70px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec1",
        },
      });
    } else {
      gsap.from(".about-sec1-p", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec1",
        },
      });
      gsap.from(".about-sec1-img", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec1",
        },
      });
    }
  }, [isLaptop]);

  useEffect(() => {
    if (isLaptop) {
      gsap.from(".about-sec2-p", {
        x: "70px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec2",
        },
      });
      gsap.from(".about-sec2-img", {
        x: "-70px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec2",
        },
      });
    } else {
      gsap.from(".about-sec2-p", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec2",
        },
      });
      gsap.from(".about-sec2-img", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec2",
        },
      });
    }
  }, [isLaptop]);

  useEffect(() => {
    if (isLaptop) {
      gsap.from(".about-sec4-p", {
        x: "70px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec4",
        },
      });
      gsap.from(".about-sec4-img", {
        x: "-70px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec4",
        },
      });
    } else {
      gsap.from(".about-sec4-p", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec4",
        },
      });
      gsap.from(".about-sec4-img", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec4",
        },
      });
    }
  }, [isLaptop]);

  useEffect(() => {
    if (isLaptop) {
      gsap.from(".about-sec3-p", {
        x: "-70px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec3",
        },
      });
      gsap.from(".about-sec3-img", {
        x: "70px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec3",
        },
      });
    } else {
      gsap.from(".about-sec3-p", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec3",
        },
      });
      gsap.from(".about-sec3-img", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec3",
        },
      });
    }
  }, [isLaptop]);

  useEffect(() => {
    if (isLaptop) {
      gsap.from(".about-sec5-p", {
        x: "-70px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec5",
        },
      });
      gsap.from(".about-sec5-img", {
        x: "70px",
        opacity: 0,
        delay: 0.5,
        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec5",
        },
      });
    } else {
      gsap.from(".about-sec5-p", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec5",
        },
      });
      gsap.from(".about-sec5-img", {
        y: "100px",
        opacity: 0,
        delay: 0.5,

        duration: 0.75,
        scrollTrigger: {
          trigger: ".about-sec5",
        },
      });
    }
  }, [isLaptop]);
  useEffect(() => {
    gsap.from(".about-timeline-item", {
      y: "100px",
      ease: "power4.out",
      opacity: "0",
      stagger: 0.2,
      delay: 0.5,
      duration: 0.75,
      scrollTrigger: {
        trigger: ".about-timeline",
      },
    });
  });
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

  return (
    <section
      id="about"
      style={{ marginTop: "10vh" }}
      className="flex flex-col items-center gap-12 w-full pb-20"
    >
      <div className="about-header page-header flex items-center justify-center gap-4 flex-col w-full">
        <p className="text-white page-header-heading text-5xl md:text-3xl font-bold text-center">
          About Us
        </p>
        <p className="text-white page-heading-subheading text-lg text-center">
          Where Visionary Guidance Enables Efficient Execution{" "}
        </p>
      </div>
      <div className="flex about-sec1 md:flex-col-reverse justify-between w-11/12 items-center">
        <p className="w-1/2 md:w-full text-2xl md:text-xl text-gray2 about-sec1-p text-justify">
          At Omniscient Perspectives Pvt Ltd, we masterfully craft strategic
          pathways for startups and SMEs. Led by the distinguished strategist
          Ramakrishnan Venkateswaran, we stand at the forefront of innovation,
          propelling businesses to their zenith.
          <br />
          <br /> Beyond consultation, we partner with our clients, nurturing
          their ascent through creative yet pragmatic strategies. Our
          comprehensive services span the entrepreneurial gamut, promising
          significant returns and lasting success. Join us in a venture where
          keen insight shapes each decision, aligning precisely with your
          ambitions. Discover our legacy of success, where your business's
          evolution is our prime commitment.
        </p>
        <img src={Aboutuspageimg} className="w-1/2 md:w-full about-sec1-img" />
      </div>
      <div className="flex w-11/12 md:flex-col items-center justify-center gap-12 about-sec2">
        <img
          src={founderphoto}
          className="w-2/5 md:hidden object-cover about-sec2-img"
        />
        <div className="flex flex-col gap-6 w-1/2 md:w-full about-sec2-p">
          <h1 className="md:text-center">Founder and Principal Consultant</h1>
          <img
            src={founderphoto}
            className="md:block hidden md:w-full object-cover"
          />
          <p className="text-2xl md:text-xl text-gray2 text-justify">
            <span className="font-medium text-navyblue">
              Ramakrishnan Venkateswaran ,
            </span>
            Founder Director of Omniscient Perspectives, is a seasoned
            professional in Financial Services and Strategy Consulting,
            excelling in the Lending industry. He holds senior advisory roles in
            a leading NBFC & Fintech Company, contributing significantly to
            strategy and business development. Noteworthy achievements include
            co-founding a Financial Services Distribution and Collection
            services company. As a co-founder of an Operating Leasing and
            Equipment Rental Company, his focus on the Infrastructure Sector
            emphasizes renewable energy enablement.
            <br />
            <br /> With a rich background, he served as Business Head and Senior
            VP of Infrastructure Financing at Kotak Mahindra Bank and co-founded
            M Power Microfinance Pvt Ltd. An IIM Bangalore alum, Ramakrishnan
            holds a PG in Commerce and Financial Management, showcasing academic
            excellence and industry expertise.{" "}
          </p>

          <a
            href="https://www.linkedin.com/in/ramakrishnan-venkateswaran-95785016/"
            className="w-fit"
          >
            <LinkedInIcon style={{ color: "#1F20AE", fontSize: 45 }} />
          </a>
        </div>
      </div>
      {/* <div className="flex flex-col w-3/4 md:w-11/12 md:self-center md:p-0 self-start gap-8 items-start pl-36 about-timeline">
        <h1 className="md:text-center">Expertise</h1>
        <div className="flex gap-8">
          <img
            src="./Assets/Images/About/Aboutuspagetimelineimg.png"
            className="object-cover"
          />
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-4 about-timeline-item">
              <p className="text-bluepurple text-3xl md:text-2xl font-semibold">
                Strategic & People Management
              </p>
              <p className="text-gray2 text-xl md:text-lg">
                Establishing the Micro & Macro goals of the organization,
                budgeting both short term & long term and developing business
                plan encompassing revenue, risk & receivables management.
              </p>
            </div>

            <div className="flex flex-col gap-4 about-timeline-item">
              <p className="text-bluepurple text-3xl md:text-2xl font-semibold">
                Profit Centre Management
              </p>
              <ul
                className="text-gray2 text-xl list-disc md:text-lg"
                style={{ paddingLeft: "3vw" }}
              >
                <li>
                  Identifying & developing multiple revenue models through
                  customer centric approaches.
                </li>
                <li>
                  Optimizing productivity through effective HR practices which
                  included long term career planning, training & development.
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 about-timeline-item">
              <p className="text-bluepurple text-3xl md:text-2xl font-semibold">
                Operational
              </p>
              <ul
                className="text-gray2 text-xl list-disc md:text-lg"
                style={{ paddingLeft: "3vw" }}
              >
                <li>
                  Product development, Risk identification & management,
                  Business plan modeling, raising.
                </li>
                <li>
                  Resources like team identification & building, Technology
                  interventions etc.,
                </li>
                <li>Policy & Process establishment and Compliance</li>
                <li>Brand Building & Image management</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 about-timeline-item">
              <p className="text-bluepurple text-3xl md:text-2xl font-semibold">
                Valuation and Due-Diligence
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex w-11/12 md:flex-col items-center justify-center gap-12 about-sec3">
        <div className="flex flex-col gap-6 w-1/2 md:w-full about-sec3-p">
          <p className="text-2xl font-bold text-bluepurple md:text-center">
            Our Partners
          </p>
          <h1 className="md:text-center">
            Principal Consultant, Digital Transformation and Sustainability
          </h1>
          <img
            src={partner}
            className="md:block hidden md:w-full object-cover"
          />
          <p className="text-2xl md:text-xl text-gray2 text-justify">
            <span className="font-medium text-navyblue">
              Mohan Ramanathan ,
            </span>
            a seasoned Entrepreneur, Mentor, and Technology Consultant,
            specializes in digital transformation for IT and Education, with
            expertise in IoT and Blockchain. Engaged with Social Trusts and
            Section 8 companies, he boasts over 40 years of industry experience,
            including senior managerial roles at Hewlett Packard's Global
            Delivery division.
            <br />
            <br /> Actively contributing as a Rotarian for 15 years, Mohan has
            played a pivotal role in district-level projects. Academically, he
            is an Electronics Engineer from the University of Madras and an
            alumnus of IIM Ahmedabad, showcasing a rich background in both
            technical and managerial realms.
          </p>{" "}
          <a href="https://www.linkedin.com/in/rmohanblr/" className="w-fit">
            <LinkedInIcon style={{ color: "#1F20AE", fontSize: 45 }} />
          </a>
        </div>
        <img
          src={partner}
          className="w-2/5 md:hidden object-cover about-sec3-img"
        />
      </div>
      <div className="flex w-11/12 md:flex-col items-center justify-center gap-12 about-sec4">
        <img src={abhishek} className="w-2/5 md:hidden about-sec4-img" />
        <div className="flex flex-col gap-6 w-1/2 md:w-full about-sec4-p">
          <h1 className="md:text-center">Consultant</h1>
          <img src={abhishek} className="hidden md:block md:w-full" />
          <p className="text-2xl md:text-xl text-gray2 text-justify">
            <span className="font-medium text-navyblue">Abhishek Dhawan ,</span>
            a finance leader with 17+ years of expertise in Strategy, M&A,
            Project/Corporate Finance, and Financial Controllership,
            demonstrates a strong commitment to renewable energy. Over a decade,
            he built and funded renewable energy platforms, excelling in deal
            structuring for large-scale projects.
            <br />
            <br /> Abhishek's career highlights include spearheading new
            business verticals, leading successful project acquisitions, and
            orchestrating the sale of his company's solar portfolio to a
            KKR-backed platform. Formerly the CFO of a Dutch MNC-backed
            Independent Power Producer, he holds degrees in Civil Engineering
            and Finance (MBA) from Thapar University and S.P Jain Center of
            Management.
          </p>{" "}
          <a
            href=" https://www.linkedin.com/in/abhishek-dhawan-2428007/"
            className="w-fit"
          >
            <LinkedInIcon style={{ color: "#1F20AE", fontSize: 45 }} />
          </a>
        </div>
      </div>
      <div className="flex w-11/12 md:flex-col items-center justify-center gap-12 about-sec5">
        <div className="flex flex-col gap-6 w-1/2 md:w-full about-sec5-p">
          <h1 className="md:text-center">Consultant</h1>
          <img
            src={varun}
            className="md:block hidden md:w-full object-cover"
          />
          <p className="text-2xl md:text-xl text-gray2 text-justify">
            <span className="font-medium text-navyblue">Varun Nagarajan </span>
            is a seasoned professional with a proven track record in
            spearheading successful business ventures, particularly in the
            domain of startups and government projects. With extensive expertise
            in facilitating company setups in India, he specializes in
            streamlining the documentation process, navigating regulatory
            landscapes, and enabling seamless market entry for organizations
            across diverse sectors.
            <br />
            <br /> With a robust background in business development and project
            management, Varun has consistently demonstrated a unique knack for
            identifying strategic opportunities and devising go-to-market
            strategies that drive business growth. His proficiency in liaising
            with government bodies and securing project permissions has been
            instrumental in fostering mutually beneficial partnerships and
            accelerating project timelines.
          </p>{" "}
          <a
            href="https://www.linkedin.com/in/varunnagarajan/"
            className="w-fit"
          >
            <LinkedInIcon style={{ color: "#1F20AE", fontSize: 45 }} />
          </a>
        </div>
        <img
          src={varun}
          className="w-2/5 md:hidden object-cover about-sec5-img"
        />
      </div>
    </section>
  );
}
