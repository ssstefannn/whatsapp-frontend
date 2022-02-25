import React, { useEffect, useState } from 'react';
import './AddUserForm.css';
import { useStateValue } from './StateProvider';
import axios from './axios';

function AddUserForm() {


const [userEmail,setUserEmail] = useState("");
const [{currentChat,user},dispatch] = useStateValue();

const addUserToChat = (event) => {
    event.preventDefault();
    setUserEmail("");
    document.body.click();
    axios.post('/addtochat',{
        user : userEmail,
        chat : currentChat,
    });
};

useEffect(() => {
  document.getElementById("addusertochatinput").focus();
}, [])

  return (
    <div className='addUserForm'>
        <h3>Add user to chat</h3>
        <form>
            <input 
            type="text"
            id="addusertochatinput"
            placeholder='User Email'
            value={userEmail}
            onChange={(e)=>{
            setUserEmail(e.target.value)
            }}/>
            <button 
            type="submit"
            onClick={addUserToChat}
            >Add</button>
        </form>
        
    </div>
  )
}

export default AddUserForm