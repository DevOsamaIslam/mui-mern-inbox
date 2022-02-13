import axios from 'axios'
import types from '../types'

const BASE = 'http://localhost:5000/api'
const messageAction = {}

messageAction.getAll = () => async dispatch => {
	try {
		let { data } = await axios.get(`${BASE}/all`)
		if(data)
			dispatch({
				type: types.getAllMessages,
				data
			})
	} catch (error) {
		console.error({error});
	}
}

messageAction.getMessage = id => async dispatch => {
	try {
		let { data } = await axios.get(`${BASE}/single/${id}`)
		if(data)
			dispatch({
				type: types.getMessage,
				data
			})
	} catch (error) {
		console.error({error});
	}
}

messageAction.read = id => dispatch => {
	dispatch({
		type: types.read,
		data: {id}
	})
}

messageAction.resetRead = () => async dispatch => {
	try {
		await axios.patch(BASE + '/unread')
		dispatch({
			type: types.resetRead
		})
	} catch (error) {
		console.error({error});
	}
}

export default messageAction