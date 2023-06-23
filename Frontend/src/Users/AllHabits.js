// AllHabits.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AllHabits.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import HabitTrackerProgressBar from './HabitTrackerProgressBar';

const AllHabits = () => {
  const hardcodedHabits = [
    { title: 'Exercise', description: 'Do squats', frequency: '3 times per week', startdate: '2023-04-25', enddate: '2023-05-15' },
    { title: 'Meditation', description: 'Pray 5 times', frequency: 'Daily', startdate: '2023-04-25', enddate: '2023-05-10' },
    { title: 'Reading', description: 'Codex Cracks', frequency: '5 times per week', startdate: '2023-04-25', enddate: '2023-05-05' }
  ];

  const [habits, setHabits] = useState(hardcodedHabits);
  const navigate = useNavigate();

  const handleCreateHabitClick = () => {
    navigate('/create-habit');
  };

  // Sort habits by date in descending order (latest first)
  const sortedHabits = habits.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Header />
      <Navbar />
      <div className="Habits-top">
        <h1>My Habit Tracker</h1>
      </div>
      <div className="container">
        <div className="habits-list">
          <div className="header-row">
            <h2>View all your habits</h2>
            <div className="create-habit-button-container">
              <button className="create-habit-button" onClick={handleCreateHabitClick}>+</button>
            </div>
          </div>
          {sortedHabits.map((habit, index) => (
  <div key={index} className="habit">
    <div className="habit-details">
      <div>
        <h3 className="habit-title">{habit.title}</h3>
      <h4 className="habit-description">{habit.description}</h4>
    </div>
    <div className="habit-dates-container">
      <div className="date-box">
      <p>{new Date(habit.startdate).toLocaleDateString('en-GB')}</p>
      </div>
      <div className="date-box">
      <p>{new Date(habit.enddate).toLocaleDateString('en-GB')}</p>
      </div>
      <div className="frequency-box">
        <p>{habit.frequency}</p>
      </div>
    </div>
  </div>
  <div className="habit-progress-container">
    <HabitTrackerProgressBar startDate={new Date(habit.startdate)} endDate={new Date(habit.enddate)} frequencyPerWeek={3} frequencyPerDay={2} />
  </div>
</div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllHabits;
