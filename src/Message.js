import React from 'react'
import './Message.css'
import { useStateValue } from './StateProvider'
import {Avatar} from '@material-ui/core'

function Message({message}) {

    const [{user,username,avatarUrl},dispatch] = useStateValue();



  return (
    <div className={`message ${message.email === user && "message__receiver"}`}>
        <Avatar 
        className='message__avatar'
        src={message.avatarUrl}/>
        <span className='message__name'>{message.username.toUpperCase()}</span>
        {message.message}
        <br/>
        <span className='message__timestamp'>{message.timestamp}</span>
    </div>
  )
}

export default Message