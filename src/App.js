import React from 'react'
import { Blog, Header,whatGpt3, Features, Possibility, Footer, WhatGpt3 } from './containers'
import { Brand, Navbar,Cta } from './components'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
          <Navbar />
          <Header />  
      </div>
      <Brand />  
      <WhatGpt3 /> 
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
