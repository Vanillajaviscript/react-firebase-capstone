import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Login = () => {
  const navigate = useNavigate();
  const {googleLogin, user} = UserAuth();
  const handleGoogleLogin = async () => {
    try {
      await googleLogin()
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if(user != null) {
      navigate('/account')
    }
  }, [user])



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