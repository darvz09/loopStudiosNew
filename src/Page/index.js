import React from 'react'
import Navs from '../components/0_Navs';
import Hero from '../components/1_Hero';
import About from '../components/2_About';
import Projects from '../components/3_Projects';
import {EventList} from '../components/3_Projects/data'
import Footer from '../components/4_Footer';
const Home = () => {
    return (
        <>
            <Navs />
            <Hero />
            <About />
            <Projects data={EventList} />
            <Footer />
        </>
    )
}

export default Home
