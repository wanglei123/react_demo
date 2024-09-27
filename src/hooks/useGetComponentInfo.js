import {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useRequest} from "ahooks";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {resetComponents} from "../store/componentReducer";

function useGetComponentInfo() {
	const components = useSelector(reducer => reducer.components);
	const {componentList = []} = components


	return {
		componentList
	}

}
export default useGetComponentInfo;