import { axiosInstance } from "../config/apiInstance"

  export let userData = async ()=>{
  try {
    let res = await axiosInstance.get("/users")
    if(res){ 
      return res.data
    }
  } catch (error) {
    console.log("error in users api",error)
  }
    }
  