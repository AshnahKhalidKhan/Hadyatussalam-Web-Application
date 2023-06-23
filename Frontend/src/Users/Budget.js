import React from 'react';
import Assets from './Assets';
import Liabilities from './Liabilities';
import Expenses from './Expenses';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import './Budget.css';

function Budget() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="Budgets-top">
        <h1>My Budget Tracker</h1>
      </div>

      <div className="budget">
        <Assets />
        <Liabilities />
        <Expenses />
      </div>
      <Footer />
    </>
  );
}

export default Budget;
