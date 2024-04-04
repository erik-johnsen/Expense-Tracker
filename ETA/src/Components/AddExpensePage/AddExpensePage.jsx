import AddExpenseButton from "../AddExpenseButton/AddExpenseButton";
import './AddExpensePage.css'

export default function AddExpensePage(){

	const addingExpense= ()=> {

	}

	return(
		<>

		<section className="add-expense-page">
			<h1>Add Expenses</h1>

			<form className="add-expense-form">

				<div className="form-input">
					<label htmlFor="title">Title</label>
					<input type="text" name="title" className="form-input_title"/>
				</div>
				<div className="form-input">
					<label htmlFor="amount">Amount</label>
					<input type="number" name="amount" className="form-input_amount"/>
				</div>
				<span className="form-input_date-container">
					<span className="form-input">
						<label htmlFor="date">Date</label>
						<input type="date" name="date" className="form-input_date" placeholder=""/>
					</span>
					
					<span className="form-input">
						<label htmlFor="date-today">Today?</label>
						<input type="checkbox" name="date-today" className="form-input_date-today"/>	
					</span>
				</span>

				<select className="select-category">

					<option selected disabled>Category</option>
					<option value="housing">Housing</option>
					<option value="grocery">Grocery</option>
					<option value="transportation">Transportation</option>
					<option value="clothes">Clothes</option>
					<option value="other">Other</option>
				</select>

				<AddExpenseButton addingExpenseProp={addingExpense}/>
			</form>
		</section>
		</>
	)
}