import './IncomeOrExpense.css'

export default function IncomeOrExpense(){
	return(
		<>
		<div className="incomeOrExpense-container">
			<button className="incomeOrExpense-add-expense">Add Expense</button>
			<button className="incomeOrExpense-add-income">Add Income</button>
		</div>
		</>
	)
}