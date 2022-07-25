import React from 'react';
import Header from '../parts/Header';
import Footer from '../parts/Footer';
import Breadcrump from '../components/Breadcrump';
import Success from '../parts/Congratulations/Success';


export default function Congratulation(props) {
  return (
        <>
            <Header theme='black'/>
            <Breadcrump list={[
                {url: '/', name: 'Home'},
                {url: '/congratulation', name: 'Success Checkout'},

            ]}/>
            <Success/>
            <Footer/>
        </>
    )
}
