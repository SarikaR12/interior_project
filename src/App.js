import React from 'react'
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Shop from './components/pages/Shop';
import Footer from './components/Footer';



const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/shop' element={<Shop/>}/>

    </Routes>
    <Footer/>
   </>
  )
}

export default App;
