import { useQuery } from "@tanstack/react-query"
import { users } from "../apis/UsersDataApi"

export const usersTanstackhook=()=>{
    return(
        useQuery({
queryKey:["users"],
queryFn:users,
staleTime:Infinity,
 })
    )
}