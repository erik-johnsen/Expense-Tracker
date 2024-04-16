import './Dashboard.css';
import PlusButton from '../PlusButton/PlusButton';
import IncomeOrExpense from '../IncomeOrExpense/IncomeOrExpense';
import { useEffect, useState } from 'react';
import AddIncomeField from '../AddIncomeField/AddIncomeField';

export default function Dashboard({ toggleDashboardAddExpenseProp }) {
  const [totalMoney, setTotalMoney] = useState(0);

  // GET REZA TO FIX THIS
  // useEffect(() => {
  //   setTotalMoney(JSON.parse(localStorage.getItem('money')) || []);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('money', JSON.stringify(totalMoney));
  // }, [totalMoney]);

  // THIS IS TO TOGGLE "ADD INCOME" AND "ADD EXPENSE" POPUP
  const [showIncomeOrExpense, setShowIncomeOrExpense] = useState(false);
  const toggleIncomeOrExpense = () => {
    setShowIncomeOrExpense(!showIncomeOrExpense);
  };

  // THIS IS TO TOGGLE "ADD INCOME POPUP"
  const [addIncomeStatus, setAddIncomeStatus] = useState(false);
  const toggleIncomeStatus = () => {
    setAddIncomeStatus(!addIncomeStatus);
  };
  return (
    <>
      <div className='dashboard'>
        <section className='current-money-container'>
          <div className='current-money_div'>
            <div className='current-money_title'>Available money</div>
            <div className='current-money_number'>{totalMoney} NOK</div>
          </div>
        </section>

        <section className='transaction-container'>
          <div className='transaction-title'>Transactions</div>

          <div className='transactions-item-container'>
            {/* PLACEHOLDERS */}

            <div className='transaction-item'>
              <div className='transaction-item_title-date'>
                <div className='transaction-item_title'>Movie Ticket</div>
                <div className='transaction-item_date'>25 March 2024</div>
              </div>
              <div className='transaction-item_amount'>120 Kroner</div>
            </div>

            <div className='transaction-item'>
              <div className='transaction-item_title-date'>
                <div className='transaction-item_title'>Groceries</div>
                <div className='transaction-item_date'>20 March 2024</div>
              </div>
              <div className='transaction-item_amount'>219 Kroner</div>
            </div>
          </div>
        </section>
        <AddIncomeField
          addIncomeStatusProp={addIncomeStatus}
          setTotalMoneyProp={setTotalMoney}
          toggleIncomeStatusProp={toggleIncomeStatus}
          toggleIncomeOrExpenseProp={toggleIncomeOrExpense}
        />
        <IncomeOrExpense
          showIncomeOrExpenseProp={showIncomeOrExpense}
          toggleDashboardAddExpenseProp={toggleDashboardAddExpenseProp}
          toggleIncomeStatusProp={toggleIncomeStatus}
          toggleIncomeOrExpenseProp={toggleIncomeOrExpense}
        />
        <PlusButton toggleIncomeOrExpenseProp={toggleIncomeOrExpense} />
      </div>
    </>
  );
}
