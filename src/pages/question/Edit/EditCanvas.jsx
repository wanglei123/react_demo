import React from 'react';
import {Spin} from 'antd';
import QuestionTitle from "../../../components/QuestionComponents/Title/Component.jsx";
import QuestionInput from "../../../components/QuestionComponents/Input/Component.jsx";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo";
import {getComponentConfByType}  from  '../../../components/QuestionComponents';
import styles from './editCanvas.module.scss';

function getComponent(componentInfo){
	const {type, props} = componentInfo;
	const componentConf = getComponentConfByType(type);
	if(!componentConf){
		return null;
	}
	const {Component} = componentConf;
	return <Component {...props} />

}

const EditCanvas = ({loading}) => {
	const {componentList = []} = useGetComponentInfo()
	console.log(222, componentList)

	if(loading){
		return <div style={{textAlign: 'center', marginTop: '20px'}}>
			<Spin />
		</div>
	}
	return (
		<div className={styles.canvas}>
			{componentList.map((item, index) => {
				const {fe_id = ''} = item
				return <div className={styles['component-wrapper']} key={fe_id}>
					<div className={styles.component}>
						{getComponent(item)}
					</div>
				</div>
			})}
		</div>
	);
};

export default EditCanvas;