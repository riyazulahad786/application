import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUsers } from "../features/userDetailsSlice";
import { Link } from "react-router-dom";
import { deleteUsers } from "../features/userDetailsSlice";
import View from "./View";
function Read() {
     const dispatch = useDispatch();
     const {users,loading,searchData}=useSelector((state)=>state.app);
     console.log(users);
     const [id,setId]=useState()
     const [showView,setShowView]=useState(false)
    useEffect(()=>{
      dispatch(showUsers())
    },[])

    if(loading){
        return( <h1>...loading</h1>)
    }
  return (
    <div>
     { showView && <View id={id} showView={showView} setShowView={setShowView}/>}
    <div className="d-flex justify-content-center">
        <h1>Read user Details</h1>
      </div>
   
    {users && 
      users.filter((ele)=>{
        if(searchData.length === 0){
          return ele
        }else{
          return ele.name.toLowercase().includes(searchData.toLowercase())
        }
      })
      .map((ele)=>(
      <div key={ele.id} className="card  w-50 mx-auto my-5">
        <div className="card-body ">
          <h5 className="card-title">{ele.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
           {ele.email}
          </h6>
          <p className="card-text">
           {ele.age}
          </p>
          <p>{ele.gender}</p>
          <button className="mx-3" onClick={()=>[setId(ele.id),setShowView(true)]}>
            view
          </button>
          <Link to={`/edit/${ele.id}`} className="mx-3">
            Edit
          </Link>
          <button className="mx-3" onClick={()=>dispatch(deleteUsers(ele.id))}>
           Delete
          </button>
        </div>
      </div>
    ))}
      
    </div>
  );
}

export default Read;
