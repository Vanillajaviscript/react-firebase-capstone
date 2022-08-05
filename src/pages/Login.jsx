import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';

const Login = () => {

  const {googleLogin} = UserAuth();
  const handleGoogleLogin = async () => {
    try {
      await googleLogin()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>Sign in</h1>
      <div>
        <GoogleButton onClick={handleGoogleLogin} />
      </div>
    </div>
  )
}

export default Login;