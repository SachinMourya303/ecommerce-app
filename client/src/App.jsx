import React from 'react'
import Navbar from './app/components/Navbar'
import { Routes , Route } from 'react-router-dom'
import Homepage from './app/pages/Homepage'
import SignUpForm from './app/pages/Form/SignUpForm'
import SignInForm from './app/pages/Form/SignInForm'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes >
        <Route path='/' element={<Homepage />} />
        <Route path='/auth/signup' element={<SignUpForm />}/>
        <Route path='/auth/signin' element={<SignInForm />}/>
      </Routes>
    </div>
  )
}

export default App