import React from 'react';

const NameDisplay = ({data}) => {

  return (
    <div>
 {data.map((e,idx)=>{
 return(
<React.Fragment key={idx}>
<div >
<h1 >Name : {e.name}</h1>
<h1  >Age : {e.age}</h1>
</div>
</React.Fragment>
  )
 })}
    </div>
  );
}

export default NameDisplay;
