import React from "react";
import Hero from "../components/Home/Hero";
import Certificate from "./Cirtificate";
import SmallCTA from "../components/Home/SmallCTA";

function Home() {
  return (
    <main>
      <Hero />
      <Certificate />
      <SmallCTA />
    </main>
  );
}

export default Home;