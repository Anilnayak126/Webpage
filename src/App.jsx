import { useState } from 'react'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Analytics } from './components/Analytics'
import { Newsletter } from './components/Newsletter'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'


function App() {
  

  return (
    <>
      <Navbar/>
       <Hero/>
       <Analytics/>
       <Newsletter/>
       <Cards/>
       <Footer/>
    </>
  )
}

export default App
