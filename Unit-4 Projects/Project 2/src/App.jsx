import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        {/* Navigation Bar */}
        <Navbar />

        {/* 3 Pages Routing */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
