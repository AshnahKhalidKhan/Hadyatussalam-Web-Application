import React, { useState } from 'react';
import axios from '../API/axios';
import './DiaryPage.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const DiaryPage = () => {
  const [title, setTitle] = useState('');
  //const [priority, setPriority] = useState('');
  const priority = false;
  const [diaryentry, setDiaryEntry] = useState('');

  async function InsertIntoDiary()
  {
    console.log("Title: ", title);
    console.log("DiaryEntry: ", diaryentry);
    console.log("Priority: ", priority);
    console.log(document.cookie);

    const token = document.cookie.split('=')[1];

    const configuration =
    {
      method: "post",
      url: "http://localhost:8000/Path/User/Diary",
      headers:
      {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
      data:
      {
        title: title,
        diaryentry: diaryentry,
        priority: priority,
      }
    };
    console.log(configuration);
    await axios(configuration)
      .then((result) => {
        if(result["status"] == 200)
        {
          console.log(result["message"]);
          //window.location.href = "/diary"
        }
      }).catch((error) => {
        error = new Error();
      });
  }

  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <Header />
      <Navbar />
      <div className="diary-page">
        <h1>My Hadya Diary</h1>
        <div className="diary-textarea-wrapper">
          <div className="date-container"> {/* Move the date container outside of the title-date-wrapper */}
            <div className="date">{currentDate}</div>
          </div>
          <div className="title-date-wrapper">
            <input
              className="diary-title"
              type="text"
              placeholder="Diary Title"
              id = "title"
              value = {title}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length > 0 && value.length <= 100) {
                  setTitle(value);
                }
              }}
            />
          </div>
          <textarea
            className="diary-textarea"
            placeholder="Write your thoughts here..."
            id = "diaryentry"
            value = {diaryentry}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length <= 7000) {
                setDiaryEntry(value);
              }
            }}
          />
          <button className="save-button" onClick={InsertIntoDiary}>Save</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DiaryPage;
