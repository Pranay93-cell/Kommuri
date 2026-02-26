import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import WhatsAppButton from "./components/WhatsAppButton";

//import "./Home.css";
//import ".Pages/Services.css";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:serviceId" element={<Gallery />} />
        </Routes>
      </AnimatePresence><WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
