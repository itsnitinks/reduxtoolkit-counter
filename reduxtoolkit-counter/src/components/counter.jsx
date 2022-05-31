import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  addby5
} from "../Redux/features/counterSlice";
function Counter() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => {
    return state.counter;
  });
  console.log("counter", counter);
  function inc() {
    dispatch(increment());
  }
  function dec() {
    if (counter > 0) {
      dispatch(decrement());
    }
  }
  function resetit() {
    dispatch(reset());
  }
  function incby5() {
    dispatch(addby5(5));
  }
  return (
    <>
      <h1>Counter:{counter}</h1>
      <button onClick={inc}>INCREMENT</button>
      <button onClick={dec}>DECREMENT</button>
      <button onClick={resetit}>RESET</button>
      <button onClick={incby5}>add5</button>
    </>
  );
}

export { Counter };
