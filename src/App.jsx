// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menubar from "./components/Menubar";
import Mianhome from "./components/Mianhome";
import InfoBoxes from "./components/InfoBoxes";
import RoomCardList from "./components/RoomCardList";
import Testimonials from "./components/Testimonials";
import TestimonialBanner from "./components/TestimonialBanner";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import WhatsAppButton from "./components/WhatsAppButton";
import TrendingOffers from "./components/TrendingOffers";
import Accommodation from "./components/Accommodation"; 
import About from "./components/About";  
import CallForReservation from "./components/CallForReservation";
import Restaurant from "./components/Restaurant"; 
import Payment from "./components/Payment";
import Contact from "./components/Contactus"; 
import Facilities from "./components/Facilities"; 
import PreNavbar from "./components/PreNavbar";

function App() {
  return (
    <Router>
      <PreNavbar/>
      <Menubar />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <Mianhome />
              <InfoBoxes />
              <Banner />
              <RoomCardList />
              <TrendingOffers />
              <TestimonialBanner />
              <Testimonials />
              <Footer />
              <WhatsAppButton />
              <CallForReservation />
              
            </>
          }
        />

        {/* Accommodation page */}
        <Route path="/accommodation" element={<Accommodation />} />
        {/* About page */}
        <Route path="/about" element={<About />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/" element={<RoomCardList />} />
        <Route path="/payment" element={<Payment />} />
        {/* Contact page */}
        <Route path="/contact" element={<Contact />} />
        <Route path="facilities" element={<Facilities />} />
      </Routes>
    </Router>
  );
}

export default App;
