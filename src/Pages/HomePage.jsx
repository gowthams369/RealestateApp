import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'
import Property from '../Components/Property'
import Footer from '../Components/Footer'

function HomePage() {
  return (
   <Fragment>
    <Navbar/>
    <Main/>
    <Property/>
    <Footer/>
   </Fragment>
  )
}

export default HomePage
