import {configureStore} from '@reduxjs/toolkit';
import countReducer from './count';
import todoListReducer from './todoList';
import userReducer from './userReducer';
import componentReducer from './componentReducer';

export default configureStore({
	reducer: {
		count: countReducer,
		todoList: todoListReducer,
		user: userReducer,
		// 组件列表
		components: componentReducer,
		// 扩展 其他模块
	}

})