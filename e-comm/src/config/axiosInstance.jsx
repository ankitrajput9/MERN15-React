import axios from "axios"

 export const axiosInstance = axios.create({
    baseURL:"https://fakestoreapi.com"
 })


 axiosInstance.interceptors.response.use(
   (response)=> response,
   (error)=>{
      console.log("Error in Api",error)
   }
 )