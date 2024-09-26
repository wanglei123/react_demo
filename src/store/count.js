import {createSlice} from '@reduxjs/toolkit'

const INIT_STATE = 100

export const countSlice = createSlice({
	name: 'count', // 模块的名字，redux store默认可以拆分模板
	initialState: INIT_STATE,
	reducers: {
		increase(state){
			return state + 1;
		},
		decrease(state){
			return state - 1; // 返回一个新的state ，不可变数据
		}
	}
})

export const {increase,decrease} = countSlice.actions;

export default countSlice.reducer;