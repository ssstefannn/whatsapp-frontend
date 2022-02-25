import { Avatar } from '@material-ui/core'
import React, { useEffect } from 'react'
import './SidebarChat.css'
import { useStateValue } from './StateProvider'

function SidebarChat({chat}) {

  const [{currentChat},dispatch]=useStateValue();



  return (
    <div className="sidebarChat" onClick={(e)=>{
      dispatch({
      type:'OPEN_CHAT',
      currentChat:chat._id
    });
      }}>
        <Avatar src={chat.avatarUrl}/>
        <div className="sidebarChat__info">
            <h2>{chat.name}</h2>
        </div>
    </div>
  )
}

export default SidebarChat