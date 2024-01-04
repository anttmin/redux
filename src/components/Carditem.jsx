import { useContext } from "react";
import { itemContext } from "../Store/ItemContent";

const Carditem = ({ fruit }) => {
  const{addItem,removeItem} = useContext(itemContext);

  const addAmountHandler = () =>{
    addItem({...fruit,amount:1});
  }

  const removeAmountHandler = () =>{
    removeItem(fruit.id)
  }


  return (

    <section className="Overlayer">
      
     <div className='BBoy1'>
     <div>
        <h4>{fruit.name}</h4>
        <p>{fruit.price}</p>
      </div>

      <div>
        <span className="smallBtn">x{fruit.amount}</span>
        <div className="Button">
           <p onClick={addAmountHandler}>+</p>
           <p onClick={removeAmountHandler}>-</p>
        </div>
      </div>
     </div>


    </section>

   
    

    
  );
};

export default Carditem;
