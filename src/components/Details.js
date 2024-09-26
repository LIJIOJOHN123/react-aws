import axios from 'axios';
import React from 'react';
import { useLocation } from "react-router-dom";


const Details = () => {
    const [details, setDetails] = React.useState(null)
    const location = useLocation();
    let pathToArray = location&&location.pathname.split("/")
    let id = pathToArray[2]
    const fetchApi = async()=>{
        try {
         const res = await axios.get(`http://localhost:8000/${id}`)
         setDetails(res.data)
        } catch (error) {
            
        }
    }
    React.useEffect(()=>{
        fetchApi()
    },[id])
    return ( 
        <>
        <h1>{details?.title}</h1>
        <p>{details?.description}</p>
        </>
     );
}
 
export default Details;