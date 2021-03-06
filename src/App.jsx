import "./App.css";
import Counter from "./components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./reducers/actions.js";
 
const App = () => {
  const counterValue = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <Counter
          value={counterValue}
          onIncrement={() => dispatch(increment())}
          onDecrement={() => dispatch(decrement())}
        />
      </header>
    </div>
  );
};

export default App;
