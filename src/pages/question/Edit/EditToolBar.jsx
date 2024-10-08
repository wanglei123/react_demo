import React from 'react';
import {Space, Button, Tooltip} from 'antd';
import {useDispatch} from "react-redux";
import {deleteComponent, changeComponentHidden, toggleLockedComponent} from '../../../store/componentReducer/index.js';
import {DeleteOutlined, EyeInvisibleOutlined, LockOutlined} from '@ant-design/icons';
import useGetComponentInfo from "../../../hooks/useGetComponentInfo.js";

const EditToolBar = () => {
	const dispatch = useDispatch();
	const {selectedId,selectComponent} = useGetComponentInfo()

	const handleDeleteComponent = () => {
		dispatch(deleteComponent())
	}

	const handleHiddenComponent = () => {
		dispatch(changeComponentHidden({fe_id:selectedId, isHidden: true }))
	}

	const handleLockedComponent = () => {
		dispatch(toggleLockedComponent({fe_id: selectedId}))
	}
	return (
		<Space >
			<Tooltip title='删除'>
				<Button shape='circle' icon={<DeleteOutlined />} onClick={handleDeleteComponent} ></Button>
			</Tooltip>
			<Tooltip title='隐藏'>
				<Button shape='circle' icon={<EyeInvisibleOutlined />} onClick={handleHiddenComponent} ></Button>
			</Tooltip>
			<Tooltip title='锁定'>
				<Button shape='circle' icon={<LockOutlined />} onClick={handleLockedComponent}
				type={selectComponent?.isLocked ?  'primary' : 'default'}></Button>
			</Tooltip>
		</Space>
	);
};

export default EditToolBar;