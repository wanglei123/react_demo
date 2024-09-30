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
		}),
		// 添加新组件
		addComponent: produce((draft, action) => {
			const newComponent = action.payload
			const {selectedId, componentList} = draft;
			const index = componentList.findIndex(item => item.fe_id === selectedId);

			if(index < 0){
				draft.componentList.push(newComponent)
			} else {
				draft.componentList.splice(index + 1,0,newComponent)
			}
			draft.selectedId = newComponent.fe_id
		}),
	}
})

export const {resetComponents,changeSelectId,addComponent} = componentsSlice.actions;

export default componentsSlice.reducer;