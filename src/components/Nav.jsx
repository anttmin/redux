import React from 'react'

const Nav = ({totalNotes}) => {
  return (
    <div className='Nav'>
         <h2 className='title'>Fire Note</h2>
         <p className='button'>Total Note - <span>{totalNotes}</span></p>
    </div>
  )
}

export default Nav