import React from 'react';
import ErorMessage from '../parts/ErorMessage';
import Header from '../parts/Header';
import Sitemap from '../parts/Sitemap';
import Footer from '../parts/Footer';

export default function Congratulation({
  title= '404',
  body= 'Looks like this page not found'
}) {
  return ( 
    <> 
    <Header />
    <ErorMessage/>
  
    <Sitemap/>
    <Footer/>
    </>   
      
    )
}
