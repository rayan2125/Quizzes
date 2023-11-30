
import { createSlice } from '@reduxjs/toolkit'




const AuthSlice = createSlice({
    isLoggedIn: false,
    name:"Auth",

   initialState:{
    authData:null,
   },
   reducers:{
    setAuthdata(state,action){
        state.isLoggedIn=true
        state.authData=action.payload
       

    },
    logout(state) {
        state.isLoggedIn = false; 
        state.authData = null;
      },

   }
}) 

export const {setAuthdata,logout} = AuthSlice.actions
export default AuthSlice.reducer 


