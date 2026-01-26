import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Stats from './components/Stats';
import About from './components/About';
import ServiceCatalog from './components/ServiceCatalog';
import Foundation from './components/Foundation';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import ClientsTicker from './components/ClientsTicker';
import TechPartner from './components/TechPartner';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import Booking from './components/Booking';
import Footer from './components/Footer';
import IntroScreen from './components/IntroScreen';

function App() {
  return (
    <>
      <IntroScreen />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Foundation />
      <ServiceCatalog />
      <TechPartner />
      <WhyUs />
      <ClientsTicker />
      <Process />
      <Portfolio />
      <Team />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Booking />
      <Footer />
    </>
  );
}

export default App;
