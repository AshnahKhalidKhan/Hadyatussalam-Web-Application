import React, { useState, useEffect } from 'react';
import './Assets.css';
import deleteIcon from './delete.svg';

function Assets() {
  const [assets, setAssets] = useState([
    { name: '', amount: 0, date: '' },
  ]);

  // Load saved data from local storage when component mounts
  useEffect(() => {
    const savedAssets = localStorage.getItem('assets');
    if (savedAssets) {
      setAssets(JSON.parse(savedAssets));
    }
  }, []);

  const saveAssets = () => {
    localStorage.setItem('assets', JSON.stringify(assets));
  };

  const addAsset = () => {
    setAssets([...assets, { name: '', amount: 0, date: '' }]);
  };

  const deleteAsset = (index) => {
    const updatedAssets = assets.filter((_, i) => i !== index);
    setAssets(updatedAssets);
  };

  const handleNameChange = (event, index) => {
    const updatedAssets = [...assets];
    updatedAssets[index].name = event.target.value;
    setAssets(updatedAssets);
  };

  const handleAmountChange = (event, index) => {
    const updatedAssets = [...assets];
    updatedAssets[index].amount = parseFloat(event.target.value);
    setAssets(updatedAssets);
  };

  const handleDateChange = (event, index) => {
    const updatedAssets = [...assets];
    updatedAssets[index].date = event.target.value;
    setAssets(updatedAssets);
  };

  return (
    <div className="assets-container">
      <div className="assets-list">
        <h2>Assets</h2>
        {assets.map((asset, index) => (
          <AssetRow
            key={index}
            asset={asset}
            index={index}
            onDelete={deleteAsset}
            onNameChange={handleNameChange}
            onAmountChange={handleAmountChange}
            onDateChange={handleDateChange}
          />
        ))}
        <button onClick={addAsset}>Add Asset</button>
        <button onClick={saveAssets}>Save Assets</button>
        <AssetsTotal assets={assets} />
      </div>
    </div>
  );
}


function AssetRow({ asset, index, onDelete, onNameChange, onAmountChange, onDateChange }) {
    return (
      <div className="asset-row">
        <div className="asset-details">
            <img 
              src={deleteIcon} 
              alt="Delete Asset" 
              className="delete-icon" 
              onClick={() => onDelete(index)} 
            />
          <input
            type="checkbox"
            className="asset-checkbox"
          />
          <div className="asset-info">
            <div className="asset-name-date-container">
              <input
                type="text"
                value={asset.name}
                onChange={(event) => onNameChange(event, index)}
                placeholder="Asset Name"
              />
              <input
                type="date"
                value={asset.date}
                onChange={(event) => onDateChange(event, index)}
              />
            </div>
          </div>
          <div className="asset-amount-wrapper">
            <input
              type="number"
              value={asset.amount}
              onChange={(event) => onAmountChange(event, index)}
              placeholder="Amount"
            />
          </div>
        </div>
      </div>
    );
  }
  

function AssetsTotal({ assets }) {
  const totalAmount = assets.reduce((acc, asset) => acc + asset.amount, 0);

  return (
    <div className="assets-total">
      <div className="total-label">Total:</div>
      <div className="total-amount">{totalAmount}</div>
    </div>
  );
}

export default Assets;
