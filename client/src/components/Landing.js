import './Landing.css'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const Landing = () => {
	let messages = useSelector(state => state.messages)
	const navigate = useNavigate()
	const goToMessages = () => navigate('/messages')
	return (
		<div className="landing">
			<h1>Hello Osama</h1>
			<h2>You have {' '}
				{messages.filter(message => !message.isRead).length + ' '} 
				unread messages out of {' '}
				{messages.length}</h2>
			<Button variant='contained' onClick={goToMessages}>View Inbox</Button>
		</div>
	)
}

export default Landing