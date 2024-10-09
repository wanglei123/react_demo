import React from 'react';
import classNames from "classnames";
import {message} from 'antd';
import {useDispatch} from "react-redux";
import {changeSelectId} from "../../../store/componentReducer/index.js";
import useGetComponentInfo from "../../../hooks/useGetComponentInfo.js";
import styles from "./layers.module.scss";

const Layers = () => {
	const dispatch = useDispatch();
	const {componentList, selectedId} = useGetComponentInfo();

	function handlTitleClick(fe_id){
		const curComp = componentList.find(c => c.fe_id === fe_id);
		if(curComp && curComp.isHidden){
			message.info('不能选中隐藏的组件')
			return
		}
		if(fe_id !== selectedId){
			dispatch(changeSelectId(fe_id))
		}
	}

	return (
		<div>
			{componentList.map(c => {
				const {fe_id, isLocked, isHidden, title} = c

				const titleDefaultClassName = styles.title
				const selectedClassName = styles.selected
				const titleClassName = classNames({
					[titleDefaultClassName] : true,
					[selectedClassName] : fe_id === selectedId
				})
				return <div key={fe_id} className={styles.wrapper}>
					<div className={titleClassName} onClick={() => handlTitleClick(fe_id)}>{title}</div>
					<div className={styles.handler}>右侧按钮</div>
				</div>
			})}
			
		</div>
	);
};

export default Layers;