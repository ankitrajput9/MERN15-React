import React from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const {register,
    handleSubmit,
    reset,
    formState:{errors}
  }=useForm(()=>{
 
  })
const formDataSubmit=(data)=>{
  console.log(data)
  reset()
}
  return (
    <div>
      <form onSubmit={handleSubmit(formDataSubmit)}
      style={{
        display:"flex",
        flexDirection:"column",
        width:"50%",
        gap:"10px"
      }} 
      action="">
         <input style={{
          padding:"8px",
          borderRadius:"10px",
          border:"1px solid black"
         }} 
         {...register("name" ,{required:true})} type="text" placeholder='Name' />
         {errors.name &&<p>Name is Required</p>}
         {/* {errors.name && errors.name.type=== "required"?<p>Error in name </p>:null} */}
         {}
         <input style={{
          padding:"8px",
          borderRadius:"10px",
          border:"1px solid black"
         }}
          {...register("email",{required:true})} type="text" placeholder='Email' />
         {/* {errors.email && <p>Required Email</p>} */}
         <input style={{
          padding:"8px",
          borderRadius:"10px",
          border:"1px solid black"  
         }} 
         {...register("username",{required:true})} type="text" placeholder='Username' />
         {/* {errors.username && <p>Required User</p>}*/}
         <input style={{
          padding:"8px",
          borderRadius:"10px",
          border:"1px solid black"
         }} 
         {...register("password",{required:true,minLength:6})} type="password" placeholder='Password' />
         {/* {errors.password && errors.password.type==="required"?<p>password is required</p>:null } */}
         {errors.password && errors.password.type==="minLength"? alert(" password must have at least 6 char") :null}

        <input type="submit" value="Submit" />

      </form>
      
    </div>
  );
}

export default App;
