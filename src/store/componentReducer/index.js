import {createSlice} from '@reduxjs/toolkit'
import {nanoid} from "nanoid";

const INIT_STATE = {
	componentList: [],

}
// {
// 	fe_id: '',
// 		type: '',
// 	title: '',
// 	props: {}
// }

export const componentsSlice = createSlice({
	name: 'components', // 模块的名字，redux store默认可以拆分模块
	initialState: INIT_STATE,
	reducers: {
		// 重置所有组件
		resetComponents(state, action){
			return action.payload;
		},
	}
})

export const {resetComponents} = componentsSlice.actions;

export default componentsSlice.reducer;