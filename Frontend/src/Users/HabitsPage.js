import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HabitsPage.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import HealthImage from './Health.png';

const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const HabitsPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedDays, setSelectedDays] = useState(new Array(7).fill(false));

  const navigate = useNavigate();

  const handleDayClick = (index) => {
    const newSelectedDays = [...selectedDays];
    newSelectedDays[index] = !newSelectedDays[index];
    setSelectedDays(newSelectedDays);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to create a new habit and save it to your backend or local storage
    // ...

    // Navigate to the All Habits page
    navigate('/habits');
  };

  return (
    <>
      <Header />
      <Navbar />
      <h1 class="habit-title">Create a Habit</h1>
      <div className="habits-page">
        <div className="health-image-container">
          <img src={HealthImage} alt="Health" />
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Description:
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <label>
            Start Date:
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </label>
          <label>
            End Date:
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </label>
          <label>
            Number of Days:
            <div className="days-of-week">
              {daysOfWeek.map((day, index) => (
                <div
                  key={index}
                  className={`day ${selectedDays[index] ? 'selected' : ''}`}
                  onClick={() => handleDayClick(index)}
                >
                  {day}
                </div>
              ))}
            </div>
          </label>
          <button type="submit" className="habits-button">Create Habit</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default HabitsPage;
