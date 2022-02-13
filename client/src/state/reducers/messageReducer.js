import types from "../types"

const messageReducer = (state = {}, {type, data}) => {
	switch(type) {
		case types.getMessage:
			return data
		default:
			return state
	}
}

export default messageReducer