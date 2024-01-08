import React, { useEffect } from "react";
import FAQSection from "./FAQSection/FAQSection";
import Introduction from "./Introduction/Introduction";
import "./NBFC.css";

export default function NBFC() {
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
    <section
      id="nbfc"
      style={{ marginTop: "10vh" }}
      className="w-full flex flex-col gap-8 items-center "
    >
      <Introduction />
      <FAQSection />
    </section>
  );
}
