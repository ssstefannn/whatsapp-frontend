import React, { useEffect, useState } from 'react';
import './Chat.css';
import {Avatar, IconButton} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import DeleteIcon from '@material-ui/icons/Delete';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SelectInput from '@material-ui/core/Select/SelectInput';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';
import { useStateValue } from "./StateProvider";
import Message from './Message';
import Emoticons from './Emoticons';
import AddUserForm from './AddUserForm';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

function Chat({messages}) {

  const [emoticonPressed,setEmoticonPressed] = useState(false);
  const [{user,username,avatarUrl,input,currentChat},dispatch] = useStateValue();
  const [chatAvatar,setChatAvatar] = useState("");
  const [chatName,setChatName] = useState("Chat Name");
  const [addUserPressed,setAddUserPressed] = useState(false);

const closeAddUserForm= (event) => {
    const addUserForm =  document.getElementById("addUserForm");
    if(addUserPressed && !(addUserForm.contains(event.target))){
        setAddUserPressed(false);
    }
    }

    useEffect( () => {
    document.addEventListener("click", closeAddUserForm);
    return () => {
        document.removeEventListener("click",closeAddUserForm);
    }
    },[addUserPressed]);



  const closeEmoticonList = (event) => {
    const emoticons =  document.getElementById("emoticons");
    if(emoticonPressed && !(emoticons.contains(event.target))){
      setEmoticonPressed(false);
    }
  }

  useEffect( () => {
    document.addEventListener("click", closeEmoticonList);
    return () => {
      document.removeEventListener("click",closeEmoticonList);
    }
  },[emoticonPressed]);

  useEffect( () => {
    axios.get('/chat/header',{
      params:{
        currentChat : currentChat,
      },
    }).then(response => {
      setChatAvatar(response.data.avatarUrl);
      setChatName(response.data.name);
    });
  },[currentChat]);


  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
      message: input,
      username: username,
      email: user,
      chat: currentChat,
      avatarUrl: avatarUrl,
      timestamp: (()=> new Date().toUTCString() )()
    });

    dispatch({
      type: 'UPDATE_INPUT',
      input: "",
    });
  };

  const deleteAllMessages = async (e) => {
    e.preventDefault();

    await axios.delete('/messages/delete',{
      params: {
        currentChat : currentChat,
      },
    });
  };

  const leaveChat = async (e) => {
    e.preventDefault();

    await axios.delete('/chat/leave',{
      params: {
        email : user,
        chat : currentChat
      }
    }).then(response => {
      dispatch({
        type: 'LEAVE_CHAT',
        currentChat : null,
        chatToRemove : currentChat,
      });
    });
  };

  return (
    <div className="chat">
        <div className="chat__header">
          <Avatar src={chatAvatar}/>

          <div className="chat__headerInfo">
            <h3>{chatName}</h3>
          </div>

          <div className="chat__headerRight">
            <IconButton onClick={()=>
              setAddUserPressed(addUserPressed?false:true)
              }>
              <PersonAddIcon/>
            </IconButton>

            <div className="chat__addUserFormContainer" id="addUserForm">
              {addUserPressed && <AddUserForm/>}
            </div>

            <IconButton onClick={leaveChat}>
              <ExitToAppIcon/>
            </IconButton>

            <IconButton
            onClick={deleteAllMessages}>
              <DeleteIcon/>
            </IconButton>
          </div>
        </div>

        <div className="chat__body">


          {messages.map(message => (
            message.chat===currentChat && <Message message={message}/>
          )).reverse()}
        </div>

        <div className="chat__footer">
          <IconButton
          onClick={(() => setEmoticonPressed(emoticonPressed?false:true))}>
            <InsertEmoticonIcon/>
          </IconButton>

          <div className="emoticons__container" id="emoticons">
            {emoticonPressed && <Emoticons/>}
          </div>
            
          <form>
            <input 
            id="input"
            value={input}
            onChange={(e)=>{
              dispatch({
                type:'UPDATE_INPUT',
                input:e.target.value})
            }}
            placeholder="Type a message"
            type="text"
            />
            <button
            onClick={sendMessage}
            type="submit">
              Send a message
            </button>
          </form>
          <MicIcon/>
        </div>
    </div>
  )
}

export default Chat