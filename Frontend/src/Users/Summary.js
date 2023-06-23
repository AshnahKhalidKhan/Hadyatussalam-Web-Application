// Summary.jsx
import React from 'react';

function Summary() {
    return (
        <div className="summary">
            <h2>Summary</h2>
            {/* These would typically be mapped from an array of selected items */}
            <SelectedExpense />
            <SelectedAsset />
            <SelectedLiability />
            {/* ... */}
            <Total />
        </div>
    );
}

function SelectedExpense() {
    return (
        <div className="selected-expense">
            {/* Replace with real data */}
            <div>Expense Name: Amount</div>
        </div>
    );
}

function SelectedAsset() {
    return (
        <div className="selected-asset">
            {/* Replace with real data */}
            <div>Asset Name: Amount</div>
        </div>
    );
}

function SelectedLiability() {
    return (
        <div className="selected-liability">
            {/* Replace with real data */}
            <div>Liability Name: Amount</div>
        </div>
    );
}

function Total() {
    return (
        <div className="total">
            {/* Replace with real total */}
            <div>Total: Amount</div>
        </div>
    );
}

export default Summary;
