import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
// import Certificate from "./pages/Certificate";
import Certificate from "./pages/Cirtificate"
import Resume from "./pages/Resume";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Certificate" element={<Certificate/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
  );
}

export default App;