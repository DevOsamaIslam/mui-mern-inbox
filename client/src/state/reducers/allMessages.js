import types from "../types"

const allMessages = (state = [], {type, data}) => {
	switch(type) {
		case types.getAllMessages:
			return data
		case types.read:
			return state.map(message => {
				if(message._id === data.id)
					message.isRead = true
				return message
			})
		case types.resetRead:
			return state.map(message => {
				message.isRead = false
				return message
			} )
		default:
			return state
	}
}

export default allMessages

