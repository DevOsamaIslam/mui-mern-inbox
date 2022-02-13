import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Message from "./Message";
import messageAction from "../state/actions/message.action";

const View = () => {
	let dispatch = useDispatch()
	// get the message id from the URL
	let id = useParams().id
	// retrieve the message from the state store if exists
	let message = useSelector(state => state.singleMessage)
	// change its status to read
	useEffect(() => dispatch(messageAction.read(id)), [])
	if(message && message._id === id)
		return <Message showAllContent={true} data={message} />
	else {
		// if the message does not exist in the store, 
		// fetch it from the database using its id
		dispatch(messageAction.getMessage(id))
		return <h3>Loading...</h3>
	} 
}

export default View