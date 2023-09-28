import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailsSlice";
function Navbar() {
  const alluser = useSelector((state)=>state.app.users);
  const [search,setSearch]=useState("");
  const [searchData,setSearchData]=useState("")
  const dispatch = useDispatch();

  // useEffect(()=>{
  //   dispatch(searchUser(searchData))
  // },[searchData])
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/create" className="nav-link active" aria-current="page">
                 Create Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-link" >
                  All Post ({alluser.length})
                </Link>
              </li>
           
            
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 w-50 "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
               className="btn btn-outline-success" 
               type="submit" 
              //  value={searchData}
              //  onChange={(e)=>{dispatch(searchUser(setSearch(e.target.value)))}}
               >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
