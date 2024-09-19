import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experients from './components/Experients'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
   <>
     <div className="overflow-x-hidden text-neutral-30">
      {/* Apply the gradient with proper escaping */}
     
      <div className="container mx-auto px-10">
      <Navbar />
       <Hero/>
       <About/>
       <Technologies/>
       <Experients/>
       <Projects/>
       <Contact/>
      </div>
    </div>
   </>
  )
}

export default App
