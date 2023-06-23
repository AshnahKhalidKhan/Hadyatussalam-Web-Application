import './Header.css';
import logo from './Hadya.svg';
import { Link } from 'react-router-dom';
import LoginSignUpButton from './LoginSignUpButton';

function Header({ isLoggedIn = true }) {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const islamicDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {month: 'long', day: 'numeric', year: 'numeric'}).format(yesterday); // gets the Islamic date in local format for yesterday
  const capitalizedIslamicDate = islamicDate.toUpperCase(); // capitalizes the Islamic date
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
        <div className="header-date">{capitalizedIslamicDate}</div> {/* displays the capitalized Islamic date */}
      </div>
      {isLoggedIn ? (
        <div className="header-buttons">
          <Link to="/profile"><button>PROFILE</button></Link>
          <Link to="/logout"><button>LOGOUT</button></Link>
        </div>
      ) : (
        <LoginSignUpButton />
      )}
    </div>
  );
}

export default Header;
