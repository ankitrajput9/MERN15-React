import React, { useState } from 'react';
import axios from 'axios';
const Api = () => {

    const [userData, setuserData] = useState([])
    const  handleClick= async()=>{
        const {data}= await axios.get("https://picsum.photos/v2/list")
        setuserData(...userData,data)
}
  return (
    <div>

        {userData.map((e,i)=>{
        return(
            <img key={i} src={e.url} alt="" />
        )
        })}

      <button onClick={handleClick}>Get data</button>
    </div>
  );
}

export default Api;
