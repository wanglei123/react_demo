import React from 'react';
import {Spin} from 'antd';
import {useDispatch} from "react-redux";
import classNames from "classnames";
import useBindCanvasKeyPress	 from "../../../hooks/useBindCanvasKeyPress.js";
import {changeSelectId} from "../../../store/componentReducer";
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
	useBindCanvasKeyPress()
	const {componentList = [], selectedId = ''} = useGetComponentInfo()
	const dispatch = useDispatch();

	const handleClick = (e, id) => {
		e.stopPropagation() // 阻止冒泡
		dispatch(changeSelectId(id))
	}

	if(loading){
		return <div style={{textAlign: 'center', marginTop: '20px'}}>
			<Spin />
		</div>
	}
	return (
		<div className={styles.canvas}>
			{componentList.filter(item => !item.isHidden).map((item, index) => {
				const {fe_id = ''} = item
				const wrapperDefaultClassName = styles['component-wrapper']
				const selectedClassName = styles['selectId']
				const lockedClassName = styles['locked']
				const wrapperClassName = classNames({
					[wrapperDefaultClassName] : true,
					[selectedClassName] : selectedId === fe_id,
					[lockedClassName]: item.isLocked
				})
				return <div className={wrapperClassName} key={fe_id} onClick={(e) => handleClick(e,fe_id)}>
					<div className={styles.component}>
						{getComponent(item)}
					</div>
				</div>
			})}
		</div>
	);
};

export default EditCanvas;