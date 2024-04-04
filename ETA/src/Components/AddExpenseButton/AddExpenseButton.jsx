import './AddExpenseButton.css'

export default function AddExpenseButton({addingExpenseProp}) {


	return(
		<>
		<button className="form-add_button" onClick={addingExpenseProp}>Add</button>
		</>
	)
}