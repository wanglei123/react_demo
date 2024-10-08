import React from 'react';
import useGetComponentInfo from "../../../hooks/useGetComponentInfo.js";
import {getComponentConfByType} from "../../../components/QuestionComponents";
import {useDispatch} from "react-redux";
import {editProps} from "../../../store/componentReducer/index.js";

const Blank = () => {
	return (
		<div>未选中组件</div>
	)
}

const ComponentProp = () => {
	const dispatch = useDispatch();
	const {selectComponent} = useGetComponentInfo()
	if (!selectComponent) {
		return <Blank />
	}
	const {type, props, fe_id, isLocked} = selectComponent
	const componentConf = getComponentConfByType(type)
	if(!componentConf){
		return <Blank />
	}
	const {PropComponent} = componentConf

	const changeForm = (value) => {
		if(selectComponent === null){
			return
		}
		dispatch(editProps({fe_id, newProps: value}))
	}
	return (
		<div>
			<PropComponent {...props} onChange={changeForm} disabled={isLocked} />
		</div>
	);
};

export default ComponentProp;