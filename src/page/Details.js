import React from 'react';
import Header from '../parts/Header';
import Sitemap from '../parts/Sitemap';
import Footer from '../parts/Footer';
import Breadcrump from '../components/Breadcrump'
import ProductDetails from '../parts/DetailsPage/ProductDetails';
import Suggestions from '../parts/DetailsPage/Suggestions';


export default function HomePage(props) {
  return (
        <>
            <Header theme='black'/>
            <Breadcrump list={[
                {url: '/', name: 'Home'},
                {url: '/categories/91231', name: 'Office Room'},
                {url: '/categories/91231/details/7881', name: 'Details'},
            ]}/>
            <ProductDetails/>
            <Suggestions/>
            <Sitemap/>
            <Footer/>
        </>
    )
}
