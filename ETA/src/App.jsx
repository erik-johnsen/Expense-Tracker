import './App.css'
import './variables.css'
import './reset.css'
import AddExpensePage from './Components/AddExpensePage/AddExpensePage'
import Dashboard from './Components/Dashboard/Dashboard'
import { useState } from 'react'

function App() {
  const [dashboardAddExpenseStatus, setDashboardAddExpenseStatus] = useState(false)
  const toggleDashboardAddExpense = ()=> {
    setDashboardAddExpenseStatus(!dashboardAddExpenseStatus)
  }
  const [listFromExpensePage, setListFromExpensePage] = useState("")
  const handleExpenseItems =(data)=> {
    setListFromExpensePage(data)
  }
  return (
    <>
    <div className='window-container'>
      <div style={{display: dashboardAddExpenseStatus ? 'none' : 'block'}}>
        <Dashboard toggleDashboardAddExpenseProp={toggleDashboardAddExpense}/>
      </div>
      
      <div style={{display: dashboardAddExpenseStatus ? 'block' : 'none'}}>
        <AddExpensePage toggleDashboardAddExpenseProp={toggleDashboardAddExpense} handleExpenseItemsProp={handleExpenseItems}/>
      </div>
      
    </div>
    </>
  )
}

export default App
