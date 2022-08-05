import './App.css';
import Header from "./components/Header";
import Account from './pages/Account';
import Home from './pages/Home';
import Login  from './pages/Login'
import {Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Protected from "./components/Protected";
import Main from "./components/Main";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const App = () => {
  return (
    <div className="App">
    <AuthContextProvider>
      <Header />
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
