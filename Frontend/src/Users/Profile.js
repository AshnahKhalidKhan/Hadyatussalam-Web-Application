import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from '../API/axios';
import Navbar from './Navbar';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import './Profile.css';
import profileImage from './Profile.png';


const Profile = () => {
  const [roleValue, setRoleValue] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [mentorstatus, setMentorStatus] = useState('');

  let { role } = useParams();

  useEffect(() => {
    async function fetchData() {
      console.log(role);
      if (role === 'user') {
        setRoleValue('USER');
      } else if (role === 'mentor') {
        setRoleValue('MENTOR');
      } else if (role === 'admin') {
        setRoleValue('ADMIN');
      }
      await LoadProfile();
    }
    fetchData();
  }, [role]);

  const cookies = new Cookies();

  async function LoadProfile() {
    console.log(role);
      if (roleValue === 'USER')
      {
        // set configurations
        //const token = document.cookie.split('=')[1];
        const token = cookies.get('token');
        console.log(token);
        const configuration = {
          method: 'get',
          url: 'http://localhost:8000/Path/User/Profile',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // make the API call
        await axios(configuration)
          .then((result) => {
            // Perform your authentication logic here
            if (result['status'] === 200) {
              // handleLoginError(result.data.message);
              console.log(result.data.message);
              setEmail(result.data.email);
              setName(result.data.name);
              setPhoneNumber(result.data.phonenumber);
            } else {
              // handleLoginError(result.data.error);
              setEmail(result.data.error);
              setName(result.data.error);
              setPhoneNumber(result.data.error);
              console.log(result.data.error);
            }
          })
          .catch((error) => {
            const errorMessage = error.response?.data?.error || error.message;
            setEmail(errorMessage);
              setName(errorMessage);
              setPhoneNumber(errorMessage);
              console.log(errorMessage);
            console.log(errorMessage);
          });

          const configuration1 = {
            method: 'get',
            url: 'http://localhost:8000/Path/User/MentorRequest',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
  
          await axios(configuration1)
          .then((result) => {
            // Perform your authentication logic here
            if (result['status'] == 200) {
              // handleLoginError(result.data.message);
              console.log(result.data.message);
              setMentorStatus(result.data.mentor_request_status);
            } else {
              // handleLoginError(result.data.error);
              setMentorStatus(result.data.error);
              console.log(result.data.error);
            }
          })
          .catch((error) => {
            const errorMessage = error.response?.data?.error || error.message;
            setMentorStatus(errorMessage);
            console.log(errorMessage);
          });
      }
      else if (roleValue === 'MENTOR')
      {
        // set configurations
        const token = document.cookie.split('=')[1];
        const configuration = {
          method: 'get',
          url: 'http://localhost:8000/Path/Mentor/Profile',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        // make the API call
        await axios(configuration)
          .then((result) => {
            // Perform your authentication logic here
            if (result['status'] == 200) {
              // handleLoginError(result.data.message);
              console.log(result.data.message);
              setEmail(result.data.email);
              setName(result.data.name);
              setPhoneNumber(result.data.phonenumber);
            } else {
              // handleLoginError(result.data.error);
              setEmail(result.data.error);
              setName(result.data.error);
              setPhoneNumber(result.data.error);
              console.log(result.data.error);
            }
          })
          .catch((error) => {
            const errorMessage = error.response?.data?.error || error.message;
            setEmail(errorMessage);
              setName(errorMessage);
              setPhoneNumber(errorMessage);
              console.log(errorMessage);
            console.log(errorMessage);
          });
      }
      else if (roleValue === 'ADMIN')
      {
        // set configurations
        const token = document.cookie.split('=')[1];
        const configuration = {
          method: 'get',
          url: 'http://localhost:8000/Path/Admin/Profile',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        // make the API call
        await axios(configuration)
          .then((result) => {
            // Perform your authentication logic here
            if (result['status'] == 200) {
              // handleLoginError(result.data.message);
              console.log(result.data.message);
              setEmail(result.data.email);
              setName(result.data.name);
              setPhoneNumber(result.data.phonenumber);
            } else {
              // handleLoginError(result.data.error);
              setEmail(result.data.error);
              setName(result.data.error);
              setPhoneNumber(result.data.error);
              console.log(result.data.error);
            }
          })
          .catch((error) => {
            const errorMessage = error.response?.data?.error || error.message;
            setEmail(errorMessage);
              setName(errorMessage);
              setPhoneNumber(errorMessage);
              console.log(errorMessage);
            console.log(errorMessage);
          });
      }
  }


  return (
    <>
    <Header />
      <Navbar />
      <h1 class="Profiletop">My Profile</h1>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-image-container">
          <img src={profileImage} alt="Profile" />
          </div>
          <div className="profile-info">
          <h3 className="profile-name">{name}</h3>
            <h3 className="profile-details">{roleValue}</h3>
            <p className="profile-details">{email}</p>
            <p className="profile-details">{phonenumber}</p>
          </div>
          <div className="mentor-status">
            <h1>Mentor Status:</h1>
            <p>{mentorstatus}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
