import { useReducer, useState } from "react";

const firstReducer = (state,action) =>{
 switch (action.type){
  case "plus":
  return {...state,count: state.count + 1};
  case "minus":
  return {...state,count: state.count - 1};
  case "updateKey":
  return {...state,key: action.payload};
  default :
  throw new Error();
 }
}

const ACTION = {
  PlUS : 'plus',
  MINUS : 'minus',
  UPDATE_KEY : 'updateKey'
}


function App() {
  const[state,dispatch] = useReducer(firstReducer,{key :" ",count : 0});
  
  return (
    <div className="App">
      <h1>Hello React</h1>
      <input
        type="text"
        onChange={(e)=>dispatch({type:ACTION.UPDATE_KEY,payload:e.target.value})}
      />
      <h1>your key is -{state.key}</h1>
      <button
       onClick={() => dispatch({type:ACTION.PlUS})  
       }
      >
        +
      </button>
      <span>{state.count}</span>
      <button
       onClick={() => dispatch({type:ACTION.MINUS})  
      }
      >
        -
      </button>
    </div>
  );
}

export default App;
