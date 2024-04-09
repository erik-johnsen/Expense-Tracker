import "./IncomeOrExpense.css";

export default function IncomeOrExpense({ showIncomeOrExpenseProp }) {
  return (
    <>
        <div className="incomeOrExpense-container" style={{visibility: showIncomeOrExpenseProp ? 'visible' : 'hidden'}}>
          <button className="incomeOrExpense-add-expense">Add Expense</button>
          <button className="incomeOrExpense-add-income">Add Income</button>
        </div>
    </>
  );
}
