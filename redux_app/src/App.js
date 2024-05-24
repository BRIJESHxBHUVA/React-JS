
import './App.css';
import { increment, decrement } from './Action';
import { useSelector, useDispatch } from 'react-redux'
function App() {

  const count = useSelector(state => state.count)
  const dispatch = useDispatch();

  return (
    <>

      <div className="main">
      <h1>Counter</h1>
      <div className="box">
          <div className="counter">
            <h1>{count}</h1>
          </div>
          <div className="btns">
            <button onClick={()=>{dispatch(increment())}}>+</button>
            <button onClick={()=>{dispatch(decrement())}}>-</button>
          </div>
      </div>

      </div>
    
    </>
  );
}

export default App;
