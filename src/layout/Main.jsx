import Header from "./Header"
import Body from "./Body"
import Backdrop from "../components/Backdrop"
import { useState } from "react"



const Main = () => {

   const [showCart,setShowCart] = useState(false)

   const showCartHandler = () =>{
     setShowCart(true)
   }

   const hideCartHandler = () =>{
    setShowCart(false)
  }


  return (
   <>
   
    <Header showCartHandler={showCartHandler}/>
    <Body hideCartHandler={hideCartHandler}/>
    <Backdrop  showCart={showCart} hideCartHandler={hideCartHandler}/>



   </>
  )
}

export default Main