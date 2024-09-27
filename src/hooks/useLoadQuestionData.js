import {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useRequest} from "ahooks";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {resetComponents} from "../store/componentReducer";

function useLoadQuestionData() {
	const {id = '100'} = useParams()
	const dispatch = useDispatch();
	const {data, loading, error, run} = useRequest(async (id) => {
		if(!id) throw new Error ('id is required')
		const res = await axios.get(`/api/question/${id}`)
		return res.data.data
	}, {
		manual: true
	})

	useEffect(() => {
		run(id)
	}, [id])

	useEffect(() => {
		if(!data) return
		const {title = '', componentList = []} = data
		dispatch(resetComponents({componentList}))
	}, [data]);

	return {loading, data, error}

}
export default useLoadQuestionData;