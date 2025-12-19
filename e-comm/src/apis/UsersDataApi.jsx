import { axiosInstance } from "../config/axiosInstance"

  export let users = async () => {
    try {
      let res = await axiosInstance.get("/users")
      if(res){

        return res.data
      }
      
    } catch (error) {
      console.log("Error in products", error)
    }
  }