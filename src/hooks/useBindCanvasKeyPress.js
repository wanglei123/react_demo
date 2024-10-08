import React from 'react';
import {useKeyPress} from 'ahooks';
import {useDispatch} from "react-redux";
import {deleteComponent, copySelectedComponent, pasteComponent, selectPrevComponent,selectNextComponent } from '../store/componentReducer/index.js';

function isActiveElementValid(){
	const activeEle = document.activeElement

	return activeEle === document.body; // 判断光标是否focus input,如果是document.body，证明没有在输入框中

}

const useBindCanvasKeyPress = () => {
	const dispatch = useDispatch();
	// 删除
	useKeyPress(['backspace', 'delete'], () => {
		if(!isActiveElementValid()){
			return
		}
		dispatch(deleteComponent())
	})
	// 复制
	useKeyPress(['ctrl.c', 'meta.c'], () => {
		if(!isActiveElementValid()){
			return
		}
		dispatch(copySelectedComponent())
	})
	// 粘贴
	useKeyPress(['ctrl.v', 'meta.v'], () => {
		if(!isActiveElementValid()){
			return
		}
		dispatch(pasteComponent())
	})
	// 选中上一个
	useKeyPress(['uparrow'], () => {
		if(!isActiveElementValid()){
			return
		}
		dispatch(selectPrevComponent())
	})


	// 选中下一个
	useKeyPress(['downarrow'], () => {
		if(!isActiveElementValid()){
			return
		}
		dispatch(selectNextComponent())
	})
};

export default useBindCanvasKeyPress;