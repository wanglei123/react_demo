import {createSlice} from '@reduxjs/toolkit'
import {nanoid} from "nanoid";
import {produce} from 'immer'
import {getNextSelectId} from './utils.js'

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
		// 修改组件属性
		editProps: produce((draft, action) => {
			const {fe_id, newProps} = action.payload;
			const selectedComponent = draft.componentList.find(item => item.fe_id === fe_id)
			if(selectedComponent){
				selectedComponent.props = newProps
			}
		}),
		// 删除组件
		deleteComponent: produce((draft) => {
			const {componentList, selectedId} = draft;
			const newSelectId = getNextSelectId(selectedId, componentList)
			draft.selectedId = newSelectId
			const index = componentList.findIndex(item => item.fe_id === selectedId);
			if(index > -1){
				componentList.splice(index,1)
			}
		}),
		// 隐藏和显示组件
		changeComponentHidden: produce((draft, action) => {
			const { componentList} = draft;
			const {fe_id, isHidden} = action.payload;
			let newSelectedId = ''
			if(isHidden){
				newSelectedId = getNextSelectId(fe_id, componentList)
			} else {
				newSelectedId = fe_id
			}
			draft.selectedId = newSelectedId
			const curComp = componentList.find(item => item.fe_id === fe_id)
			if(curComp){
				curComp.isHidden = isHidden
			}
		}),
		// 锁定组件
		toggleLockedComponent: produce((draft, action) => {
			const {componentList} = draft
			const {fe_id} = action.payload;
			const curComp = componentList.find(item => item.fe_id === fe_id)
			if(curComp){
				curComp.isLocked = !curComp.isLocked
			}
		})
	}
})

export const {resetComponents,
	changeSelectId,
	addComponent,
	editProps,
	changeComponentHidden,
	toggleLockedComponent,
	deleteComponent} = componentsSlice.actions;

export default componentsSlice.reducer;