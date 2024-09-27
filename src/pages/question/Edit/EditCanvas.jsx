import React from 'react';
import QuestionTitle from "../../../components/QuestionComponents/Title/Component.jsx";
import QuestionInput from "../../../components/QuestionComponents/Input/Components.jsx";
import styles from './editCanvas.module.scss';

const EditCanvas = () => {
	return (
		<div className={styles.canvas}>
			<div className={styles['component-wrapper']}>
				<div className={styles.component}>
					<QuestionTitle/>
				</div>
			</div>
			<div className={styles['component-wrapper']}>
				<div className={styles.component}>
				<QuestionInput/>
				</div>
			</div>
		</div>
	);
};

export default EditCanvas;