import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show =useSelector((state)=>state.showCounter)
  const toggleCounterHandler = () => {
dispatch({type:'toggle'})
  };

  function handleIncrement() {
    dispatch({ type: "increment" });
  }
  function handleIncrase() {
    dispatch({ type: "increase" ,amount:5});
  }

  function handleDecrement() {
    dispatch({ type: "decrement" });
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show &&  <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleIncrase}>incrementBy 5</button>

        <button onClick={handleDecrement}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
