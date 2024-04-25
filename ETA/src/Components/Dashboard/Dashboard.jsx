import styles from './Dashboard.module.css';
import PlusButton from '../PlusButton/PlusButton';
import IncomeOrExpense from '../IncomeOrExpense/IncomeOrExpense';
import { useState } from 'react';
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

  const handleDeleteButton = (index) => {
    allExpenseItemsProp.forEach((item) => {
      if (allExpenseItemsProp.indexOf(item) === index) {
        const updatedArray = [...allExpenseItemsProp];
        updatedArray.splice(index, 1);
        setAllExpenseItemsProp(updatedArray);
        console.log(allExpenseItemsProp);
      }
    });
  };
  return (
    <>
      <div className={styles.dashboard}>
        <section className={styles.current_money_container}>
          <div className={styles.current_money_div}>
            <div className={styles.current_money_title}>Available money</div>
            <div className={styles.current_money_number}>
              {totalMoneyProp} NOK
            </div>
          </div>
        </section>

        <section className={styles.transaction_container}>
          <div className={styles.transaction_title}>Transactions</div>

          {/* This is where i render the expense items  */}
          <div className={styles.transactions_item_container}>
            {allExpenseItemsProp.length > 0 &&
              allExpenseItemsProp.map((item, index) => {
                return (
                  <div
                    key={item.title}
                    className={styles.transaction_item_wrapper}
                  >
                    <div className={styles.transaction_item}>
                      <div>
                        <div className={styles.transaction_item_title}>
                          {item.title}
                        </div>
                        <div className={styles.transaction_item_date}>
                          {item.date}
                        </div>
                      </div>
                      <div>{item.amount} Kroner</div>
                    </div>
                    <button
                      className={styles.transaction_item_delete_button}
                      onClick={(e) => handleDeleteButton(index)}
                    >
                      Delete
                    </button>
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
