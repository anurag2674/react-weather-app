import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
const AppLayout: React.FC<unknown> = (_props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 right-0 left-0">
        <Header />
      </div>
      <div className="flex-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
