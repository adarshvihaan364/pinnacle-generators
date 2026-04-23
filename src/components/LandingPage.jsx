import React, { useEffect } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Products from './sections/Products';
import Industries from './sections/Industries';
import Projects from './sections/Projects';
import Partners from './sections/Partners';
import Testimonials from './sections/Testimonials';
import Blogs from './sections/Blogs';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import TopBar from './sections/TopBar';

const LandingPage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden bg-[#050505] text-white">
      <TopBar />
      <Header />
      <Hero />
      <About />
      <Products />
      <Industries />
      <Projects />
      <Partners />
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
