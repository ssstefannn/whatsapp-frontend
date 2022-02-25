import React, { useEffect, useState } from "react";
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Login from "./Login";
import Pusher from 'pusher-js';
import axios from './axios';
import {BrowserRouter as Router,Switch,Route, useHistory} from "react-router-dom";
import { Redirect } from "react-router-dom";
import {auth} from './firebase';
import { useStateValue } from "./StateProvider";

function App() {

  const [{user,currentChat},dispatch] = useStateValue();
  const history = useHistory();
  const [messages,setMessages] = useState([]);

  useEffect(()=> {
    axios.get('/messages/sync',{
      params:{
        chat: currentChat
      }
    })
      .then(response => {
        setMessages(response.data);
      });
  },[currentChat]);

  useEffect( () => {
    const pusher = new Pusher('a60f68b438325ff636a1', {
      cluster: 'eu'
    });

    const channelMessages = pusher.subscribe('messages');
    channelMessages.bind('inserted', (data) =>{
      setMessages([...messages,data]);
    });
    channelMessages.bind('dropped', ()=>{
      setMessages([]);
    });
    return () => {
      channelMessages.unbind_all();
      channelMessages.unsubscribe();
    };
  },[messages]);

 


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path = "/login">
            <Login/>
          </Route>

          <Route path={`${user?"/":null}`}>
            <div className="app__body">
              <Sidebar/>
              {currentChat!==null && <Chat messages={messages}/>}
            </div>
          </Route>

          <Redirect to="/login"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
