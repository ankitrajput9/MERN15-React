import React, { useState } from 'react';

const NameEnter = ({setData,data}) => {
    const [Namedata, setNamedata] = useState({
        name: "",
        age: "",
    })

    const handleChange=(e)=>{
        let {name,value}=e.target
     setNamedata({...Namedata ,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setData([...data,Namedata])
        setNamedata({name:'',age:""})
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit} style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                width: '50%',
            }} >
                <input value={Namedata.name} name='name' onChange={handleChange} type="text " placeholder='name' />
                <input value={Namedata.age} name='age' onChange={handleChange} type="number" placeholder='age' />
              <button>Submit</button>
            </form>
        </div>
    );
}

export default NameEnter;
