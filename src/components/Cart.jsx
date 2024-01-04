import Carditem from "./Carditem";
import { useContext } from "react";
import { itemContext } from "../Store/ItemContent";



const Cart = (props) => {
  const {items,totalAmount} = useContext(itemContext)
  return (
    <section className="Cartss">
    <span className="title">Yours Carts are Here</span>
      <section className="overflow-ctr">
      {items.length < 1 ? (<h1 className="no-item">no items in your cards!!!</h1>) : (<>{items.map((fruit) => (
        <Carditem key={fruit.id} fruit={fruit} />
      ))}</>)}
      </section>

      <hr/>
      <div className="Title">
        <span className="forOne">Total Price</span>
        <span className="forTwo">${totalAmount.toFixed(2)}</span>
      </div>
      <div className="Buttons">
        <button onClick={props.hideCartHandler}>Close</button>

        {items.length < 1 ? (<></>) : ( <button onClick={() =>{alert('hello')}}>Order</button>)}
       
      </div>
    </section>
  );
};

export default Cart;
