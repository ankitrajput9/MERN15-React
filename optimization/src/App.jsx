import React, { useCallback, useState } from 'react';
import About from './components/About';

const App = () => {
  console.log("App rendring....")

  const [count, setcount] = useState(0)

 let greet =useCallback(()=>{
  console.log('good')
 },[])
  return (
    <div>
      <h1>count is {count}</h1>
      <button style={{ padding: "6px 22px", }} onClick={() => {
        setcount(count + 1)
      }}>Inc</button>
      <About greet={greet} />
    </div>
  );
}

export default App;
