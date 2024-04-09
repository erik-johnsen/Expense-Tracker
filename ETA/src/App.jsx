import './App.css'
import './variables.css'
import './reset.css'
import AddExpensePage from './Components/AddExpensePage/AddExpensePage'
import Dashboard from './Components/Dashboard/Dashboard'
import { useRef } from 'react'

function App() {
  const IncomeOrExpenseContainer = useRef()
  const showIncomeOrExpense = ()=> {
    IncomeOrExpenseContainer.current.style.display = "flex"
  }
  return (
    <>
    <div className='window-container'>
      <Dashboard />
      
      <AddExpensePage showIncomeOrExpenseProp={showIncomeOrExpense}/>
    </div>
    </>
  )
}

export default App
