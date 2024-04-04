import './PlusButton.css'

export default function PlusButton({showIncomeOrExpenseProp}) {

	return (
		<>
		<button className="plus-button" onClick={showIncomeOrExpenseProp}>+</button>
		
		</>
	)
}