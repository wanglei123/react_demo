import React from 'react';
import {Space, Button, Tooltip} from 'antd';
import {useDispatch} from "react-redux";
import {DeleteOutlined, EyeInvisibleOutlined, LockOutlined, CopyOutlined, BlockOutlined} from '@ant-design/icons';
import {deleteComponent, changeComponentHidden, toggleLockedComponent, copySelectedComponent, pasteComponent } from '../../../store/componentReducer/index.js';
import useGetComponentInfo from "../../../hooks/useGetComponentInfo.js";

const EditToolBar = () => {
	const dispatch = useDispatch();
	const {selectedId,selectComponent, copiedComponent} = useGetComponentInfo()

	const handleDeleteComponent = () => {
		dispatch(deleteComponent())
	}

	const handleHiddenComponent = () => {
		dispatch(changeComponentHidden({fe_id:selectedId, isHidden: true }))
	}

	const handleLockedComponent = () => {
		dispatch(toggleLockedComponent({fe_id: selectedId}))
	}

	const handleCopyComponent = () => {
		dispatch(copySelectedComponent())
	}

	const handlePasteComponent = () => {
		dispatch(pasteComponent())
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
			<Tooltip title='复制'>
				<Button shape='circle' icon={<CopyOutlined />} onClick={handleCopyComponent}></Button>
			</Tooltip>
			<Tooltip title='粘贴'>
				<Button shape='circle' disabled={copiedComponent === null} icon={<BlockOutlined />} onClick={handlePasteComponent}></Button>
			</Tooltip>
		</Space>
	);
};

export default EditToolBar;