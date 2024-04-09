import './App.css'
import './variables.css'
import './reset.css'
import AddExpensePage from './Components/AddExpensePage/AddExpensePage'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  return (
    <>
    <div className='window-container'>
      <Dashboard />
      
      <AddExpensePage/>
    </div>
    </>
  )
}

export default App
