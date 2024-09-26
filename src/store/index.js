import {configureStore} from '@reduxjs/toolkit';
import countReducer from './count';
import todoListReducer from './todoList';
import userReducer from './userReducer';

export default configureStore({
	reducer: {
		count: countReducer,
		todoList: todoListReducer,
		user: userReducer,
		// 扩展 其他模块
	}

})