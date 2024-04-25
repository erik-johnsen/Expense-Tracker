import './variables.css';
import './reset.css';
import AddExpensePage from './Components/AddExpensePage/AddExpensePage';
import Dashboard from './Components/Dashboard/Dashboard';
import { useState, useEffect } from 'react';
import styles from './App.module.css';

function App() {
  const [allExpenseItems, setAllExpenseItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );
  const [totalMoney, setTotalMoney] = useState(
    JSON.parse(localStorage.getItem('money')) || []
  );

  useEffect(() => {
    localStorage.setItem('money', JSON.stringify(totalMoney));
  }, [totalMoney]);

  const [dashboardAddExpenseStatus, setDashboardAddExpenseStatus] =
    useState(false);
  const toggleDashboardAddExpense = () => {
    setDashboardAddExpenseStatus(!dashboardAddExpenseStatus);
  };

  return (
    <>
      <div className={styles.window_container}>
        <div style={{ display: dashboardAddExpenseStatus ? 'none' : 'block' }}>
          <Dashboard
            toggleDashboardAddExpenseProp={toggleDashboardAddExpense}
            totalMoneyProp={totalMoney}
            setTotalMoneyProp={setTotalMoney}
            allExpenseItemsProp={allExpenseItems}
            setAllExpenseItemsProp={setAllExpenseItems}
          />
        </div>

        <div style={{ display: dashboardAddExpenseStatus ? 'block' : 'none' }}>
          <AddExpensePage
            toggleDashboardAddExpenseProp={toggleDashboardAddExpense}
            setTotalMoneyProp={setTotalMoney}
            allExpenseItemsProp={allExpenseItems}
            setAllExpenseItemsProp={setAllExpenseItems}
          />
        </div>
      </div>
    </>
  );
}

export default App;
