import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {addTodo, removeTodo, toggleCompleted} from "../store/todoList.js";
import {nanoid} from "nanoid";
import axios from "axios";

const TodoList = () => {
	// 从configureStore里取到对应的reducer
	const todoList = useSelector(reducer => reducer.todoList);
	const dispatch = useDispatch();

	useEffect(() => {
		axios.get('/api/test').then(res => {
			console.log(222, res)
		})
	}, [])

	const del = (id) => {
		dispatch(removeTodo({id})) // 参数必须是个对象
	}
	const toggle = (id) => {
		dispatch(toggleCompleted({id}))
	}

	const add = () => {
		const newTodo = {
			id: nanoid(5),
			title: '新的',
			completed: false
		}
		dispatch(addTodo(newTodo))
	}

	return (
		<div>
			<div>todoList redux</div>
			<div>
				<button onClick={() => add()}>新增</button>
			</div>
			<ul>
				{todoList.map(todo => {
					const {id, title, completed} = todo
					return <li key={id} style={{textDecoration: completed ? 'line-through' : ''}}>
						<span onClick={() => toggle(id)}>{title}</span>
						&nbsp;
						<button onClick={() => del(id)}>删除</button>
					</li>

				})}
			</ul>
			
		</div>
	);
};

export default TodoList;