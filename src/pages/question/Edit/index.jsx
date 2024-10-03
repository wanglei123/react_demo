import React from 'react';
import {useDispatch} from "react-redux";
import {changeSelectId} from "../../../store/componentReducer/index.js";
import EditCanvas from "./EditCanvas.jsx";
import useLoadQuestionData from "../../../hooks/useLoadQuestionData";
import styles from './index.module.scss'
import LeftPanel from "./LeftPanel.jsx";
import RightPanel from "./RightPanel.jsx";
import Header from "./Header.jsx";

const Index = () => {
	const {loading, data} = useLoadQuestionData()
	const dispatch = useDispatch();
	const clearSelectedId = () => {
		dispatch(changeSelectId(''))
	}

	return (
		<div className={styles.container}>
			<div style={{height: '40px', backgroundColor: '#fff'}}>
				<Header />
			</div>
			<div className={styles['content-wrapper']}>
				<div className={styles['content']}>
					<div className={styles.left}>
						<LeftPanel />
					</div>
					<div className={styles.main} onClick={(e) => clearSelectedId()}>
						<div className={styles['canvas-wrapper']}>
							<EditCanvas loading={loading} />
						</div>
					</div>
					<div className={styles.right}>
						<RightPanel />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;