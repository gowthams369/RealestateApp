import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import PropertyPages from './Pages/PropertyPages'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import AccountPage from './Pages/AccountPage'
import EditAccountpage from './Pages/EditAccountpage'
import BookEnqueiryPage from './Pages/BookEnqueiryPage'
import EnqueryPage from './Pages/EnqueryPage'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='view' element={<PropertyPages/>}/>
        <Route path='signup' element={<SignupPage/>}/>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='account' element={<AccountPage/>}/>
        <Route path='editaccount' element={<EditAccountpage/>}/>
        <Route path='bookenquirey' element={<BookEnqueiryPage/>}/>
        <Route path='enquery' element={<EnqueryPage/>}/>
      </Routes>
    </>
  )
}

export default App
