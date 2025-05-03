import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import PropertyPages from './Pages/PropertyPages'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='view' element={<PropertyPages/>}/>
        <Route path='signup' element={<SignupPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
      </Routes>
    </>
  )
}

export default App
