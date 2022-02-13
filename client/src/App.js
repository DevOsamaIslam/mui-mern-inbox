import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import messageAction from './state/actions/message.action'
import Nav from './components/Nav'
import Messages from './components/Messages'
import Landing from './components/Landing'
import View from './components/View'

import './App.css'

export default function App() {
  let dispatch = useDispatch()
  dispatch(messageAction.getAll())
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/message/:id' element={<View/>}/>
      </Routes>
    </Router>
  );
}
