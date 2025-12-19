import { axiosInstance } from "../config/axiosInstance"

export let products = async () => {
    try {
      let res = await axiosInstance.get("/products")
      if (res) {
        return res.data
      }
    } catch (error) {
      console.log("Error in products", error)
    }
  }