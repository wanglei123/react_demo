import React from 'react';
import {Space, Button, Tooltip} from 'antd';
import {useDispatch} from "react-redux";
import {deleteComponent, changeComponentHidden} from '../../../store/componentReducer/index.js';
import {DeleteOutlined, EyeInvisibleOutlined} from '@ant-design/icons';
import useGetComponentInfo from "../../../hooks/useGetComponentInfo.js";

const EditToolBar = () => {
	const dispatch = useDispatch();
	const {selectedId} = useGetComponentInfo()
	const handleDeleteComponent = () => {
		dispatch(deleteComponent())
	}

	const handleHiddenComponent = () => {
		dispatch(changeComponentHidden({fe_id:selectedId, isHidden: true }))
	}
	return (
		<Space >
			<Tooltip title='标题'>
				<Button shape='circle' icon={<DeleteOutlined />} onClick={handleDeleteComponent} ></Button>
			</Tooltip>
			<Tooltip title='隐藏'>
				<Button shape='circle' icon={<EyeInvisibleOutlined />} onClick={handleHiddenComponent} ></Button>
			</Tooltip>
		</Space>
	);
};

export default EditToolBar;