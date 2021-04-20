import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';
import {useSelector,useDispatch} from 'react-redux';
import {adduser2,identity} from './action/index';

function SidebarChat(props) {

    const email1=useSelector(state=>state.main.user1.email);
    const email2=useSelector(state=>state.main.user2?.email);
    
    const dispatch=useDispatch();
    function setuser2(){
        dispatch(adduser2({
            name:props.n.name,
            display:props.n.display,
            email:props.n.email
        }))
    //console.log(email1,email2);
    // var ans = email1.localeCompare(email2);
    //         var res = "";
    //         if (ans == -1) {
    //             res = email1+email2
    //         } else if (ans == 0) {
    //             res = email1+email2
    //         } else {
    //             res =email2+email1
    //         }
    //     dispatch(identity(res));

    }

    return (
        <>
        <div className='SidebarChat' onClick={setuser2} >
            <Avatar src={props.n.display}/>
            
            <div className='sidebarChat__info' >
                <h2>{props.n.name}</h2>
                <p>Say hello!!</p>
            </div>
        </div>
        
        </>
    )
}

export default SidebarChat
