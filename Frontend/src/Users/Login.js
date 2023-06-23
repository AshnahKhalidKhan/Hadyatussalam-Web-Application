import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from '../API/axios';
import './Login.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import profileImage from './Profile.png';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loginErrors, setLoginError] = useState('');
  const [role, setRole] = useState('user');

  const handleNameChange = (e) => {
    setName(e.target.value);

    if (e.target.value.length < 4 || e.target.value.length > 24) {
      setNameError('Name should be between 4 and 24 characters.');
    } else {
      setNameError('');
    }
    setLoginError('');
  };

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setLoginError('');
  };

  // Email validation
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(e.target.value)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
    setLoginError('');
  };

  // Password validation
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{14,}$/;
    if (!passwordPattern.test(e.target.value)) {
      setPasswordError('Password should have at least 14 characters, at least one uppercase letter, at least one number, and at least one special character.');
    } else {
      setPasswordError('');
    }
    setLoginError('');
  };

  const handleLoginError = (e) => {
    setLoginError(e);
  };

  const navigate = useNavigate();
  const cookies = new Cookies();

  async function handleSubmit() {
    console.log("Name",name);
    console.log("Pass", password);
    console.log("email",email);
    if (role === 'user') {
      // set configurations
      const configuration = {
        method: 'post',
        url: 'http://localhost:8000/Path/User/Login',
        data: {
          username: name,
          email: email,
          password: password
        },
      };
      // make the API call
      await axios(configuration)
        .then((result) => {
          // Perform your authentication logic here
          if (result['status'] === 200) {
            handleLoginError(result.data.message);
            console.log(result.data.message);
            setEmail('');
            setName('');
            setPassword('');
            cookies.set('token', result.data.token, { path: '/', expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), httpOnly: true, secure: true });
            console.log(result.data.token);
            //window.location.href = "/Profile" //Yahaan par woh wala page ka address ayay ga jiss par jaana hai
            const profilePath = '/profile';
            const queryParams = `?role=${role}`; // Add the role as a query parameter
            const profileUrl = profilePath + queryParams;
            navigate(profileUrl); // Redirect to the "/Profile" page with the role query parameter            
          } else {
            handleLoginError(result.data.error);
            console.log(result.data.error);
          }
        })
        .catch((error) => {
          const errorMessage = error.response?.data?.error || error.message;
          setLoginError(errorMessage);
          console.log(errorMessage);
        });
    }
    else if (role === 'mentor') {
      // set configurations
      const configuration = {
        method: 'post',
        url: 'http://localhost:8000/Path/Mentor/Login',
        data: {
          mentorname: name,
          email: email,
          password: password
        },
      };
      // make the API call
      await axios(configuration)
        .then((result) => {
          // Perform your authentication logic here
          if (result['status'] === 200) {
            handleLoginError(result.data.message);
            console.log(result.data.message);
            setEmail('');
            setName('');
            setPassword('');
            // window.location.href = "/Profile" //Yahaan par woh wala page ka address ayay ga jiss par jaana hai
            const profilePath = '/Profile';
            const queryParams = `?role=${role}`; // Add the role as a query parameter
            const profileUrl = profilePath + queryParams;
            navigate(profileUrl); // Redirect to the "/Profile" page with the role query parameter 
          } else {
            handleLoginError(result.data.error);
            console.log(result.data.error);
          }
        })
        .catch((error) => {
          const errorMessage = error.response?.data?.error || error.message;
          setLoginError(errorMessage);
          console.log(errorMessage);
        });
    }
    else if (role === 'admin') {
      // set configurations
      const configuration = {
        method: 'post',
        url: 'http://localhost:8000/Path/Admin/Login',
        data: {
          adminname: name,
          email: email,
          password: password
        },
      };
      // make the API call
      await axios(configuration)
        .then((result) => {
          // Perform your authentication logic here
          if (result['status'] === 200) {
            handleLoginError(result.data.message);
            console.log(result.data.message);
            // console.log(document.cookies);
            setEmail('');
            setName('');
            setPassword('');
            // window.location.href = "/Profile" //Yahaan par woh wala page ka address ayay ga jiss par jaana hai            
            const profilePath = '/Profile';
            const queryParams = `?role=${role}`; // Add the role as a query parameter
            const profileUrl = profilePath + queryParams;
            navigate(profileUrl); // Redirect to the "/Profile" page with the role query parameter 
          } else {
            handleLoginError(result.data.error);
            console.log(result.data.error);
          }
        })
        .catch((error) => {
          const errorMessage = error.response?.data?.error || error.message;
          setLoginError(errorMessage);
          console.log(errorMessage);
        });
    }
  }


  return (
    <>
      <Header />
      <Navbar />
      <div className="profile-container">
        <div className="profile">
          <div className="profile-images-container">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="login-page-container">
            <h3 className="login">Login</h3>
            <div className="login-container">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
        <div className="error-message">{nameError}</div>
        </div>
              <div className="form-group">
  <label htmlFor="email">Email:</label>
  <input
    type="email"
    id="email"
    value={email}
    onChange={handleEmailChange}
    required
  />
  <div className="error-message">{emailError}</div>
</div>
<div className="form-group">
  <label htmlFor="password">Password:</label>
  <input
    type="password"
    id="password"
    value={password}
    onChange={handlePasswordChange}
    required
  />
  <div className="error-message">{passwordError}</div>
</div>
<div className="form-group">
        <div className="error-message">{loginErrors}</div>
      </div>
                <button type="submit" onClick={handleSubmit}>Sign In</button>
              <div className="toggle-container">
  <div
    className={`toggle-option ${role === 'user' ? 'active' : ''}`}
    onClick={() => handleRoleChange('user')}
  >
    <input
      type="radio"
      name="role"
      value="user"
      checked={role === 'user'}
      readOnly
    />
    <span>User</span>
  </div>
  <div
    className={`toggle-option ${role === 'admin' ? 'active' : ''}`}
    onClick={() => handleRoleChange('admin')}
  >
    <input
      type="radio"
      name="role"
      value="admin"
      checked={role === 'admin'}
      readOnly
    />
    <span>Admin</span>
  </div>
  <div
    className={`toggle-option ${role === 'mentor' ? 'active' : ''}`}
    onClick={() => handleRoleChange('mentor')}
  >
    <input
      type="radio"
      name="role"
      value="mentor"
      checked={role === 'mentor'}
      readOnly
    />
    <span>Mentor</span>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
