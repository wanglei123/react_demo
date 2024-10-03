import React from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Typography, Space} from 'antd';
import {LeftOutlined} from "@ant-design/icons";
import EditToolBar from "./EditToolBar.jsx";
import styles from './header.module.scss'


const {Title} = Typography;

const Header = () => {
	const nav = useNavigate();
	return (
		<div className={styles['header-wrapper']}>
			<div className={styles.header}>
				<div className={styles['left']}>
					<Space>
						<Button type='link' icon={<LeftOutlined />} onClick={() => nav(-1)}>返回</Button>
						<Title level={5} style={{marginBottom: 0}}>标题</Title>
					</Space>
				</div>
				<div className={styles['main']}>
					<EditToolBar />
				</div>
				<div className={styles['right']}>
					<Space>
						<Button>取消</Button>
						<Button type='primary'>保存</Button>
					</Space>
				</div>
			</div>
		</div>
	);
};

export default Header;