import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Nav.css'
import { 	
	AppBar,
	Toolbar,
	Typography,
	Button,
} from '@mui/material'

import messageAction from '../state/actions/message.action'

const Nav = () => {
	let dispatch = useDispatch()
	let messages = useSelector(state => state.messages)
	const navigate = useNavigate()

	const goToMessages = () => navigate('/messages')
	const goHome = () => navigate('/')
	const resetRead = () => dispatch(messageAction.resetRead())

	return (
			<AppBar position='sticky' color='primary'>
				<Toolbar>
					<Typography onClick={goHome} className='brand' variant='h6' component='div' sx={{ flexGrow: 1 }}>
						Inbox App
					</Typography>
					<Button color="inherit">Osama</Button>
					<Button 
						onClick={goToMessages}
						color='inherit'>
							Inbox ({messages.filter(msg => !msg.isRead).length})
					</Button>
					<Button 
						onClick={resetRead}
						color='inherit'>
							Reset
					</Button>
				</Toolbar>
			</AppBar>

	)
}

export default Nav