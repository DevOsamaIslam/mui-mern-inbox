import { useSelector } from "react-redux"
import Message from "./Message"
import './Messages.css'

const Messages = () => {

	let messages = useSelector(state => state.messages)
	if(messages)
		return (
			<div className="messages-container">
				{messages.map(message => <Message key={message._id} showAllContent={false} data={message}/>)}
			</div>
		)
	else return <h3>Loading...</h3>
}

export default Messages