import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  // dispatches change events
  const dispatch = useDispatch()

  // provides state with subscriber
  const counter = useSelector(state => state.counter)

  const incrementCounterHandler = () => {
    console.log("increment")
    dispatch({ type: 'IN', payload: 2 })
  }

  const decrementCounterHandler = () => {
    console.log("decrement")
    dispatch({ type: 'DE', payload: 1 })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

      <div>
        <button onClick={incrementCounterHandler}>Increment Counter</button>
        <p></p>
        <button onClick={decrementCounterHandler}>Decrement Counter</button>
      </div>


    </main>
  );
};

export default Counter;
