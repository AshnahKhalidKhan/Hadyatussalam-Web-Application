import React from 'react';
import './App.css';
import Profile from './Users/Profile';
import Home from './Users/Home';
import DiaryPage from './Users/DiaryPage';
import Login from './Users/Login';
import Community from './Users/Community';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllHabits from './Users/AllHabits';
import HabitsPage from './Users/HabitsPage';
import Logout from './Users/Logout';
import AllDiaries from './Users/AllDiaries';
import Signup from './Users/Signup';
import AllTodoLists from './Users/AllTodolist';
import Todolist from './Users/Todolist';
import Budget from './Users/Budget';
import MentorUsers from './Mentors/MentorUsers';
import Qibla from './Users/Qibla';



function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="/create-lists" element={<Todolist />} />
          <Route path="/budgets" element={<Budget />} />
          <Route path="/todolists" element={<AllTodoLists />} />
          <Route path="/diaries" element={<AllDiaries />} />
          <Route path="/habits" element={<AllHabits />} />
          <Route path="/create-habit" element={<HabitsPage />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mentors" element={<MentorUsers />} />
          <Route path="/qibla" element={<Qibla />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
