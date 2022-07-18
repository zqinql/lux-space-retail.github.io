import React from 'react';
import Header from '../parts/Header';
import Hero from '../parts/Hero';
import BrowseRoom from '../parts/HomePage/BrowseRoom';
import JustArrived from '../parts/HomePage/JustArrived';
import Clients from '../parts/HomePage/Clients';
import Sitemap from '../parts/HomePage/Sitemap';
import Footer from '../parts/HomePage/Footer'

export default function HomePage(props) {
  return (
        <>
            <Header theme='white' position='absolute '/>
            <Hero/>
            <BrowseRoom/>
            <JustArrived/>
            <Clients/>
            <Sitemap/>
            <Footer/>
        </>
    )
}
