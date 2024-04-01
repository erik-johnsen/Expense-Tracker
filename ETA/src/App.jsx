import './App.css'
import './variables.css'
import './reset.css'
import PlusButton from './Components/PlusButton/PlusButton'

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

      <section className='transaction-container'>
        <div className='transaction-title'>Transactions</div>

        <div className='transactions-item-container'>
          {/* PLACEHOLDERS */}

          <div className='transaction-item'>
            <div className='transaction-item_title-date'>
              <div className='transaction-item_title'>Movie Ticket</div>
              <div className='transaction-item_date'>25 March 2024</div>
            </div>
            <div className='transaction-item_amount'>120 Kroner</div>
          </div>

          <div className='transaction-item'>
            <div className='transaction-item_title-date'>
              <div className='transaction-item_title'>Groceries</div>
              <div className='transaction-item_date'>20 March 2024</div>
            </div>
            <div className='transaction-item_amount'>219 Kroner</div>
          </div>
        </div>
      </section>

      <PlusButton />
    </div>
      
    </>
  )
}

export default App
