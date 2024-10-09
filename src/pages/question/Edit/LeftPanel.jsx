import React from 'react';
import {Tabs} from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import ComponentLib from "./ComponentLib.jsx";
import Layers from "./Layers";

const LeftPanel = () => {
	const tabItems = [
		{
			key: 'componentLib',
			label: (<span>组件库</span>),
			children: <ComponentLib />,
			icon: <AndroidOutlined />,
		},
		{
			key: 'layers',
			label: (<span>
				图层
			</span>),
			children: <Layers />,
			icon: <AppleOutlined />,
		}
	]
	return (
		<div>
			<Tabs items={tabItems} defaultActiveKey="componentLib" />
		</div>
	);
};

export default LeftPanel;