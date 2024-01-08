import React from "react";
import Hero from "./Hero/Hero";
import Strategy from "./Strategy/Strategy";
import Numbers from "./Numbers/Numbers";
import Objectives from "./Objectives/Objectives";
import Founder from "./Founder/Founder";
import Category from "./Category/Category";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-32">
      <Hero />
      <Strategy/>
      <Numbers/>
      <Category/>
      <Objectives/>
      <Founder/>
    </div>
  );
}
