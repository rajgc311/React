import { useState } from 'react'
import './App.css'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function App() {
  const[error,setError]=useState(false);
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");




  const handleSubmit = (e) => {
    e.preventDefault();

    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // setError(false);
        alert('logged in successfully');
        // ...
      })
      .catch((error) => {
  setError(true);
      });

  }
  return (
    <div className="App">
      <div>
        <form action="" onSubmit={handleSubmit}>
          Username: <input type="text" onChange={(e)=>setEmail(e.target.value)}/> <br />
          Password: <input type="text" onChange={(e)=>setPassword(e.target.value)} /> <br />
          <button type='submit'>Login</button> <br />
          {error && <span>Wrong information</span>}

        </form>
      </div>
    </div>
  )
}

export default App;
