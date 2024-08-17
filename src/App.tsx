import React from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Faq from "./pages/faq/Faq";
import Service from "./pages/service/Service";
import Navbar from "./components-ui/Navbar";
import Footer from "./components-ui/Footer";
import ContactUs from "./pages/contactus/ContactUs";
import ServiceDetails from "./pages/service/ServiceDetails";

function App() {
  return (
    <div className="App text-sm">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/service">
          <Route index element={<Service />} />
          <Route path=":id" element={<ServiceDetails />} />
        </Route>
        <Route path="*" element={<p>404</p>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
