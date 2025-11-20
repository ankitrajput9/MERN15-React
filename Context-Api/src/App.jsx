import React, { useContext } from 'react';
import About from './components/About';
import { Store } from './Context';


const App = () => {

  let {greet}=useContext(Store)
  return (
    <div>
 <h1>{greet}</h1>

      <About/>
    </div>
  );
}

export default App;
