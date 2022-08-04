import './login.scss';
import {useState} from 'react';

const Login = () => {
  return (
    <div className="login">
      <form>
    <input type="email" placeholder="email" />
    <input type="password" placeholder="password" />
    <button type="submit">Login</button>
    <span>Wrong email or password!</span>
      </form>
    </div>
  )
}

export default Login;