import { useEffect, useRef, useState } from 'react';
import AddExpenseButton from '../AddExpenseButton/AddExpenseButton';
import './AddExpensePage.css';

export default function AddExpensePage({
  toggleDashboardAddExpenseProp,
  setTotalMoneyProp,
  allExpenseItemsProp,
  setAllExpenseItemsProp,
}) {
  useEffect(() => {
    setAllExpenseItemsProp(JSON.parse(localStorage.getItem('items')) || []);
  }, []);

  const expenseForm = useRef(null);
  const [statusCheckbox, setStatusCheckbox] = useState(false);

  const [error, setError] = useState({});
  const [expense, setExpense] = useState({
    id: Date.now(),
    title: '',
    amount: '',
    date: '',
    category: '',
  });

  const valiForm = () => {
    let isValid = true;
    const clonedErrors = { ...error };

    if (!expense.title.trim()) {
      clonedErrors.titleError = 'Title is required';
      isValid = false;
    }
    if (!expense.amount.trim()) {
      clonedErrors.amountError = 'Amount is required';
      isValid = false;
    }
    // if (!expense.date.trim() || statusCheckbox) {
    //   clonedErrors.dateError = 'Date is required';
    //   isValid = false;
    // }
    if (expense.category === undefined) {
      clonedErrors.categoryError = 'Category is required';
      isValid = false;
    }
    setError(clonedErrors);
    return isValid;
  };
  const handleChange = (e) => {
    setError((prev) => ({ ...prev, [`${e.target.name}Error`]: '' }));
    const expenseFormData = new FormData(expenseForm.current);
    const newExpense = Object.fromEntries(expenseFormData.entries());
    setExpense(newExpense);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (valiForm()) {
      if (expense.dateToday === 'on') {
        console.log("test");
        handleDate()
      }
      setAllExpenseItemsProp((prev) => [...prev, expense]);
      setTotalMoneyProp((prev) => prev - expense.amount);
      toggleDashboardAddExpenseProp();
      expenseForm.current.reset();
    }
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(allExpenseItemsProp));
  }, [allExpenseItemsProp]);

  const checkboxDateToday = () => {
    setStatusCheckbox(!statusCheckbox);
  };

  const handleDate = ()=> {
    const today = new Date();
      const day =
        today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();

      const month =
        today.getMonth() + 1 < 10
          ? `0${today.getMonth() + 1}`
          : today.getMonth() + 1;
      const year = today.getFullYear();
      setExpense((prev) => ({ ...prev, date: `${day}-${month}-${year}` }));
  }

  return (
    <>
      <section className='add-expense-page'>
        <h1>Add Expenses</h1>

        <form
          className='add-expense-form'
          onSubmit={handleSubmit}
          ref={expenseForm}
        >
          <div className='form-input'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              className='form-input_title'
              onChange={handleChange}
            />
            <p>{error.titleError}</p>
          </div>
          <div className='form-input'>
            <label htmlFor='amount'>Amount</label>
            <input
              type='number'
              name='amount'
              className='form-input_amount'
              onChange={handleChange}
            />
            <p>{error.amountError}</p>
          </div>
          <span className='form-input_date-container'>
            <span className='form-input'>
              <label htmlFor='date'>Date</label>
              <input
                type='date'
                name='date'
                className='form-input_date'
                placeholder=''
                onChange={handleChange}
              />
            </span>

            <span className='form-input'>
              <label htmlFor='date-today'>Today?</label>
              <input
                type='checkbox'
                name='dateToday'
                className='form-input_date-today'
                onChange={checkboxDateToday}
              />
            </span>
            <p>{error.dateError}</p>
          </span>
          <div>
            <select
              className='select-category'
              name='category'
              onChange={handleChange}
              value={'category'}
            >
              <option value={'category'} disabled>
                Category
              </option>
              <option value='housing'>Housing</option>
              <option value='grocery'>Grocery</option>
              <option value='transportation'>Transportation</option>
              <option value='clothes'>Clothes</option>
              <option value='other'>Other</option>
            </select>
            <p>{error.categoryError}</p>
          </div>

          <AddExpenseButton />
        </form>
      </section>
    </>
  );
}
