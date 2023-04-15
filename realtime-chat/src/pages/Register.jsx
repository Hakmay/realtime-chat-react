import React, { useState } from "react"
import Add from "../assets/addAvatar.png"

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore"; 
import { useNavigate, Link } from "react-router-dom";


function Register() {
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try  {
      const response = await createUserWithEmailAndPassword(auth, email, password)    
      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(response.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "usersChats", response.user.uid), {});
            navigate("/");

          } catch (err) {
            console.log(err);
            setError(true);
          }
        });
      });
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
            <p>You do not have a account? <Link to="/login">Login</Link></p>
        </div>
    </div>
    
  )
}

export default Register