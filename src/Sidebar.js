import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import DonutLarge from '@material-ui/icons/DonutLarge';
import { Avatar,IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {FormatListNumbered, SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import {useSelector,useDispatch} from 'react-redux';
import {userlist} from './action/index';
import { db } from "./firebase";

function Sidebar() {
    const num=[1,2,3,4];
    const user1=useSelector(state=>state.main.user1);
     const users=useSelector(state=>state.main.userlist)
    const dispatch=useDispatch();

    useEffect(() => {
        if(user1) {
            const arr=[]
            const fetchBlogs=async()=>{
                const users=db.collection('users');
                const data=await users.get();
                data.docs.forEach(item=>{
                    arr.push(item.data())
                   })
                dispatch(userlist(arr.filter(function(item){
                    return item.email != user1.email;
                })));
            }
            fetchBlogs()
        }
        else{
            dispatch(userlist([]))
        }
    
      }, [user1])
    
    
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src={user1.photoURL}/>
                <h4>{user1.displayName}</h4>
                <div className='sidebar__headerRight'>
                    
                    <IconButton>
                     <DonutLarge/>
                    </IconButton>
                    <IconButton>
                     <ChatIcon/>
                    </IconButton>
                    <IconButton>
                     <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlined/> 
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
            <div className='sidebar__chats'>
                {users?.map(num => (
                    <SidebarChat n={num} key={num.email} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
