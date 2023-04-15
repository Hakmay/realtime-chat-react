import React, { useState } from "react"
import Add from "../assets/addAvatar.png"

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


function Register() {
  const [error, setError] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try  {
      const response = await createUserWithEmailAndPassword(auth, email, password)    
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          setError(true);
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            })
          });
        }
      );
    }catch(error) {
      setError(true);
    }
    
    
  }

  

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Realtime Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username"/>
                <input type="email" placeholder="Email" />
                <input type="password"  placeholder="Password"/>
                <input style={{display:"none"}} type="file" id="file" />
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button type="submit">Sign Up</button>
                {error && <span style={{color:"red"}}>Something went wrong</span>}
            </form>
            <p>You do not have a account? Login</p>
        </div>
    </div>
    
  )
}

export default Register