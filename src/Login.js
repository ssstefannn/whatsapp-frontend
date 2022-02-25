import React, { useEffect, useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import axios from './axios';

function Login() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [{user,username,avatarUrl},dispatch] = useStateValue();
  const history=useHistory();

  useEffect( () => {
    if(user){
      history.push("/");
    }
  },[user])

  const signIn = e => {
    e.preventDefault();
    auth
       .signInWithEmailAndPassword(email,password)
       .then(auth => {
          axios.get('/user',{
            params :{
              email : email,
            }
          })
          .then(response => {
            dispatch({
              type : 'SET_USER',
              user : response.data.email,
              username : response.data.email.replace(/@.*/g,""),
              avatarUrl : response.data.avatarUrl,
              currentChat : null,
              chats: Array(0),
            });
          });
        })
       .catch(error => alert(error.message))
  }

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email,password)
      .then((auth) => {
        if (auth){ (async () =>{
          await axios.post('/users/new', {
            email: email,
            username : username,
            avatarUrl : avatarUrl,
          }).then(response => {
            dispatch({
              type : 'SET_USER',
              user : response.data.email,
              username : response.data.email.replace(/@.*/g,""),
              avatarUrl : response.data.avatarUrl,
              currentChat : null,
              chats : Array(0),
            });
            history.push('/');
          });
        })();
      }})
      .catch(error => alert(error.message));
};


  return (
    <div className="login">
      <img 
      className="login__logo"
      src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-and-lines-1/2/11-512.png" alt="" />
      <form>
        <h5>Email</h5>
        <input 
        type="text"
        value={email}
        onChange={e=>setEmail(e.target.value)}
        />

        <h5>Password</h5>
        <input 
        type="password"
        value={password}
        onChange={e=>setPassword(e.target.value)}
        />

      <button
      type="submit"
      className='login__signInButton'
      onClick={signIn}>
        Sign In
      </button>
      </form>

      
      <button
      className='login__signUpButton'
      onClick={signUp}>
        Create an account
      </button>
    </div>
  )
}

export default Login