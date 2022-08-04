import './login.scss';
import {useState} from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"
const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    
  }
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
    <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
    <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
    <button type="submit">Login</button>
    {error ? <span>Wrong email or password!</span> : false}
      </form>
    </div>
  )
}

export default Login;