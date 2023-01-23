import React from "react";
import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeIn" }}
      exit={{ opacity: 0 }}
    >
      <Container maxW={{ sm: "container.sm", xl: "container.xl" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Container>
    </motion.div>
  );
}

export default App;
