import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Partners from './Partners';
import Stats from './Stats';
import About from './About';
import ServiceCatalog from './ServiceCatalog';
import Foundation from './Foundation';
import WhyUs from './WhyUs';
import Process from './Process';
import Portfolio from './Portfolio';
import ClientsTicker from './ClientsTicker';
import TechPartner from './TechPartner';
import Pricing from './Pricing';
import BlogPreview from './BlogPreview';
import Team from './Team';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import CTABanner from './CTABanner';
import Booking from './Booking';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Stats />
            <About />
            <Foundation />
            <ServiceCatalog />
            <TechPartner />
            <WhyUs />
            <Partners />
            <Process />
            <Portfolio />
            <Pricing />
            <BlogPreview />
            <Team />
            <Testimonials />
            <FAQ />
            <CTABanner />
            <Booking />
            <Footer />
        </>
    );
};

export default Home;
