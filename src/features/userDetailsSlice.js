import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


//create action
export const createUser = createAsyncThunk("createUser",async (data,{rejectWithValue})=>{
 const response = await fetch("https://64fc1c5f605a026163ae308e.mockapi.io/crud",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
 })
 try {
    const result = await response.json()
    return result;
    console.log(result,"submituserdetails");
 } catch (error) {
    return rejectWithValue(error.response)
 }
})

//read action
export const showUsers = createAsyncThunk("showUsers",async(data,{rejectWithValue})=>{
   const response = await fetch("https://64fc1c5f605a026163ae308e.mockapi.io/crud")

   try {
    const result = await response.json();
    console.log(result,"get");

    return result;
    
   } catch (error) {
      return rejectWithValue(error)
   }
})

//delete action
export const deleteUsers = createAsyncThunk("deleteUsers",async(id,{rejectWithValue})=>{
  const response = await fetch(`https://64fc1c5f605a026163ae308e.mockapi.io/crud/${id}`,{method:"DELETE"})

  try {
   const result = await response.json();
   console.log(result,"get");

   return result;
   
  } catch (error) {
     return rejectWithValue(error)
  }
})

//updated

export const updatedUser = createAsyncThunk("updatedUser",async (data,{rejectWithValue})=>{
  const response = await fetch(`https://64fc1c5f605a026163ae308e.mockapi.io/crud/${data.id}`,{
     method:"PUT",
     headers:{
         "Content-Type":"application/json"
     },
     body:JSON.stringify(data)
  })
  try {
     const result = await response.json()
     return result;
     console.log(result,"updatedUser");
  } catch (error) {
     return rejectWithValue(error.response)
  }
 })








export const userDetail = createSlice({
    name:"userDetails",
    initialState:{
        users:[],
        loading:false,
        error:null,
        searchData : [],
    },
    reducer:{
        searchUser : (state,action)=>{
           state.searchData = action.payload
       },
    },
    extraReducers:{
        [createUser.pending]:(state)=>{
          state.loading=true
        },
        [createUser.fulfilled]:(state,action)=>{
          state.loading=false
          state.users.push(action.payload)
        },  
        [createUser.rejected]:(state,action)=>{
          state.loading=false
          state.users=action.payload
        },


        //read

        [showUsers.pending]:(state)=>{
            state.loading=true
          },
          [showUsers.fulfilled]:(state,action)=>{
            state.loading=false
            state.users=action.payload
          }, 
           [showUsers.rejected]:(state,action)=>{
            state.loading=false
            state.users=action.payload
          },


          //DELETE
          [deleteUsers.pending]:(state)=>{
            state.loading=true
          },
          [deleteUsers.fulfilled]:(state,action)=>{
            state.loading=false
            const {id}= action.payload
            if(id===id){
              state.users = state.users.filter(ele => ele.id !== id);
            }
            console.log("delete",action.payload);
          },  
          [deleteUsers.rejected]:(state,action)=>{
            state.loading=false
            state.users=action.payload
          },

          //UPDATED
          [updatedUser.pending]:(state)=>{
            state.loading=true
          },
          [updatedUser.fulfilled]:(state,action)=>{
            state.loading=false
            state.users=state.users.map((ele)=>(
             ele.id===action.payload.id ? action.payload  : ele
            ))
          },  
          [updatedUser.rejected]:(state,action)=>{
            state.loading=false
            state.users=action.payload
          },
      }

})

export default userDetail.reducer;
export const { searchUser}=userDetail.actions