import React, { useContext } from 'react'
import { itemContext } from '../Store/ItemContent';
const Nav = (props) => {
  const{items} = useContext(itemContext)
  const totalCart = items.reduce((currentVal,item)=>{
    return currentVal + item.amount;
  },0);
  return (
    <>

      <nav className='nav'>

        <h1 className='header'>Shoppy</h1>
        <button className='btn' onClick={props.showCartHandeler}>Cart <span>One ({totalCart})</span></button>
      </nav>

    </>
  )
}

export default Nav