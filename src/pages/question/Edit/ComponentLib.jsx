import React from 'react';
import {Typography} from "antd";
import {useDispatch} from "react-redux";
import {nanoid} from "nanoid";
import {addComponent} from "../../../store/componentReducer/index.js";
import {componentConfGroup} from "../../../components/QuestionComponents/index.js";
import styles from "./ComponentLib.module.scss";

const {Title} = Typography;

function getComponent(c){
	const {title, type, Component, defaultProps} = c
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(addComponent({
			fe_id: nanoid(),
			title,
			type,
			props: defaultProps
		}))
	}

	return <div key={type} className={styles.wrapper} onClick={handleClick}>
		<div className={styles.component} >
			<Component />
		</div>
	</div>

}

const ComponentLib = () => {
	return (
		<>
			{componentConfGroup.map((group,index) => {
				const {groupId, groupName, components} = group;
				return <div key={groupId}>
					<Title level={3} style={{fontSize: '16px', marginTop : index > 0 ? '20px' : '0'}}>{groupName}</Title>
					<div>
						{components.map(item => {
							return getComponent(item)
						})}
					</div>
				</div>
			})}
		</>
	);
};

export default ComponentLib;