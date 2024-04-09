import './PlusButton.css'

export default function PlusButton({toggleIncomeOrExpenseProp}) {

	return (
		<>
		<button className="plus-button" onClick={toggleIncomeOrExpenseProp}>+</button>
		
		</>
	)
}