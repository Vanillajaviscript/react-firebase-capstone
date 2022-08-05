import './App.css';
import NavBar from "./components/NavBar";
import Account from './pages/Account';
import Home from './pages/Home';
import Login  from './pages/Login'
import {Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Protected from "./components/Protected";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="App">
    <AuthContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route 
          path='/account' 
          element={
          <Protected>
            <Account/>
          </Protected>
          } 
        />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
