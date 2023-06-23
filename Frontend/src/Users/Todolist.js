import React, { useState } from 'react';
import './Todolist.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';

const TodoListPage = () => {
  const [todos, setTodos] = useState(['']);

  const handleTodoChange = (i, event) => {
    const values = [...todos];
    values[i] = event.target.value;
    setTodos(values);
  };

  const handleKeyPress = (i, event) => {
    if(event.key === 'Enter'){
      event.preventDefault();
      const values = [...todos];
      values.splice(i + 1, 0, '');
      setTodos(values);
    }
  };

  const handleBlur = (i) => {
    const values = [...todos];
    if (values[i] === '' && values.length > 1) {
      values.splice(i, 1);
      setTodos(values);
    }
  };

  const currentDate = new Date().toLocaleDateString();

  return (
    <>
      <Header />
      <Navbar />
      <div className="todo-list-page">
        <h1>My Hadya Todo List</h1>
        <div className="todo-textarea-wrapper">
          <div className="date-container">
            <div className="date">{currentDate}</div>
          </div>
          <div className="title-date-wrapper">
            <input
              className="diary-title"
              type="text"
              placeholder="Todo List Title"
            />
          </div>
          {todos.map((todo, idx) => (
            <div key={idx} className="todo-input-wrapper">
              <input
                type="checkbox"
                className="todo-checkbox"
              />
              <input
                className="todo-input"
                type="text"
                value={todo}
                onChange={e => handleTodoChange(idx, e)}
                onKeyPress={e => handleKeyPress(idx, e)}
                onBlur={() => handleBlur(idx)}
                placeholder="Write your todo here..."
              />
            </div>
          ))}
          <button className="save-button">Save</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TodoListPage;
