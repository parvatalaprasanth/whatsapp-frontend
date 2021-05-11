import React, { useState, useEffect } from 'react';
import { auth,db,firebase } from "./firebase";
import './Mainpage.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {adduser1} from './action/index';
import {useSelector,useDispatch} from 'react-redux';



function Mainpage() {

    const dispatch=useDispatch();

    var provider = new firebase.auth.GoogleAuthProvider();

    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            dispatch(adduser1(user));

            if(user){
            db
              .collection('users')
              .doc(user?.email)
              .set({
                  email: user?.email,
                  display: user?.photoURL,
                  name: user?.displayName
              })}
        })
    },[])


    const authWithGoogle=()=>{
        auth.signInWithPopup(provider).then(auth => {
           console.log("succuse");
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className="main__body" >
        <div className="main__message">
            Welcome to whatsapp
        </div>
        <div className="main__message main__receiver">
            Login with Google
        </div>
        <div className="main__message ">
            Click here to 
        </div>
        <div className="main__message main__receiver">
            <button onClick={authWithGoogle}>Login</button>
        </div>
        <div className="main__message">
            by parvatala prasanth
        </div>
        
      
    </div>
  );
};

export default Mainpage
