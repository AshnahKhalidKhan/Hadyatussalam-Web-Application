import { useState } from 'react';
import axios from '../API/axios';
import './Signup.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import profileImage from './Profile.png';

const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [numberError, setNumberError] = useState('');
  const [signUpErrors, setSignUpError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);

    if (e.target.value.length < 4 || e.target.value.length > 24) {
      setNameError('Name should be between 4 and 24 characters.');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(e.target.value)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);

    if (e.target.value.length !== 11) {
      setNumberError('Number should be exactly 11 digits.');
    } else {
      setNumberError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{14,}$/;
    if (!passwordPattern.test(e.target.value)) {
      setPasswordError('Password should have at least 14 characters, at least one uppercase letter, at least one number, and at least one special character.');
    } else {
      setPasswordError('');
    }
  };

  const handleSignUpError = (e) => {
    setSignUpError(e);
  };

  async function handleSubmit() {
    console.log("Name",name);
    console.log("Pass", password);
    console.log("email",email);
    console.log("Number",number);
    // e.preventDefault();
    //  adminname, email, password
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:8000/Path/User/SignUp",
      data:
      {
        username: name,
        email: email,
        password: password,
        phonenumber: number
      },
    }
    // make the API call
    await axios(configuration)
      .then((result) => {
        // Perform your authentication logic here
        if(result["status"] == 200)
        {
          // console.log("hello")
          handleSignUpError(result.data.message);
          console.log(result.data.message);
          setEmail('');
          setName('');
          setPassword('');
          setNumber('');
          //window.location.href = "/Profile" //Yahaan par woh wala page ka address ayay ga jiss par jaana hai
        }
        else
        {
          handleSignUpError(result.data.error);
          console.log(result.data.error);
        }
      }).catch((error) => {
        const errorMessage = error.response?.data?.error || error.message;
        setSignUpError(errorMessage);
        console.log(errorMessage);
      });
    }

  return (
    <>
      <Header />
      <Navbar />
      <div className="profile-container">
        <div className="profile">
          <div className="profile-image-container">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="signup-page-container">
            <h3 className="signup">Sign Up</h3>
            <div className="signup-container">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
        <div className="error-message">{nameError}</div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        <div className="error-message">{emailError}</div>
      </div>
      <div className="form-group">
        <label htmlFor="number">Number:</label>
        <input type="tel" id="number" value={number} onChange={handleNumberChange} required />
        <div className="error-message">{numberError}</div>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        <div className="error-message">{passwordError}</div>
      </div>
      <div className="form-group">
        <div className="error-message">{signUpErrors}</div>
      </div>
      <button type="submit" onClick={handleSubmit}>SignUp</button>
      
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;