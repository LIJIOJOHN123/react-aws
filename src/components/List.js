import React, { Fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const List = () => {
  const [tasks, setTasks] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [limit, setLimit] = React.useState(5);
  const [id,setId] = React.useState(null)
  const [editmode, setEditMode] = React.useState(false)
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
  });
  const token  = localStorage.getItem("token")?localStorage.getItem("token"):{}

  const fetchApi = async () => {
    const res = await axios.get(`http://localhost:8000/task?limit=${limit}`);
    setTasks(res.data.tasks);
    setCount(res.data.taskCount);
  };
  React.useEffect(() => {
    fetchApi();
  }, [limit]);
  const handleMoreUserList = () => {
    setLimit(limit + 3);
  };
  const handleForm = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  
  const handleSubmit = async()=>{
    await axios.post("http://localhost:8000/task", formData,{ headers: {"Authorization" : `Bearer ${token}`} })
    setFormData({
        title:"",
        description:""
    })
    await fetchApi()
  }
  const handleEdit= (task)=>{
    setFormData({title:task.title, description:task.description})
    setId(task._id)
    setEditMode(true)
  }
  const handleEditSubmission = async()=>{
    await axios.put(`http://localhost:8000/task/${id}`, formData)
    setFormData({
        title:"",
        description:""
    })
    setEditMode(false)
    await fetchApi()

  }
  const hanldeDelete = async(task)=>{
    await axios.delete(`http://localhost:8000/task/${task._id}`)
    await fetchApi()
  }
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <>
 {token &&    <div style={{margin:20}}>
    <h1 style={{ margin: 20 }}>Task List</h1>
      <input type="text" name="title" value={formData.title} onChange={(e)=>handleForm(e)}/>
      <br/>
      <br/>
      <input type="text" name="description" value={formData.description} onChange={(e)=>handleForm(e)}/>
      <br/>
      <br/>
      {!editmode ? <button onClick={()=>handleSubmit()}>Create task</button>:<button onClick={()=>handleEditSubmission()}>Submit edit details</button>}
      <h4 style={{ margin: 20 }}>{count}</h4>
    </div>}
      {tasks.map((task) => (
        <Fragment key={task._id}>
          <div
            style={{
              backgroundColor: "gray",
              margin: 20,
              padding: 20,
              color: "white",
            }}
          >
           <Link to={`/task/${task._id}`}>
           <p>Id: {task._id}</p>
           <p>Title: {task.title}</p>
            <p> Description:{task.description}</p>
           </Link>
         {user._id=== task.user && <>
          <button onClick={()=>handleEdit(task)}>Edit</button>
          <button onClick= {()=>hanldeDelete(task)}>Delete</button></>}
          </div>
        
        </Fragment>
      ))}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            backgroundColor: "green",
            padding: 10,
            color: "white",
            fontSize: 15,
            fontWeight: 700,
            marginBottom: 40,
            borderRadius: 5,
          }}
          onClick={() => handleMoreUserList()}
        >
          Load more
        </button>
      </div>
    </>
  );
};

export default List;
