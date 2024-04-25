import styles from './IncomeOrExpense.module.css'

export default function IncomeOrExpense({
  showIncomeOrExpenseProp,
  toggleDashboardAddExpenseProp,
  toggleIncomeStatusProp,
  toggleIncomeOrExpenseProp
}) {
  
  return (
    <>
      <div
        className={styles.incomeOrExpense_container}
        style={{ visibility: showIncomeOrExpenseProp ? "visible" : "hidden" }}
      >
        <button
          className={styles.incomeOrExpense_add_expense}
          onClick={()=> {toggleDashboardAddExpenseProp(); toggleIncomeOrExpenseProp();}}
        >
          Add Expense
        </button>
        <button
          className={styles.incomeOrExpense_add_income}
          onClick={()=> {toggleIncomeStatusProp(); toggleIncomeOrExpenseProp();}}
        >
          Add Income
        </button>

      </div>
    </>
  );
}
