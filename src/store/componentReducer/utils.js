export function getNextSelectId(fe_id, componentList){
	const visibleComponentList = componentList.filter((component) => !component.isHidden)
	const index = visibleComponentList.findIndex(item => item.fe_id === fe_id);
	if(index < 0){
		return ''
	}
	// 重新计算selectId
	let newSelectId = ''
	const length = visibleComponentList.length
	if(length === 1){
		newSelectId = ''
	} else {
		if(index + 1 === length){ // 要删除最后一个，要选中上一个
			newSelectId = visibleComponentList[index - 1].fe_id
		} else {
			newSelectId = visibleComponentList[index + 1].fe_id
		}
	}
	return newSelectId
}