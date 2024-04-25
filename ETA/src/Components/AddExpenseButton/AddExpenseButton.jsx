import styles from './AddExpenseButton.module.css'

export default function AddExpenseButton({addingExpenseProp}) {


	return(
		<>
		<button className={styles.form_add_button} onClick={addingExpenseProp}>Add</button>
		</>
	)
}