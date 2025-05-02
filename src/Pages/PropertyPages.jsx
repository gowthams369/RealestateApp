import React, { Fragment } from 'react'
import Navbar from '../Components/Navbar'
import ViewProperty from '../Components/ViewProperty'
import Footer from '../Components/Footer'

const PropertyPages=()=> {
  return (
    <Fragment>
        <Navbar/>
        <ViewProperty/>
        <Footer/>
    </Fragment>
  )
}

export default PropertyPages
