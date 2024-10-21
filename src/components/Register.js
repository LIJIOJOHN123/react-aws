import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { Fragment } from "react";
const Register = () => {
  const navigate = useNavigate();

    const [formData,setFormData] = React.useState({
        name:"",
        email:"",
        password:""
    })
    const handleInputChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleRegister = async()=>{
      let res
      try {
       res = await axios.post("http://localhost:8000/api/register", formData)
       console.log(res.request.response.message)
      } catch (error) {
        console.log(error)
      }
    
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("user", JSON.stringify(res.data.user))
        navigate("/")
    }

React.useEffect(()=>{
const token = localStorage.getItem("token")
console.log(token)
token && navigate("/")
},[])
  return (
    <Fragment>
    <div className="container">
        <div className="row mt-4">
            <div className="col-md-4">
            <div>
            <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            onChange={(e)=>handleInputChange(e)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            name="email"
            onChange={(e)=>handleInputChange(e)}
          />
    
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={(e)=>handleInputChange(e)}
          />
        </div>
        <button  onClick={handleRegister}>
          Submit
        </button>
      </div>
            </div>
            
        </div>
    </div>
    </Fragment>
  );
};

export default Register;
