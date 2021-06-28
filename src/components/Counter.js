import classes from './Counter.module.css';
import {Component} from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'

/* const Counter = () => {
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
      <h1>Redux Counter with Functional Component</h1>
      <div className={classes.value}>{counter}</div>

      <div>
        <button onClick={incrementCounterHandler}>Increment Counter</button>
        <p></p>
        <button onClick={decrementCounterHandler}>Decrement Counter</button>
      </div>


    </main>
  )
}

export default Counter */

class Counter extends Component {

  incrementCounterHandler() {
    this.props.increment()
  }

  decrementCounterHandler() {
    this.props.decrement()
  }

  render() {
    return(
    <main className={classes.counter}>
      <h1>Redux Counter with Class Component</h1>
      <div className={classes.value}>{this.props.counter}</div>

      <div>
        <button onClick={this.incrementCounterHandler.bind(this)}>Increment Counter</button>
        <p></p>
        <button onClick={this.decrementCounterHandler.bind(this)}>Decrement Counter</button>
      </div>
    </main>
    ) 

  }
}

// subscriber equivalent to useSelector() hook
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

// dispatcher equivalent to useDispatch() hook
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {dispatch({ type: 'IN', payload: 2 })},
    decrement: () => {dispatch({ type: 'DE', payload: 1 })}
  }

}

// connect is used to connect the Class Component to the Redux Store
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
