import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Page/Home";
import Footer from "./Components/Footer/Footer";
import Packages from "./Page/Packages/Packages";
import About from "./Page/About/About";
import Shop from "./Page/Shop/Shop";
import Pages from "./Page/Pages/Pages";
import Contact from "./Page/Contact/Contact";
import Error from "./Components/Error/Error";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
