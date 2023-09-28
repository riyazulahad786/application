import React, { useState } from 'react'
import { useSelector } from "react-redux";

import view from './View.css'
function View({id,showView,setShowView}) {
    const allUser = useSelector((state)=>state.app.users)
    const singleUser = allUser.filter(ele => ele.id === id);

    const [close,setClose]=useState(false)

    const closed = () =>{
        setClose(true)
    }
  return (
    <div className='modalBackground'>
     <div className='modalContainer'>
        <h1>view Details</h1>
       <div className=' view mx-auto'>
       <h1>{singleUser[0].name}</h1>
       <h1>{singleUser[0].email}</h1>
       <h1>{singleUser[0].age}</h1>
       <h1>{singleUser[0].gender}</h1>

       </div>
       <div className='d-flex justify-content-center '>
       <button onClick={()=>setShowView(false)}>close</button>

       </div>
     </div>
    </div>
  )
}

export default View