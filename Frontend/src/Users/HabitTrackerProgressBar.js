import React, { useState } from 'react';
import './HabitTrackerProgressBar.css';

function HabitTrackerProgressBar({ startDate, endDate, frequencyPerWeek, frequencyPerDay }) {
  const [today, setToday] = useState(new Date());

  const totalWeeks = Math.floor((endDate - startDate) / (7 * 24 * 60 * 60 * 1000));

  const totalDaysWeekly = totalWeeks * frequencyPerWeek;

  const totalDaysDaily = (endDate - startDate) / (24 * 60 * 60 * 1000) * frequencyPerDay;

  const totalDaysToComplete = totalDaysWeekly + totalDaysDaily;

  const daysCompleted = (today - startDate) / (24 * 60 * 60 * 1000) * frequencyPerDay;

  const progress = Math.min(daysCompleted / totalDaysToComplete * 100, 100);

  return (
    <div className="habit-progress-bar">
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="progress-label">{progress.toFixed(0)}%</div>
    </div>
  );
}

export default HabitTrackerProgressBar;
