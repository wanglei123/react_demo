import {configureStore} from '@reduxjs/toolkit';
import countReducer from './count';
import todoListReducer from './todoList';

export default configureStore({
	reducer: {
		count: countReducer,
		todoList: todoListReducer,
		// 扩展 其他模块
	}

})