import { useSelector,useDispatch } from "react-redux"
import {counterActions} from "../store/counterReducer"

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter)
  const isShow = useSelector(state => state.counter.isShow)
  const increseHandler = () =>{
    dispatch(counterActions.increase())
  }

  const decreseHandler = () =>{
    dispatch(counterActions.decrease())
  }

  const increaseBy5Handler = () =>{
    dispatch(counterActions.increaseBy5(5))
  }

  const toggleHandler = () => {
     dispatch(counterActions.toggle())
  }

  return (
    <div className='counter'>
        <h3>Redux Counter</h3>
        {isShow && <h1>{counter}</h1>}
        <hr />
       <div className='Btn'>
        <button onClick={increseHandler}>Increase</button>
        <button onClick={increaseBy5Handler}>Increase By 5</button>
        <button onClick={decreseHandler}>Decrease</button>
        <button onClick={toggleHandler}>ToggleCounter</button>
       </div>
    </div>
  )
}

export default Counter