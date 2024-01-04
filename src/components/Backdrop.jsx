import Cart from "../components/Cart"

const Backdrop = (props) => {
  return (
   <>
     {props.showCart && (
      <div>
        <section className="backdrop" onClick={props.hideCartHandler}/>
         <Cart hideCartHandler={props.hideCartHandler}/>
      </div>
     )}
   </>

  )
}

export default Backdrop