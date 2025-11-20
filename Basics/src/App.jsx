import React from 'react';
import Usestate from './components/useState/Usestate';
import Propsdrilling from './components/props-drilling/Propsdrilling';
import Binding from './components/Two-way-binding/Binding';
import Secondtype from './components/Two-way-binding/Secondtype';
import Efficient from './components/Two-way-binding/efficient';


const App = () => {
  return (
    <div  className='p-5'>
  {/* <Usestate/> */}
 {/* <Propsdrilling/> */}
 {/* <Binding/> */}
 {/* <Secondtype/> */}
 <Efficient   />
    </div>
  );
}

export default App;
