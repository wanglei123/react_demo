import { useSelector} from "react-redux";

function useGetComponentInfo() {
	const components = useSelector(reducer => reducer.components);
	const {componentList = [], selectedId = '', copiedComponent = null} = components

	const selectComponent = componentList.find(item => item.fe_id === selectedId);

	return {
		componentList,
		selectedId,
		selectComponent,
		copiedComponent
	}

}
export default useGetComponentInfo;