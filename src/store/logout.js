import { createSlice } from "@reduxjs/toolkit"

const initialLogoutState={isLogout:false}
const logoutSlice=createSlice({
    name:'logout',
    initialState:initialLogoutState,
    reducers:{
        logout(state){
            state.isLogout=false
        }
    }
})
export const logoutActions = logoutSlice.actions
export default logoutSlice