import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const {logOut, user} = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut()
    } catch(error) {
      console.log(error)
    }
  };

  return (
    <div>
      <p>Welcome, {user?.displayName}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Account;