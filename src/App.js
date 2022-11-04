import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  let state = useSelector(state => state);
  let dispatch = useDispatch();
  return (
    <div>
        {state}
      <button onClick={() =>{
        dispatch({type:"INC",payload: 10})
      }}>INC
      </button>
     <button onClick={() =>{
        dispatch({type:"DEC",payload: 2})
      }}>DEC
      </button>


    </div>
  );
}

export default App;
