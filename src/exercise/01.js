// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

/*
const countReducer = (state, action) => ({
  // for passing step it would be previousCount+newCount
  // just need to return the object for 2?
  ...state,
  ...(typeof action === 'function' ? action(state) : action),
})
*/
function countReducer(state, action) {
  const {type, step} = action
  switch (type) {
    case 'increment': {
      return {
        ...state,  // ensures the rest of the state is not replaced
        count: state.count + step,
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  //const [count, setCount] = React.useReducer(countReducer, initialCount)
  const [state, dispatch] = React.useReducer(countReducer, {count: initialCount})
  const {count} = state

  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => dispatch({type: 'increment', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
