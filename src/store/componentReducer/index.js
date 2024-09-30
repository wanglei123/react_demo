import {createSlice} from '@reduxjs/toolkit'
import {nanoid} from "nanoid";
import {produce} from 'immer'

const INIT_STATE = {
	componentList: [],
	selectedId: ''
}

export const componentsSlice = createSlice({
	name: 'components', // 模块的名字，redux store默认可以拆分模块
	initialState: INIT_STATE,
	reducers: {
		// 重置所有组件
		resetComponents(state, action){
			return action.payload;
		},
		// 修改selectId
		changeSelectId: produce((draft, action) => {
			draft.selectedId = action.payload;
		})
	}
})

export const {resetComponents,changeSelectId} = componentsSlice.actions;

export default componentsSlice.reducer;