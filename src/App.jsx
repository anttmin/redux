import React from 'react'
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'

const App = () => {
  const isLogin = useSelector((state) => state.auth.isLogin)
  return (
  <>
    <Navbar/>
    {!isLogin && <Welcome />}
   
    {isLogin && <section><Counter/></section>}
   
  </>
  )
}

export default App