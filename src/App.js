import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"
import { useSelector,useDispatch } from 'react-redux'

import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions"
import store from './redux/store';


function App(props) {
const dispatch = useDispatch();
const newCount = useSelector(
  (state) => {
    return state.counter.count
  }
)




//even handle
  const handleIncrease = () => {
    // props.increaseCounter()
    dispatch(increaseCounter());
    // store.dispatch({
    //   type: 'sam dep trai',
    //   payload: {'name': 'sam'}
    // })
  }

  const handleDecrease = () => {
    // props.increaseCounter()
    dispatch(decreaseCounter());
    // store.dispatch({
    //   type: 'sam dep trai',
    //   payload: {'name': 'sam'}
    // })
  }

  return (
    <div className="App">
      <div>Count: {newCount}</div>

      <button onClick={() => handleIncrease()}>Increase Count</button>

      <button onClick={() => handleDecrease()}>Decrease Count</button>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

export default App