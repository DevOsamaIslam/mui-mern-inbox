import { combineReducers } from 'redux'

import messages from './allMessages'
import singleMessage from './messageReducer'

export default combineReducers({
	messages,
	singleMessage
})