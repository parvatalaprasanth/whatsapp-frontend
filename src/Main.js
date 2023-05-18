import Sidebar from './Sidebar';
import Chat from './Chat';
import Mainpage from './Mainpage';
import {useSelector,useDispatch} from 'react-redux';
import './Main.css';
import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';
import {messages} from './action/index';

function Main() {

    //const[messages,setMessages]=useState([]);
    const[trigger,settrigger]=useState([]);
    const dispatch=useDispatch();

    const user1=useSelector(state=>state.main.user1); 
    const user2=useSelector(state=>state.main.user2); 
    const id=useSelector(state=>state.main.identity); 

    useEffect(() => {
        console.log(id);
        axios.get('/messages/sync?id='+id,{
         
             
        })
        .then(response=>{
        dispatch(messages(response.data))
        console.log(response.data)
        })
    }, [trigger,user2])

    useEffect(() => {
        // const pusher = new Pusher('cee6b9ad2c2f3563f0c7', {
        //     cluster: 'ap2'
        //   });

          let pusher = new Pusher('app-key', {
            wsHost: 'socket.gleemeet.com',
         
    
            encrypted: true,
            disableStats: true,
        
        
            enabledTransports: ['ws', 'wss'],
        });
       
          const channel = pusher.subscribe('message');
          channel.bind('inserted', function(data) {
           
            settrigger(JSON.stringify(data));
          });
    }, []);
    
    const login=<div><div className="main">
    { <Mainpage/>}
    </div> </div>
    const page=<div><div className="main">
         
    <div className="main__body"> 
    {user1!=null && <Sidebar/>}
     {user1!=null && <Chat/> }
     </div>
   </div></div>

   

    return (
        <>
        {user1===null && login}
        {user1!==null && page}
          
    </>
    )
}

export default Main
