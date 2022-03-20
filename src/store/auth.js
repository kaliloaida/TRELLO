import { createSlice } from '@reduxjs/toolkit'

const  base=[
	{
		email: 'aida@gmail.com',
		password: '1234567',
		isAuthenticated:false

	}
]


const authSlice = createSlice({
	name: 'login',
	initialState: base,
	reducers: {
		
	},
})
export const authActions = authSlice.actions
export default authSlice
