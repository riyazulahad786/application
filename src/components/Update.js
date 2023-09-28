import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatedUser } from "../features/userDetailsSlice";
function Update() {
  const { id } = useParams();
  const [updatedData, setUpdatedData] = useState();
  const navigate = useNavigate();
  const { users, loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdatedData(singleUser[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]:e.target.value});
    console.log(updatedData,"updatedData");
  }

  const handleUpdatedData = (e) => {
   e.preventDefault();
   dispatch(updatedUser(updatedData));
   navigate("/read")
  }
  return (
    <div>
      <div>
        <div className="d-flex justify-content-center">
          <h1 className="my-3">Update the user Details</h1>
        </div>
        <form className="w-50 mx-auto my-5" onSubmit={handleUpdatedData}>
          <div className="mb-3 ">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={updatedData && updatedData.name}
              onChange={newData}
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
              value={updatedData && updatedData.email}
              onChange={newData}

            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="password"
              className="form-control"
              name="age"
              value={updatedData && updatedData.age}
              onChange={newData}

            />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Male"
              name="gender"
              checked={updatedData && updatedData.gender === "Male"}
              onChange={newData}

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
              checked={updatedData && updatedData.gender === "Female"}

              onChange={newData}

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
    </div>
  );
}

export default Update;
