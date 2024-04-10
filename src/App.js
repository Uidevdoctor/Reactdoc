import React from 'react'
import './Main.css';
import Header from './component/Header'
import Banner from './component/Banner'
import About from './component/About'

const App  = () => {
  return (
    <div className='main-div'>
      <Header />
      <Banner />
      <About />
    </div>
  )
}

export default App