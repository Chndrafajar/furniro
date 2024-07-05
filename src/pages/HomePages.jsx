import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/landingpage/HeroBanner';
import BrowseRange from '../components/landingpage/BrowseRange';
import OurProducts from '../components/landingpage/OurProducts';
import Inspirations from '../components/landingpage/Inspirations';
import FuniroFurniture from '../components/landingpage/FuniroFurniture';
import Footer from '../components/Footer';

export default function HomePages() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <HeroBanner />
      <BrowseRange />
      <OurProducts />
      <Inspirations />
      <FuniroFurniture />
      <Footer />
    </>
  );
}
