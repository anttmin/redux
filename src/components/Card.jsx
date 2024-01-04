import { useContext, useState } from "react";
import { itemContext } from "../Store/ItemContent";

const Card = ({ fruit }) => {
  // const itemCtx = useContext(itemContext)
  const { id, name, description, price } = fruit;

  const { addItem } = useContext(itemContext);

  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNumber = +currentAmount;

  const addToCartHandler = () => {

    if(currentAmountNumber < 1 || currentAmountNumber > 5){
      alert('please enter your valid amount number!!!')
      return;
    }
    addItem({
      id,
      name,
      price,
      description,
      amount: currentAmountNumber,
    });
  };

  return (
    <div className="BBoy">
      <div>
        <h1>{fruit.name}</h1>
        <p>{fruit.description}</p>
        <p>{fruit.price}</p>
      </div>

      <div>
        <input
          type="number"
          value={currentAmount}
          min={1}
          max={4}
          onChange={(e) => {
            setCurrentAmount(e.target.value);
            console.log(currentAmount);
          }}
        />
        <div className="Button">
          <button type="submit" onClick={addToCartHandler}>
            +Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
