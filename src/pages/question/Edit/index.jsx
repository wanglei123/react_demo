import React from 'react';
import EditCanvas from "./EditCanvas.jsx";
import styles from './index.module.scss'

const Index = () => {
	return (
		<div className={styles.container}>
			<div style={{height: '40px', backgroundColor: '#fff'}}>Header</div>
			<div className={styles['content-wrapper']}>
				<div className={styles['content']}>
					<div className={styles.left}>left</div>
					<div className={styles.main}>
						<div className={styles['canvas-wrapper']}>
							<EditCanvas />
						</div>
					</div>
					<div className={styles.right}>right</div>
				</div>
			</div>
		</div>
	);
};

export default Index;