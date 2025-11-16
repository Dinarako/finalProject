import React from 'react';
import '../App.css';
import Home from '../components/Home';
import About from '../components/About';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';




function Main() {
  return (
    <main className='container'>
     <Home />
     <About />
     <Specials />
     <Testimonials />
     
    </main>
  );
}
export default Main;