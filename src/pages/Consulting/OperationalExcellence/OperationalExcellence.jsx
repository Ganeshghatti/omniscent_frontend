import "./OperationalExcellence.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ListOfConsulting from "./ListOfConsulting/ListOfConsulting";

export default function OperationalExcellence() {
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
      id="operational-excellence"
      style={{ marginTop: "10vh" }}
      className="flex flex-col items-center w-full"
    >
      <ListOfConsulting />
    </div>
  );
}
