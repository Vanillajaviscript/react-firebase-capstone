import { Link } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext'

const Header = () => {

  const {user, logOut } = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      {user?.displayName ? <button onClick={handleLogout}>Logout</button> : <Link to='/login'>Login</Link> }
    </div>
  )
}

export default Header;