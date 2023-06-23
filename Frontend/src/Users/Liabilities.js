import React, { useState, useEffect } from 'react';
import './Liabilities.css';  
import deleteIcon from './delete.svg';

function Liabilities() {
  const [liabilities, setLiabilities] = useState([
    { name: '', amount: 0, date: '' },
  ]);

  // Load saved data from local storage when component mounts
  useEffect(() => {
    const savedLiabilities = localStorage.getItem('liabilities');
    if (savedLiabilities) {
      setLiabilities(JSON.parse(savedLiabilities));
    }
  }, []);

  const saveLiabilities = () => {
    localStorage.setItem('liabilities', JSON.stringify(liabilities));
  };

  const addLiability = () => {
    setLiabilities([...liabilities, { name: '', amount: 0, date: '' }]);
  };

  const deleteLiability = (index) => {
    const updatedLiabilities = liabilities.filter((_, i) => i !== index);
    setLiabilities(updatedLiabilities);
  };

  const handleNameChange = (event, index) => {
    const updatedLiabilities = [...liabilities];
    updatedLiabilities[index].name = event.target.value;
    setLiabilities(updatedLiabilities);
  };

  const handleAmountChange = (event, index) => {
    const updatedLiabilities = [...liabilities];
    updatedLiabilities[index].amount = parseFloat(event.target.value);
    setLiabilities(updatedLiabilities);
  };

  const handleDateChange = (event, index) => {
    const updatedLiabilities = [...liabilities];
    updatedLiabilities[index].date = event.target.value;
    setLiabilities(updatedLiabilities);
  };

  return (
    <div className="liabilities-container">
      <div className="liabilities-list">
        <h2>Liabilities</h2>
        {liabilities.map((liability, index) => (
          <LiabilityRow
            key={index}
            liability={liability}
            index={index}
            onDelete={deleteLiability}
            onNameChange={handleNameChange}
            onAmountChange={handleAmountChange}
            onDateChange={handleDateChange}
          />
        ))}
        <button onClick={addLiability}>Add Liability</button>
        <button onClick={saveLiabilities}>Save Liabilities</button>
        <LiabilitiesTotal liabilities={liabilities} />
      </div>
    </div>
  );
}

function LiabilityRow({ liability, index, onDelete, onNameChange, onAmountChange, onDateChange }) {
    return (
      <div className="liability-row">
        <div className="liability-details">
          <img 
            src={deleteIcon} 
            alt="Delete Liability" 
            className="delete-icon" 
            onClick={() => onDelete(index)} 
          />
          <input
            type="checkbox"
            className="liability-checkbox"
          />
          <div className="liability-info">
            <div className="liability-name-date-container">
              <input
                type="text"
                value={liability.name}
                onChange={(event) => onNameChange(event, index)}
                placeholder="Liability Name"
              />
              <input
                type="date"
                value={liability.date}
                onChange={(event) => onDateChange(event, index)}
              />
            </div>
          </div>
          <div className="liability-amount-wrapper">
            <input
              type="number"
              value={liability.amount}
              onChange={(event) => onAmountChange(event, index)}
              placeholder="Amount"
            />
          </div>
        </div>
      </div>
    );
  }
  

  function LiabilitiesTotal({ liabilities }) {
    const totalAmount = liabilities.reduce((acc, liability) => acc + liability.amount, 0);
  
    return (
      <div className="liabilities-total">
        <div className="total-label">Total:</div>
        <div className="total-amount">{totalAmount}</div>
      </div>
    );
  }
  
  export default Liabilities;
  