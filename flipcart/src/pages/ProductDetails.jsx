import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Details from '../components/Details';

const ProductDetails = () => {

    let {id}=useParams()
const [product, setProduct] = useState({})
console.log(product)
    const Fetchsingledata = async () => {
        try {

            let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            if (res) {
                setProduct(res.data)
        //   return res.data
            }
        } catch (error) {
            console.log("Error in productsdetails", error)

        }
    }
    useEffect(() => {
        Fetchsingledata()
    }, [id])
    return (
       <Details product={product}/>
    );
}

export default ProductDetails;
