import './App.css';
import NavBar from "./components/NavBar";
import Account from './pages/Account';
import Home from './pages/Home';
import Login  from './pages/Login'
import {Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

const App = () => {
  return (
    <div className="App">
    <AuthContextProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
