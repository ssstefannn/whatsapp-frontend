import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat';
import AddChatForm from './AddChatForm';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined} from '@material-ui/icons';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { auth } from './firebase';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import axios from './axios';
import Pusher from 'pusher-js';



function Sidebar() {

  const [{user,currentChat,chats},dispatch] = useStateValue();
  const [addChatPressed,setAddChatPressed] = useState(false);

  const closeAddChatForm= (event) => {
    const addChatForm =  document.getElementById("addChatForm");
    if(addChatPressed && !(addChatForm.contains(event.target))){
      setAddChatPressed(false);
    }
  }

  useEffect( () => {
    document.addEventListener("click", closeAddChatForm);
    return () => {
      document.removeEventListener("click",closeAddChatForm);
    }
  },[addChatPressed]);

  const signOut = (e) => {
    if(user) {
      auth.signOut();
      dispatch({
        type: 'SET_USER',
        user: null,
        username: "placeholder",
        avatarUrl: "https://www.ourhenhouse.org/wp-content/uploads/2014/07/image2.jpg",
        currentChat: null,
        chats: Array(0),
      });
    }
  };

  useEffect( () => {
    axios.get('/user/chats',{
      params: {
        email:user
      }
    }).then(response=>{
      dispatch({
        type : 'UPDATE_CHATS',
        chats : response.data,
      });
    });
  },[]);


  useEffect( () => {
    const pusher = new Pusher('a60f68b438325ff636a1', {
      cluster: 'eu'
    });
    const channelChats = pusher.subscribe('chats');
    channelChats.bind('inserted', (data) =>{
      pusher.unsubscribe('chats');
      if(currentChat!==data._id){
        axios.get('/user/chats',{
          params: {
            email:user
          }
        }).then(response=>{
          dispatch({
            type : 'UPDATE_CHATS',
            chats : response.data,
          });
        });
      }
    });
    return () => {
      channelChats.unbind_all();
      channelChats.unsubscribe();
    };
  },[chats,currentChat]);

  return (
    <div className="sidebar">
        <div className="sidebar__header">
          <Avatar
          src="https://www.ourhenhouse.org/wp-content/uploads/2014/07/image2.jpg"/>
          <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon/>
            </IconButton>

            <IconButton onClick={() => {
              setAddChatPressed(addChatPressed?false:true);
              }}>
              <AddCommentIcon/>
            </IconButton>

            <div className="sidebar__addChatFormContainer" id="addChatForm">
              {addChatPressed && <AddChatForm />}
            </div>

            <Link to="/login">
              <IconButton 
              onClick={signOut}>
                <ExitToAppIcon/>
              </IconButton>
            </Link>
            
            
            
          </div>

        </div>

        <div className="sidebar__search">
          <div className="sidebar__searchContainer">
            <SearchOutlined/>
            <input placeholder="Search or start new chat" type="text"/>
          </div>
        </div>

        <div className="sidebar__chats">

          { 
          chats?chats.map( (chat)=>(
              <SidebarChat chat={chat}/>
            )):<></>
          
          }
        </div>
    </div>
  )
}

export default Sidebar