import { useSelector} from "react-redux";

function useGetComponentInfo() {
	const components = useSelector(reducer => reducer.components);
	const {componentList = [], selectedId = ''} = components

	return {
		componentList,
		selectedId
	}

}
export default useGetComponentInfo;