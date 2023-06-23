import React, { useState, useEffect } from 'react'; // Add the useEffect import
import { useNavigate } from 'react-router-dom';
import axios from '../API/axios';
import './AllDiaries.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const AllDiaries = () => {
  // const hardcodedDiaries = [
  //   { title: 'Diary 1', date: '2023-04-25'},
  //   { title: 'Diary 2', date: '2023-04-25'},
  //   { title: 'Diary 3', date: '2023-04-25'}
  // ];

  //const [diaries, setDiaries] = useState(hardcodedDiaries);
  const [diaries, setDiaries] = useState([]);
  // Fetch diary entries when the component mounts
  useEffect(() => {
    const LoadDiaryEntries = async () => {
      try {
        const token = document.cookie.split('=')[1];
        //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NjM5ZTFiMzc1NzcxY2MxZmRhZDg1YyIsImlhdCI6MTY4NDI1MzI2MywiZXhwIjoxNjg0ODU4MDYzfQ.JJiYydmb_PQWf4GvZ_zVwC2CQpNXRn7MZdFrTNasrfg";

        const configuration = {
          method: "get",
          url: "http://localhost:8000/Path/User/Diary",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios(configuration);
        if (response.status === 200) {
          const diaryEntries = response.data.DiaryEntries;         
          setDiaries(diaryEntries);
          //console.log(diaryEntries);
        }
      } catch (error) {
        console.error(error);
        // const diaryEntries = [
        //   { title: 'Diary Entry 1', date: '2023-04-25' },
        //   { title: 'Diary Entry 2', date: '2023-04-26' },
        //   { title: 'Diary Entry 3', date: '2023-04-27' },
        // ];          
        // setDiaries(diaryEntries);
        // console.log(diaryEntries);
      }
    };
    LoadDiaryEntries();
  }, []);

  const navigate = useNavigate();

  const handleCreateDiaryClick = () => {
    navigate('/diary');
  };

  // Sort diaries by date in descending order (latest first)
  const sortedDiaries = diaries.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Header />
      <Navbar />
      <div className="Diaries-top">
        <h1>My Diary Tracker</h1>
      </div>
      <div className="container">
        <div className="diaries-list">
          <div className="header-row">
            <h2>View all your Diaries</h2>
            <div className="create-diary-button-container">
              <button className="create-diary-button" onClick={handleCreateDiaryClick}>+</button>
            </div>
          </div>
            {sortedDiaries.map((diary, index) => (
              <div key={index} className="diary-details">
                <h3 className="diaries-title">{diary.title}</h3>
                <p className="diary-date">{new Date(diary.date).toLocaleDateString('en-GB')}</p>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllDiaries;
