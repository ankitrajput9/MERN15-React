import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [a, seta] = useState(0)
    const [b, setb] = useState(0)

const aChange=()=>{
    console.log("A is changing...")
}
const bChange=()=>{
    console.log("B is changiing...")
}

useEffect(() => {
    aChange()
}, [a])

useEffect(() => {
    bChange()
}, [b])



    return (
        <div>
            <h3>Num : {a}</h3>
            <h3>Nub 2: {b}</h3>
            <button onClick={() => {
                seta(a+1)

            }}>Add</button>
            <button onClick={() => {
             setb(b-1)
            }}>Subtaract</button>
        </div>
    );
}

export default UseEffect;
