import { useState } from 'react'
import './App.css';
import Child from './Child'

function App() {

  // state is how react keeps track of values

  // const state = useState(0)
  // const count = state[0]
  // const setCount = state[1]

  const [count, setCount] = useState(0)

  const object = {
    name: 'Chett',
    age: 'who knows'
  }
  //
  // const { age } = object

  return (
    <div className="App">

      <h1>A Title!</h1>

      <Child countChocula={count} thing={'hello'} object={object} />

    </div>
  );
}

export default App;
