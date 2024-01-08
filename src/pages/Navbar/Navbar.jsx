import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { saveuser, logout } from "../../features/User";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "./logo.png";
import {
  faBars,
  faCancel,
  faCartShopping,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [menu, setmenu] = useState(false);
  // const user = useSelector((state) => state.user.user);

  // const logoutf = async () => {
  //   dispatch(logout());
  //   localStorage.clear();
  //   window.location.href = "/";
  // };

  // const isSignupOrLogin =
  //   location.pathname === "/signup" ||
  //   location.pathname === "/login" ||
  //   location.pathname === "/auth";

  const menuf = () => {
    setmenu(!menu);
  };

  const isActiveTab = (path) => {
    const parts = path.split("/");
    const result = "/" + parts[1];
    const currentpath = location.pathname.split("/");
    const currentpathresult = "/" + currentpath[1];
    return currentpathresult === result;
  };
  const mobilenavf = (link) => {
    navigate(`${link}`);
    setmenu(!menu);
  };
  useEffect(() => {
    gsap.from(".navbar-pc-animation-item", {
      y: "30px",
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#navbar",
      },
    });
    gsap.from("#navbar", {
      y: "-100px",
      ease: "power4.out",
      opacity: "0",
      duration: 0.75,
      scrollTrigger: {
        trigger: "#navbar",
      },
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    if (menu) {
      tl.fromTo(
        ".navbar-mobile-menu",
        {
          opacity: 0,
          x: "100vw",
        },
        {
          opacity: 1,
          x: "0",
          duration: 0.5,
          ease: "power2.out",
        }
      );

      tl.fromTo(
        ".navbar-mobile-menu-item",
        {
          opacity: 0,
          x: "-100",
        },
        {
          opacity: 1,
          x: "0",
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.5"
      );
    } else {
      tl.to(".navbar-mobile-menu", {
        opacity: 0,
        x: "100vw",
        duration: 1,
        ease: "power2.in",
      });

      tl.to(
        ".navbar-mobile-menu-item",
        {
          opacity: 0,
          x: "-100",
          stagger: -0.1,
          duration: 0.5,
          ease: "power2.in",
        },
        "-=0.5"
      );

      tl.to(
        ".cancel-icon",
        {
          opacity: 0,
        },
        "-=0.5"
      );
    }
  }, [menu]);
  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 w-screen flex justify-between items-center py-12 px-12 lg:px-8 z-50 md:px-6"
    >
      {menu ? (
        <div className="hidden md:block">
          <div
            className="fixed w-screen h-screen top-0 left-0 z-30"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.353)" }}
            onClick={menuf}
          ></div>
          <div
            className="flex flex-col w-3/4 h-screen fixed right-0 top-0 justify-center items-center z-50 gap-8 bg-white navbar-mobile-menu"
            style={{ backgroundColor: "white" }}
          >
            <ul className="list-none flex flex-col gap-10 items-center justify-center">
              <li onClick={menuf} className="navbar-mobile-menu-item">
                <Link
                  to="/"
                  className={`${
                    isActiveTab("/") ? "text-navyblue" : "text-gray2"
                  } hover:text-navyblue`}
                >
                  Home
                </Link>
              </li>
              {/* <li onClick={menuf} className="navbar-mobile-menu-item">
                <Link
                  to="/about"
                  className={`${
                    isActiveTab("/about") ? "text-navyblue" : "text-gray2"
                  } hover:text-navyblue`}
                >
                  About
                </Link>
              </li> */}

              <li className="hover:text-navyblue cursor-pointer navbar-mobile-menu-item">
                <Dropdown>
                  <DropdownTrigger>
                    <div
                      className={`${
                        isActiveTab("/about") ? "text-navyblue" : "text-gray2"
                      } hover:text-navyblue`}
                    >
                      About
                      <ArrowDropDownOutlinedIcon className="hover:text-navyblue" />
                    </div>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Link Actions">
                    <DropdownItem onClick={() => mobilenavf("/about/about-us")}>
                      <ArrowRightOutlinedIcon className="text-navyblue" />
                      About Us
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => mobilenavf("/about/our-partners")}
                    >
                      <ArrowRightOutlinedIcon className="text-navyblue" />
                      Our Partners
                    </DropdownItem>{" "}
                    <DropdownItem onClick={() => mobilenavf("/about/our-work")}>
                      <ArrowRightOutlinedIcon className="text-navyblue" />
                      Our Work
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => mobilenavf("/about/our-approach")}
                    >
                      <ArrowRightOutlinedIcon className="text-navyblue" />
                      Our Approach
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>

              {/* <li className="hover:text-navyblue cursor-pointer navbar-mobile-menu-item">
                <Dropdown>
                  <DropdownTrigger>
                    <div
                      className={`${
                        isActiveTab("/consulting")
                          ? "text-navyblue"
                          : "text-gray2"
                      } hover:text-navyblue`}
                    >
                      Consulting
                      <ArrowDropDownOutlinedIcon className="hover:text-navyblue" />
                    </div>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Link Actions">
                    <DropdownItem
                      className="flex"
                      onClick={() =>
                        mobilenavf("/consulting/planning-for-growth")
                      }
                    >
                      <ArrowRightOutlinedIcon className="text-navyblue" />
                      Planning for Growth
                    </DropdownItem>
                    <DropdownItem
                      className="flex"
                      onClick={() =>
                        mobilenavf("/consulting/business-unit-strategy")
                      }
                    >
                      <ArrowRightOutlinedIcon className="text-navyblue" />
                      Business Unit Strategy
                    </DropdownItem>
                    <DropdownItem
                      className="flex"
                      onClick={() =>
                        mobilenavf("/consulting/portfolio-evaluation")
                      }
                    >
                      <ArrowRightOutlinedIcon className="text-navyblue" />
                      Portfolio Evaluation
                    </DropdownItem>
                    <DropdownItem
                      className="flex"
                      onClick={() => mobilenavf("/consulting/brand-management")}
                    >
                      <ArrowRightOutlinedIcon className="text-navyblue" />
                      Brand Management
                    </DropdownItem>
                    <DropdownItem
                      className="flex items-center justify-center text-bluepurple"
                      onClick={() => mobilenavf("/consulting")}
                    >
                      View all Consulting Services
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li> */}

              <li className="hover:text-navyblue cursor-pointer navbar-mobile-menu-item">
                <Dropdown>
                  <DropdownTrigger>
                    <div
                      className={`${
                        isActiveTab("/consulting")
                          ? "text-navyblue"
                          : "text-gray2"
                      } hover:text-navyblue`}
                    >
                      Consulting
                      <ArrowDropDownOutlinedIcon className="hover:text-navyblue" />
                    </div>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Link Actions">
                    <DropdownItem
                      onClick={() =>
                        mobilenavf("/consulting/strategy-consulting")
                      }
                    >
                      <ArrowRightOutlinedIcon className="text-navyblue" />
                      Strategy Consulting
                    </DropdownItem>
                    <DropdownItem
                      onClick={() =>
                        mobilenavf("/consulting/operational-excellence")
                      }
                    >
                      <ArrowRightOutlinedIcon className="text-navyblue" />
                      Operational excellence
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </li>

              <li
                className="cursor-pointer navbar-mobile-menu-item"
                onClick={menuf}
              >
                <Link
                  to="/fractional-CFO-services"
                  className={`${
                    isActiveTab("/fractional-CFO-services")
                      ? "text-navyblue"
                      : "text-gray2"
                  } hover:text-navyblue`}
                >
                  Fractional CFO Services
                </Link>
              </li>

              <li
                className="cursor-pointer navbar-mobile-menu-item"
                onClick={menuf}
              >
                <Link
                  to="/investment-banking"
                  className={`${
                    isActiveTab("/investment-banking")
                      ? "text-navyblue"
                      : "text-gray2"
                  } hover:text-navyblue`}
                >
                  Investment Banking{" "}
                </Link>
              </li>
            </ul>

            <Link to="/form" onClick={menuf}>
              <button className="bg-navyblue border-1 border-solid border-navyblue text-white rounded flex items-center px-12 py-3 navbar-mobile-menu-item">
                Contact
              </button>
            </Link>
            {/* {!user.token ? (
              <>
                <Link to="/signup" onClick={menuf}>
                  <button className="bg-bluepurple border-1 border-solid border-bluepurple text-white rounded flex items-center px-12 py-3 navbar-mobile-menu-item">
                    Signup
                  </button>
                </Link>

                <Link to="/login" onClick={menuf}>
                  <button className="bg-navyblue border-1 border-solid border-navyblue text-white rounded flex items-center px-12 py-3 navbar-mobile-menu-item">
                    Login
                  </button>
                </Link>
              </>
            ) : (
              <button
                className="bg-bluepurple border-1 border-solid border-bluepurple text-white rounded flex items-center px-12 py-3 navbar-mobile-menu-item"
                onClick={logoutf}
              >
                Logout
              </button>
            )} */}
          </div>
        </div>
      ) : (
        ""
      )}

      <ul
        className="flex items-center list-none md:hidden text-gray"
        style={{ gap: "2.5vw" }}
      >
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-28 navbar-pc-animation-item"
          />
        </Link>
        <li className="hover:text-navyblue navbar-pc-animation-item">
          <Link
            to="/"
            className={` ${
              isActiveTab("/") ? "text-navyblue" : "text-gray2"
            } hover:text-navyblue`}
          >
            Home
          </Link>
        </li>
        <li className="hover:text-navyblue cursor-pointer navbar-pc-animation-item">
          <div className="aboutdropdown">
            <span
              className={`${
                isActiveTab("/about") ? "text-navyblue" : "text-gray2"
              } hover:text-navyblue`}
            >
              About
              <ArrowDropDownOutlinedIcon className="hover:text-navyblue" />
            </span>
            <ul className="aboutdropdown-content">
              <li className="mt-4">
                <Link
                  to="/about/about-us"
                  className="hover:text-navyblue flex items-center text-gray2"
                >
                  <ArrowRightOutlinedIcon className="text-navyblue" />
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/about/our-partners"
                  className="hover:text-navyblue text-gray2 flex"
                >
                  <ArrowRightOutlinedIcon className="text-navyblue" />
                  <p>Our Partners</p>
                </Link>
              </li>{" "}
              <li>
                <Link
                  to="/about/our-work"
                  className="hover:text-navyblue text-gray2 flex"
                >
                  <ArrowRightOutlinedIcon className="text-navyblue" />
                  <p>Our work </p>
                </Link>
              </li>
              <li>
                <Link
                  to="/about/our-approach"
                  className="hover:text-navyblue text-gray2 flex"
                >
                  <ArrowRightOutlinedIcon className="text-navyblue" />
                  <p>Our Approach</p>
                </Link>
              </li>
            </ul>
          </div>
        </li>

        {/* <li className="hover:text-navyblue cursor-pointer navbar-pc-animation-item">
          <div className="consultingdropdown">
            <span
              className={`${
                isActiveTab("/consulting") ? "text-navyblue" : "text-gray2"
              } hover:text-navyblue`}
            >
              Consulting
              <ArrowDropDownOutlinedIcon className="hover:text-navyblue" />
            </span>
            <ul className="consultingdropdown-content">
              <div className="flex py-6 gap-10 items-center justify-center w-full pt-12">
                <div
                  className="flex flex-col w-1/2"
                  style={{ borderRight: "2px solid #4633D7" }}
                >
                  <p className="text-navyblue text-xl mt-3 font-semibold md:text-lg pl-6">
                    Business Growth Strategy
                  </p>
                  <div className="flex">
                    <div className="flex flex-col">
                      <li className="mt-4">
                        <Link
                          to="/consulting/planning-for-growth"
                          className="hover:text-navyblue flex items-center text-gray2"
                        >
                          <ArrowRightOutlinedIcon className="text-navyblue" />
                          <p>Planning for Growth</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/consulting/business-unit-strategy"
                          className="hover:text-navyblue text-gray2 flex"
                        >
                          <ArrowRightOutlinedIcon className="text-navyblue" />
                          <p>Business Unit Strategy</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/consulting/portfolio-evaluation"
                          className="hover:text-navyblue text-gray2 flex"
                        >
                          <ArrowRightOutlinedIcon className="text-navyblue" />
                          <p>Portfolio Evaluation</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/consulting/brand-management"
                          className="hover:text-navyblue text-gray2 flex"
                        >
                          <ArrowRightOutlinedIcon className="text-navyblue" />
                          <p>Brand Management</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/strategic-consulting/geographical-expansion"
                          className="hover:text-navyblue text-gray2 flex"
                        >
                          <ArrowRightOutlinedIcon className="text-navyblue" />
                          <p>Geographical Expansion</p>
                        </Link>
                      </li>
                    </div>
                    <div className="flex flex-col">
                      <li className="mt-4">
                        <Link
                          to="/strategic-consulting/mergers-and-acquisitions"
                          className="hover:text-navyblue flex items-center text-gray2"
                        >
                          <ArrowRightOutlinedIcon className="text-navyblue" />
                          <p>Mergers & Acquisitions</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/consulting/divestiture"
                          className="hover:text-navyblue text-gray2 flex"
                        >
                          <ArrowRightOutlinedIcon className="text-navyblue" />
                          <p>Divestiture</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/consulting/strategising-fundraise-for-growth"
                          className="hover:text-navyblue text-gray2 flex"
                        >
                          <ArrowRightOutlinedIcon className="text-navyblue" />
                          <p>Strategising Fundraise for growth</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/consulting/business-valuation"
                          className="hover:text-navyblue text-gray2 flex"
                        >
                          <ArrowRightOutlinedIcon className="text-navyblue" />
                          <p>Business Valuation</p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/consulting/IPO-strategy-for-small-and-medium-enterprises"
                          className="hover:text-navyblue text-gray2 flex"
                        >
                          <ArrowRightOutlinedIcon className="text-navyblue" />
                          <p>IPO Strategy for Small and Medium Enterprises</p>
                        </Link>
                      </li>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-1/4">
                  <p className="text-navyblue text-xl mt-3 font-semibold md:text-lg pl-6">
                    Operational Excellence
                  </p>
                  <div className="flex flex-col">
                    <li className="mt-4">
                      <Link
                        to="/consulting/human-capital"
                        className="hover:text-navyblue flex items-center text-gray2"
                      >
                        <ArrowRightOutlinedIcon className="text-navyblue" />
                        <p>Human Capital</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/consulting/internal-control-and-process-improvement"
                        className="hover:text-navyblue text-gray2 flex"
                      >
                        <ArrowRightOutlinedIcon className="text-navyblue" />
                        <p>Internal Controls and Process Improvement</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/consulting/risk-management"
                        className="hover:text-navyblue text-gray2 flex"
                      >
                        <ArrowRightOutlinedIcon className="text-navyblue" />
                        <p>Risk Management</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/consulting/digital-transformation"
                        className="hover:text-navyblue text-gray2 flex"
                      >
                        <ArrowRightOutlinedIcon className="text-navyblue" />
                        <p>Digital Transformation</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/consulting/sustainability-consulting-covering-ESG"
                        className="hover:text-navyblue text-gray2 flex"
                      >
                        <ArrowRightOutlinedIcon className="text-navyblue" />
                        <p>Sustainability Consulting covering ESG</p>
                      </Link>
                    </li>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </li> */}
        <li className="hover:text-navyblue cursor-pointer navbar-pc-animation-item">
          <div className="dropdown">
            <span
              className={`${
                isActiveTab("/consulting") ? "text-navyblue" : "text-gray2"
              } hover:text-navyblue`}
            >
              Consulting
              <ArrowDropDownOutlinedIcon className="hover:text-navyblue" />
            </span>
            <ul className="dropdown-content">
              <li className="mt-4">
                <Link
                  to="/consulting#strategy-consulting"
                  className="hover:text-navyblue flex items-center text-gray2"
                >
                  <ArrowRightOutlinedIcon className="text-navyblue" />
                  <p>Strategy Consulting</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/consulting#operational-excellence"
                  className="hover:text-navyblue text-gray2 flex"
                >
                  <ArrowRightOutlinedIcon className="text-navyblue" />
                  <p>Operational Excellence</p>
                </Link>
              </li>
            </ul>
          </div>
        </li>
        <li className="cursor-pointer navbar-pc-animation-item">
          <Link
            to="/fractional-CFO-services"
            className={`${
              isActiveTab("/fractional-CFO-services")
                ? "text-navyblue"
                : "text-gray2"
            } hover:text-navyblue`}
          >
            Fractional CFO Services
          </Link>
        </li>
        <li className="cursor-pointer navbar-pc-animation-item">
          <Link
            to="/investment-banking"
            className={`${
              isActiveTab("/investment-banking")
                ? "text-navyblue"
                : "text-gray2"
            } hover:text-navyblue`}
          >
            Investment Banking
          </Link>
        </li>
      </ul>
      <Link to="/form" className="md:hidden">
        <button className="rounded flex items-center px-12 py-3 navbar-pc-animation-item hover-animated-button bg-navyblue border-2 border-solid border-navyblue">
          Contact
        </button>
      </Link>
      {/* {!user.token ? (
        <div className="flex gap-8 md:hidden">
          <Link to="/signup">
            <button className="rounded flex items-center px-12 py-3 navbar-pc-animation-item hover-animated-button bg-bluepurple border-2 border-solid border-bluepurple">
              Signup
            </button>
          </Link>

          <Link to="/login" className="md:hidden">
            <button className=" rounded flex items-center px-12 py-3 navbar-pc-animation-item hover-animated-button bg-navyblue border-2 border-solid border-navyblue">
              Login
            </button>
          </Link>
        </div>
      ) : (
        <button
          className="bg-bluepurple border-1 border-solid border-bluepurple text-white rounded flex items-center px-12 py-3 md:hidden navbar-pc-animation-item hover-animated-button"
          onClick={logoutf}
        >
          Logout
        </button>
      )} */}

      <div className="hidden w-screen md:flex justify-between md:items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-20" />
        </Link>
        {menu ? (
          <FontAwesomeIcon
            icon={faClose}
            onClick={menuf}
            className="cursor-pointer text-2xl cancel-icon fixed top-10 right-6 z-50"
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            onClick={menuf}
            className="cursor-pointer text-2xl"
          />
        )}
      </div>
    </nav>
  );
}
