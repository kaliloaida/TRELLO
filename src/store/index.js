
import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./auth"
import logoutSlice from "./logout"
import todoSlice from "./todo"





const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		todo: todoSlice.reducer,
		logout: logoutSlice.reducer,
		
		
	  },
})

export default store



