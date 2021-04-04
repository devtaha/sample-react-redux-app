import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counterActions";
import { signin, signout } from "./actions/loggedActions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.logged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <h1>isLogged: {isLogged ? "true" : "false"}</h1>
      <button onClick={() => {
        dispatch(increment())
        dispatch(signin())
      }}>increment</button>
      <button onClick={() => {
        dispatch(decrement());
        dispatch(signout())
      }}>decrement</button>
      <button onClick={() => dispatch(signin())}>signin</button>
      <button onClick={() => dispatch(signout())}>signout</button>
    </div>
  );
}

export default App;
