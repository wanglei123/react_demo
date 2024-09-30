import React from 'react';
import {Tabs} from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import ComponentProp from "./ComponentProp.jsx";

const RightPanel = () => {
	const tabItems = [
		{
			key: 'prop',
			label: (<span>属性</span>),
			children: <ComponentProp />,
			icon: <AndroidOutlined />,
		},
		{
			key: 'setting',
			label: (<span>
				设置
			</span>),
			children: <div>设置</div>,
			icon: <AppleOutlined />,
		}
	]
	return (
		<div>
			<Tabs items={tabItems} defaultActiveKey="prop" />
		</div>
	);
};

export default RightPanel;