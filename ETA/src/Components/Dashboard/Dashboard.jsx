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
  setAllExpenseItemsProp,
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

  const handleDeleteButton = (index) =>{
    allExpenseItemsProp.forEach((item)=> {
      if(allExpenseItemsProp.indexOf(item) === index) {
        const updatedArray = [...allExpenseItemsProp]
        updatedArray.splice(index, 1)
        setAllExpenseItemsProp(updatedArray)
        console.log(allExpenseItemsProp);
      }
    })

  }
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

          {/* This is where i render the expense items  */}
          <div className='transactions-item-container'>
            {allExpenseItemsProp.length > 0 &&
              allExpenseItemsProp.map((item, index) => {
                return (
                  <div key={item.title} className='transaction-item_wrapper'>
                    <div  className='transaction-item'>
                      <div className='transaction-item_title-date'>
                        <div className='transaction-item_title'>
                          {item.title}
                        </div>
                        <div className='transaction-item_date'>{item.date}</div>
                      </div>
                      <div className='transaction-item_amount'>
                        {item.amount} Kroner
                      </div>
                    </div>
                    <button className='transaction-item_delete-button' onClick={(e)=>handleDeleteButton(index)}>Delete</button>
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
