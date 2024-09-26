import {createSlice} from '@reduxjs/toolkit'
import {nanoid} from "nanoid";

const INIT_STATE = [{
	id: nanoid(5),
	title: 'eat',
	completed: false
},
	{
		id: nanoid(5),
		title: 'sleep',
		completed: true
	}]

export const todoListSlice = createSlice({
	name: 'todoList', // 模块的名字，redux store默认可以拆分模块
	initialState: INIT_STATE,
	reducers: {
		addTodo(state, action){
			return [action.payload, ...state]
		},
		removeTodo(state, action){
			return state.filter((todo) => todo.id !== action.payload.id)
		},
		toggleCompleted(state, action){
			return state.map((todo) => {
				const {id, completed} = todo
				if(id !== action.payload.id){
					return todo
				}
				return {...todo, completed: !completed}
			})
		},
	}
})

export const {addTodo,removeTodo,toggleCompleted} = todoListSlice.actions;

export default todoListSlice.reducer;