import React, { useEffect, useState } from 'react';
import './AddChatForm.css';
import axios from './axios';
import { useStateValue } from './StateProvider';

function AddChatForm() {


  const [chatName,setChatName] = useState("");
  const [{user},dispatch] = useStateValue();

  const createNewChat = (event) => {

    event.preventDefault();
    setChatName("");
    document.body.click();

      axios.post('/chats/new',{
        name : chatName,
        avatarUrl : "https://th.bing.com/th/id/R.55948dae1695af129524227799e4cb4a?rik=%2b5C7Glggyn4c4g&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f4T9%2foXy%2f4T9oXyEec.gif&ehk=MaEkEjJ14PbnF7s%2fX1aGAGIKkQKgi62WeMGMMkawXF0%3d&risl=&pid=ImgRaw&r=0"
      },{
        params: {
          email : user
        }
      });

  };

  useEffect(() => {
    document.getElementById("makenewchatinput").focus();
  }, [])
  


  return (
    <div className='addChatForm'>
      <h3>Create a new chat</h3>
      <form>
        <input 
        type="text"
        id="makenewchatinput"
        placeholder='Chat Name'
        value={chatName}
        onChange={(e)=>{
          setChatName(e.target.value)
        }}
        />
        <button 
        type="submit"
        onClick={createNewChat}
        >Create</button>
      </form>
      
    </div>
  )
}

export default AddChatForm