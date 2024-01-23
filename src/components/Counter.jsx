import {useSelector,useDispatch} from "react-redux"

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const isShow = useSelector(state => state.isShow)


    const increaseHandler = () =>{
        dispatch({type:"increase"})
    }

    const increaseBy5Handler = () =>{
        dispatch({type:"increaseBy5",amount:5})
    }

    const decreaseHandler = () =>{
        dispatch({type:"decrease"})
    }

    const toggleHandler = () =>{
        dispatch({type:"toggle"})
    }
  return (
    <div className='Counter'>
        <h3>Redux Counter</h3>
        {isShow && <h1>{counter}</h1>}
        <hr />
        <div className='btn'>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={increaseBy5Handler}>IncreaseBy5</button>
        <button onClick={decreaseHandler}>Decrease</button>
        <button onClick={toggleHandler}>ToggleCounter</button>

        </div>
    </div>
  )
}

export default Counter