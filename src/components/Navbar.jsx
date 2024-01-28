import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/authReducer'

const Navbar = () => {
  const isLogin = useSelector((state) => state.auth.isLogin)
  const dispatch = useDispatch();

  const logoutHandler = () =>{
     dispatch(authActions.logout())
  }
  return (
   <nav className='Navv'>
       <h1>Redux Counter</h1>
       {isLogin && ( 
       <ul className='Liststyle'>
          <li>
             My Records
          </li>
          <li>
            Profile
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
       </ul>)}
   </nav>
  )
}

export default Navbar