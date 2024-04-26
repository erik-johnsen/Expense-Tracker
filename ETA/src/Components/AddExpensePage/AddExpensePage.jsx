import { useEffect, useRef, useState } from 'react';
import AddExpenseButton from '../AddExpenseButton/AddExpenseButton';
import styles from './AddExpensePage.module.css';

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
  const dateInputRef = useRef(null);

  const [error, setError] = useState({});
  const [expense, setExpense] = useState({
    id: '',
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
      expense.id = crypto.randomUUID()
      setAllExpenseItemsProp((prev) => [...prev, expense]);
      setTotalMoneyProp((prev) => prev - expense.amount);
      toggleDashboardAddExpenseProp();
      expenseForm.current.reset();
    }
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(allExpenseItemsProp));
  }, [allExpenseItemsProp]);

  const checkboxDateToday = (event) => {
    const currentDate = new Date();
    if (event.target.checked) {
      const formattedDate = currentDate.toISOString().slice(0, 10);
      dateInputRef.current.value = formattedDate;
      setExpense((prevExpense) => ({ ...prevExpense, date: formattedDate }));
    } else {
      dateInputRef.current.value = "";
      setExpense((prevExpense) => ({ ...prevExpense, date: "" }));
    }
  };


  return (
    <>
      <section className={styles.add_expense_page}>
        <h1>Add Expenses</h1>

        <form
          className={styles.add_expense_form}
          onSubmit={handleSubmit}
          ref={expenseForm}
        >
          <div className={styles.form_input}>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              className='form-input_title'
              onChange={handleChange}
            />
            <p>{error.titleError}</p>
          </div>
          <div className={styles.form_input}>
            <label htmlFor='amount'>Amount</label>
            <input
              type='number'
              name='amount'
              className='form-input_amount'
              onChange={handleChange}
            />
            <p>{error.amountError}</p>
          </div>
          <span className={styles.form_input_date_container}>
            <span className={styles.form_input}>
              <label htmlFor='date'>Date</label>
              <input
                type='date'
                name='date'
                className={styles.form_input_date}
                placeholder=''
                onChange={handleChange}
                ref={dateInputRef}
              />
            </span>

            <span className={styles.form_input}>
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
              className={styles.select_category}
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
