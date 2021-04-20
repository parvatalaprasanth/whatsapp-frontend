import React, { useState, useEffect } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined,AttachFile} from '@material-ui/icons';
import ChatIcon from '@material-ui/icons/Chat';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {adduser1} from './action/index';
import {useSelector,useDispatch} from 'react-redux';
import { auth,db,firebase } from "./firebase";
import axios from './axios';






function Chat() {

    const user2=useSelector(state=>state.main.user2);
    const obj=useSelector(state=>state.main);
    const messages=useSelector(state=>state.main.messages);

    const[input,setinput]=useState("");

    const dispatch=useDispatch();
    
    function logout(){
        auth.signOut();
        dispatch(adduser1(""));
    }

    const sendMessage = async (e) => {
        e.preventDefault();
        if(input===""){
            return
        }
        await axios.post('/messages/new',{
            identity:obj.identity,
            user1:obj.user1.email,
            user2:obj.user2.email,
            message:input,
            timestamp:new Date().toLocaleString()
        })

        setinput("")
      };

    console.log(messages);

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar  src={user2?.display}/>
                <div className="chat__headerinfo">
                    <h3>{user2?.name}</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                     <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                     <AttachFile/>
                    </IconButton>
                    <IconButton onClick={logout}>
                     <ExitToAppIcon/>
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>
                {messages?.map(item=>(
                <p className={'chat__message' + " "+(item.user1==obj.user1.email ?'chat__receiver': "") }>
                <span className='chat__name'>{item.message}</span>
                     
                <span className='chat__timestamp'>{item.timestamp}</span>
                </p> ))}
                {/* <p className='chat__receiver chat__message'>
                <span className='chat__name'>Papra</span>
                     is massagethis
                <span className='chat__timestamp'>{new Date().toLocaleString ( )}</span>
                </p> */}
            </div>
            <div className='chat__footer'>
                {/* <InsertEmoticonIcon/> */}
                <form onSubmit={sendMessage}>
                    <input value={input} onChange={e=>setinput(e.target.value)} placeholder="Type a message" type="text" />
                    <button  onClick={sendMessage} type="submit"><SendSharpIcon/></button>
                </form>
            </div>
        </div>
    )
}

export default Chat
