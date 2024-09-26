import React from 'react';
import { useNavigate } from 'react-router-dom';


const PrivateRouter = ({children}) => {
const navagate = useNavigate()
React.useEffect(()=>{
const token = localStorage.getItem("token")
if(!token)
    navagate("/register")
},[])
    return ( 
        <>
        {children}
        </>
     );
}
 
export default PrivateRouter;