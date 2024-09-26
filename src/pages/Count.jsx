import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increase, decrease} from "../store/count.js";


const Count = () => {
	// 从configureStore里取到对应的reducer
	const count = useSelector(reducer => reducer.count);

	const dispatch = useDispatch();
	return (
		<>
			<span>count: {count}</span>
			<button onClick={() => dispatch(increase())}>+</button>
			<button  onClick={() => dispatch(decrease())}>-</button>
		</>
	);
};

export default Count;