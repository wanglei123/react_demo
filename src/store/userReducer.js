import {createSlice} from '@reduxjs/toolkit'
import {nanoid} from "nanoid";

const INIT_STATE = {
	username: '',
	nickname: ''
}

export const userSlice = createSlice({
	name: 'user', // 模块的名字，redux store默认可以拆分模块
	initialState: INIT_STATE,
	reducers: {
		loginReducer(state, action){
			return action.payload; // 把username, nickname 存在store
		},
		logoutReducer(){
			return INIT_STATE
		}
	}
})

export const {loginReducer,logoutReducer} = userSlice.actions;

export default userSlice.reducer;