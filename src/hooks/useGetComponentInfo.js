import { useSelector} from "react-redux";

function useGetComponentInfo() {
	const components = useSelector(reducer => reducer.components);
	const {componentList = [], selectedId = ''} = components

	const selectComponent = componentList.find(item => item.fe_id === selectedId);

	return {
		componentList,
		selectedId,
		selectComponent
	}

}
export default useGetComponentInfo;