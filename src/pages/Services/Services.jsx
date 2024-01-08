import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Services.scss";
import Introduction from "./Introduction/Introduction";
import ListOfServices from "./ListOfServices/ListOfServices";

export default function Services() {
  const location = useLocation();

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
    <div
      id="Services"
      style={{ marginTop: "10vh" }}
      className="flex flex-col items-center w-full"
    >
      <Introduction />
      <ListOfServices/>
    </div>
  );
}
