import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const AppLayout: React.FC<unknown> = (_props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 right-0 left-0">
        <Header />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
