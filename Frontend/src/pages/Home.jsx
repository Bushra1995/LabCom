import React from 'react'
import Laboratories from './Laboratories';
import ComplexNavbar from '../components/Header/Navbar';
import HotOffers from '../components/UI/HotOffers'

const Home = () => {
    return (
        <>
            <ComplexNavbar />
            <Laboratories />
            <HotOffers />
        </>
    )
}

export default Home;