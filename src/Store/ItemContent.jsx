import { createContext, useReducer } from "react";

const intinalState = {
  items: [],
  totalAmount: 0,
};

const itemReducer = (state, action) => {
  //add 
  if (action.type === "ADD_ITEM") {


    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    
    const existItemIndex = state.items.findIndex(item => item.id===action.item.id)

    const existItem = state.items[existItemIndex];
    // console.log(existItem)


  //////////////////////// 

    let updatedItems;


    if(existItem){
      const updatedItem = {
        ...existItem,
        amount: existItem.amount + action.item.amount,
      }


    updatedItems = [...state.items]
    updatedItems[existItemIndex] = updatedItem;

    // console.log(existItemIndex)
    // console.log(updatedItems) 
    // console.log(updatedItems[existItemIndex]) array

    }else{
      updatedItems = state.items.concat(action.item);
      // console.log(updatedItems) 
    }
     

    return{
        items : updatedItems,
        totalAmount : updatedTotalAmount,
      }
  }
  //add

  //remove
  if (action.type === "REMOVE_ITEM") {
      const existItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existItem = state.items[existItemIndex];
      const updatedTotalAmount = state.totalAmount - existItem.price;

      let updatedItems;
      if(existItem.amount == 1){
        updatedItems = state.items.filter((item) => item.id !== action.id)
        // console.log(updatedItems)
      }else{
        const updatedItem = {...existItem,amount : existItem.amount-1}

        updatedItems = [...state.items];
        // console.log( updatedItems[existItemIndex]);
        updatedItems[existItemIndex]=updatedItem;
        console.log(updatedItem); //same result with 67 = 71  but we need above stage cuzs we don't need minus status
      }

      return{
        items : updatedItems,
        totalAmount : updatedTotalAmount,
      }
      // alert(action.id)
  }

  return intinalState;
  
};

export const itemContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const ItemContextProvider = (props) => {
  const [itemState, dispatchItem] = useReducer(itemReducer, intinalState);

  const addItemHandler = (item) => {
    dispatchItem({ type: "ADD_ITEM", item });
  };

  const removeItemHandler = (id) => {
    dispatchItem({ type: "REMOVE_ITEM", id });
  };

  const itemCtx = {
    items: itemState.items,
    totalAmount: itemState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <itemContext.Provider value={itemCtx}>
      {props.children}
    </itemContext.Provider>
    
  );
};

export default ItemContextProvider;
