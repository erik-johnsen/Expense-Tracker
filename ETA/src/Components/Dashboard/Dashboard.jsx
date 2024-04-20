import './Dashboard.css';
import PlusButton from '../PlusButton/PlusButton';
import IncomeOrExpense from '../IncomeOrExpense/IncomeOrExpense';
import { useEffect, useMemo, useState } from 'react';
import AddIncomeField from '../AddIncomeField/AddIncomeField';

export default function Dashboard({
  toggleDashboardAddExpenseProp,
  totalMoneyProp,
  setTotalMoneyProp,
  allExpenseItemsProp,
}) {
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
            <div className='current-money_number'>{totalMoneyProp} NOK</div>
          </div>
        </section>

        <section className='transaction-container'>
          <div className='transaction-title'>Transactions</div>

          <div className='transactions-item-container'>
              {/* FIX THIS  */}
            {allExpenseItemsProp.length > 0 &&
              allExpenseItemsProp.map((item) => {
                return (
                  <div key={Date.now()} className='transaction-item' >
                    <div className='transaction-item_title-date'>
                      <div className='transaction-item_title'>{item.title}</div>
                      <div className='transaction-item_date'>{item.date}</div>
                    </div>
                    <div className='transaction-item_amount'>{item.amount} Kroner</div>
                  </div>
                );
              })}
          </div>
        </section>
        <AddIncomeField
          addIncomeStatusProp={addIncomeStatus}
          setTotalMoneyProp={setTotalMoneyProp}
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
