import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./MessageSender.css"
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { color } from '@mui/system';
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "./firebase";


function MessageSender() {
    const [{ user }, dispatch] = useStateValue();
    const [input,setInput] =useState("");
    const [imageUrl,setImageUrl]=useState("");

    const handleSubmit =(e)=>{


        e.preventDefault();

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.fieldvaue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        // some db valu
        setInput("");
        setImageUrl("");
    };
  return (
    <div className='messaggeSender'>
        <div className='messageSender_top'>
             <Avatar src={user.photoURL}/>
             <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='messageSender_input'
                placeholder={`whats in your mind'${user.displayName}?`} 
                />
                <input 
                valu={imageUrl}
                onChange={(e)=> setImageUrl(e.target.value)}
                placeholder='image url(optional)'/>
                <button onClick={handleSubmit} type="submit">
                    Hidden submit

                </button>
             </form>

        </div>

        <div className='messageSender_bottom'>
            <div className='messageSender_option'>
           
           <VideocamIcon style={{color: "red"}}/>
           
           <h4>Live Video</h4>
            </div>
            <div className='messageSender_option'>
           
           <PhotoLibraryIcon style={{color: "green"}}/>
           
           <h4>Photo/Video</h4>
            </div>
            <div className='messageSender_option'>
           
           <InsertEmoticonIcon style={{color: "yellow"}}/>
           
           <h4>Feeling/Activity</h4>
            </div>




        </div>


    </div>
  )
}

export default MessageSender