import React, { useState, useEffect } from 'react';
import './Expenses.css';
import deleteIcon from './delete.svg';

function Expenses() {
  const [expenses, setExpenses] = useState([
    { name: '', amount: 0, date: '' },
  ]);

  // Load saved data from local storage when component mounts
  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  const saveExpenses = () => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  };

  const addExpense = () => {
    setExpenses([...expenses, { name: '', amount: 0, date: '' }]);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleNameChange = (event, index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index].name = event.target.value;
    setExpenses(updatedExpenses);
  };

  const handleAmountChange = (event, index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index].amount = parseFloat(event.target.value);
    setExpenses(updatedExpenses);
  };

  const handleDateChange = (event, index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index].date = event.target.value;
    setExpenses(updatedExpenses);
  };

  return (
    <div className="expenses-container">
      <div className="expenses-list">
        <h2>Expenses</h2>
        {expenses.map((expense, index) => (
          <ExpenseRow
            key={index}
            expense={expense}
            index={index}
            onDelete={deleteExpense}
            onNameChange={handleNameChange}
            onAmountChange={handleAmountChange}
            onDateChange={handleDateChange}
          />
        ))}
        <button onClick={addExpense}>Add Expense</button>
        <button onClick={saveExpenses}>Save Expenses</button>
        <ExpensesTotal expenses={expenses} />
      </div>
    </div>
  );
}




function ExpenseRow({ expense, index, onDelete, onNameChange, onAmountChange, onDateChange }) {
  return (
    <div className="expense-row">
      <div className="expense-details">
        <img
          src={deleteIcon}
          alt="Delete Expense"
          className="delete-icon"
          onClick={() => onDelete(index)}
        />
        <input type="checkbox" className="expense-checkbox" />
        <div className="expense-info">
          <div className="expense-name-date-container">
            <input
              type="text"
              value={expense.name}
              onChange={(event) => onNameChange(event, index)}
              placeholder="Expense Name"
            />
            <input
              type="date"
              value={expense.date}
              onChange={(event) => onDateChange(event, index)}
            />
          </div>
        </div>
        <div className="expense-amount-wrapper">
          <input
            type="number"
            value={expense.amount}
            onChange={(event) => onAmountChange(event, index)}
            placeholder="Amount"
          />
        </div>
      </div>
    </div>
  );
}

function ExpensesTotal({ expenses }) {
  const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="expenses-total">
      <div className="total-label">Total:</div>
      <div className="total-amount">{totalAmount}</div>
    </div>
  );
}

export default Expenses;
