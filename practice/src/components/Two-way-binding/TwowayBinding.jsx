import React, { useState } from 'react';
import NameEnter from './NameEnter';
import NameDisplay from './NameDisplay';

const TwowayBinding = () => {

    const [data, setData] = useState([])

  return (
    <div>
        <NameEnter setData={setData} data={data}/>
        <NameDisplay data={data}/>
      
    </div>
  );
}

export default TwowayBinding;
