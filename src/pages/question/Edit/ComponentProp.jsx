import React from 'react';
import useGetComponentInfo from "../../../hooks/useGetComponentInfo.js";
import {getComponentConfByType} from "../../../components/QuestionComponents";

const Blank = () => {
	return (
		<div>未选中组件</div>
	)
}

const ComponentProp = () => {
	const {selectComponent} = useGetComponentInfo()
	if (!selectComponent) {
		return <Blank />
	}
	const {type, props} = selectComponent
	const componentConf = getComponentConfByType(type)
	if(!componentConf){
		return <Blank />
	}
	const {PropComponent} = componentConf
	return (
		<div>
			<PropComponent {...props} />
		</div>
	);
};

export default ComponentProp;