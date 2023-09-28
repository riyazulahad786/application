import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailsSlice";
import { useNavigate } from "react-router-dom";

function Create() {

    const [users,setUsers] = useState({});
    const dispatch = useDispatch();
     const navigate = useNavigate();
    const getUserData=(e)=>{
        setUsers({...users, [e.target.name]:e.target.value})
        // console.log(users);
    }

    const handleSubmitUserData = (e) => {
        e.preventDefault();
        dispatch(createUser(users))
        navigate('/read');
        console.log(users);
    }
  return (
    <div>
            <div className="d-flex justify-content-center">
            <h1 className="my-3">Fill the user Details</h1>
            </div>     
 <form className="w-50 mx-auto my-5" onSubmit={handleSubmitUserData}>
        <div className="mb-3 ">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="password"
            className="form-control"
            name="email"
             onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age"  className="form-label">
            Age
          </label>
          <input
            type="password"
            className="form-control"
            name="age"
            onChange={getUserData}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Male"
            name="gender"
            onChange={getUserData}
          />
          <label className="form-check-label" for="flexCheckDefault">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Female"
            name="gender"
            onChange={getUserData}
          />
          <label className="form-check-label" for="flexCheckChecked">
            Female
          </label>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Create;
