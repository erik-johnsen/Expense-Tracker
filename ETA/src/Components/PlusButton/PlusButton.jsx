
import styles from './PlusButton.module.css'

export default function PlusButton({toggleIncomeOrExpenseProp}) {

	return (
		<>
		<button className={styles.plus_button} onClick={toggleIncomeOrExpenseProp}>+</button>
		
		</>
	)
}