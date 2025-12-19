import { useQuery } from "@tanstack/react-query"
import { products } from "../apis/ProductDataApi"

export let productTanstackhook = () => {
    return (
        useQuery({
            queryKey: ['product'],
            queryFn: products,
            staleTime: Infinity
        })
    )
}