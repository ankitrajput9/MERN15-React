
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';


const PublicRoute = ({children}) => {
   let {user}=useSelector((state)=>state.auth)
   console.log(user);
   
    if(user){
      return  <Navigate  to="/home"/>
    }
  return children
}


export default PublicRoute;
