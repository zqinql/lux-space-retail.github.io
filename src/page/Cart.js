import React from 'react';
import Header from '../parts/Header';
import Sitemap from '../parts/Sitemap';
import Footer from '../parts/Footer';
import Breadcrump from '../components/Breadcrump';
import ShoopingCart from '../parts/Cart/ShoopingCart';
import ShippingCart from '../parts/Cart/ShippingCart';


export default function HomePage(props) {
  return (
        <>
            <Header theme='black'/>
            <Breadcrump list={[
                {url: '/', name: 'Home'},
                {url: '/cart', name: 'Shopping Cart'},

            ]}/>
            <section className="md:py-16">
            <div className="container mx-auto px-4">
                <div className="flex -mx-4 flex-wrap">
                    <ShoopingCart/>
                    <ShippingCart/>
                </div>
            </div>
            </section>
            <Sitemap/>
            <Footer/>
        </>
    )
}
