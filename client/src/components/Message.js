import { useNavigate } from 'react-router-dom'
import './Message.css'

import {
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
} from '@mui/material'

const Message = ({data, showAllContent}) => {
	const navigate = useNavigate()
	const goToMessage = id => navigate(`/message/${id}`)
		return (<Card className='card'>
							<CardContent>
								{data.isRead ? 
													'' : 
													<Typography className='unread' gutterBottom>
														UNREAD
													</Typography>
								}

								<Typography variant="h5" component="div">
									<p>{data.subject}</p>
								</Typography>
									<hr/>
								<Typography variant="body2">
									{showAllContent ? data.content : data.content.substr(0, 20)+'...'}
								</Typography>
							</CardContent>
							{showAllContent ? 
							'' :  
								<CardActions>
									<Button onClick={() => goToMessage(data._id)} size="small">View</Button>
								</CardActions>
							}
						
						</Card>
	)
}

export default Message