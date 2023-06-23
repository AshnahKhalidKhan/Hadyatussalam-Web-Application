import { Link } from 'react-router-dom';

function LoginSignUpButton() {
  return (
    <div className="header-buttons">
      <Link to="/login"><button>LOGIN</button></Link>
      <Link to="/signup"><button>SIGNUP</button></Link>
    </div>
  );
}

export default LoginSignUpButton;
