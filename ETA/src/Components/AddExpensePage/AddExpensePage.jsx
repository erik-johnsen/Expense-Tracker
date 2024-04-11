import { useRef, useState } from "react";
import AddExpenseButton from "../AddExpenseButton/AddExpenseButton";
import './AddExpensePage.css'

export default function AddExpensePage(){

	const expenseForm = useRef(null)


	const [error, setError] = useState({})
	const [allExpenseItems, setAllExpenseItems] = useState([])

	const valiForm = ()=>{
		const clonedErrors = {...error}
		clonedErrors.title = !expenseItem.title.trim() ? "Title is required!" : ""
		clonedErrors.amount = !expenseItem.amount.trim() ? "Amount is required!" : ""
		clonedErrors.date = !expenseItem.date.trim() ? "Date is required!" : ""
		clonedErrors.category = !expenseItem.category.trim() ? "Category is required!" : ""

		setError(clonedErrors)
	}

	const handleSubmit =(e)=> {
		e.preventDefault()
		const expenseFormData =  new FormData(expenseForm.current)

		const newUser = {}
		for(const [key, value] of expenseFormData.entries()){
			newUser[key] = value
		}
		setAllExpenseItems((prev)=> [...prev, newUser])
		console.log(allExpenseItems);
	}

	return(
		<>

		<section className="add-expense-page" >
			<h1>Add Expenses</h1>

			<form className="add-expense-form" onSubmit={handleSubmit} ref={expenseForm}>

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

				<select className="select-category" name="category">

					<option defaultValue={"Category"} disabled>Category</option>
					<option value="housing">Housing</option>
					<option value="grocery">Grocery</option>
					<option value="transportation">Transportation</option>
					<option value="clothes">Clothes</option>
					<option value="other">Other</option>
				</select>

				<AddExpenseButton />
			</form>
		</section>
		</>
	)
}