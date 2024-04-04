import './App.css'
import './variables.css'
import './reset.css'
import PlusButton from './Components/PlusButton/PlusButton'
import AddExpensePage from './Components/AddExpensePage/AddExpensePage'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {

  const showIncomeOrExpense = ()=> {
    
  }
  return (
    <>
    <div className='window-container'>
      <Dashboard />
      
      <AddExpensePage />
    </div>
    </>
  )
}

export default App
