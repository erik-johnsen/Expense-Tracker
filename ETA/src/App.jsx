import './App.css'
import './variables.css'
import './reset.css'

function App() {

  return (
    <>
    <div className='window-container'>
      <section className='current-money-container'>
        <div className='current-money_div'>
          <div className='current-money_title'>Available money</div>
          <div className='current-money_number'>2914 NOK</div>
        </div>
      </section>
      <section className='transaction-container'></section>
    </div>
      
    </>
  )
}

export default App
