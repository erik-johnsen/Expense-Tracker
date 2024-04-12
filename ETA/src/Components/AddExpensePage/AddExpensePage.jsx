import { useRef, useState } from "react";
import AddExpenseButton from "../AddExpenseButton/AddExpenseButton";
import "./AddExpensePage.css";

export default function AddExpensePage() {
  const expenseForm = useRef(null);

  const [error, setError] = useState({});
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    date: "",
    category: "",
  });
  const [allExpenseItems, setAllExpenseItems] = useState([]);

  const valiForm = () => {
    let isValid = true;
    const clonedErrors = { ...error };

    if (!expense.title.trim()) {
      clonedErrors.titleError = "Title is required";
      isValid = false;
    }
    if (!expense.amount.trim()) {
      clonedErrors.amountError = "Amount is required";
      isValid = false;
    }
    if (!expense.date.trim()) {
      clonedErrors.dateError = "Date is required";
      isValid = false;
    }
    if (!expense.category.trim()) {
      clonedErrors.categoryError = "Category is required";
      isValid = false;
    }
    setError(clonedErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setError((prev) => ({ ...prev, [`${e.target.name}Error`]: "" }));
    const expenseFormData = new FormData(expenseForm.current);
    const newExpense = Object.fromEntries(expenseFormData.entries());
    setExpense(newExpense);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (valiForm()) {
      setAllExpenseItems((prev) => [...prev, expense]);
      expenseForm.current.reset();
    }
  };

  console.log(allExpenseItems);

  return (
    <>
      <section className="add-expense-page">
        <h1>Add Expenses</h1>

        <form
          className="add-expense-form"
          onSubmit={handleSubmit}
          ref={expenseForm}
        >
          <div className="form-input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="form-input_title"
              onChange={handleChange}
            />
            <p>{error.titleError}</p>
          </div>
          <div className="form-input">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              name="amount"
              className="form-input_amount"
              onChange={handleChange}
            />
            <p>{error.amountError}</p>
          </div>
          <span className="form-input_date-container">
            <span className="form-input">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                className="form-input_date"
                placeholder=""
                onChange={handleChange}
              />
            </span>

            <span className="form-input">
              <label htmlFor="date-today">Today?</label>
              <input
                type="checkbox"
                name="date-today"
                className="form-input_date-today"
              />
            </span>
            <p>{error.dateError}</p>
          </span>
          <div>
            <select
              className="select-category"
              name="category"
              onChange={handleChange}
			  value={"category"}
            >
              <option value={"category"} disabled>Category</option>
              <option value="housing">Housing</option>
              <option value="grocery">Grocery</option>
              <option value="transportation">Transportation</option>
              <option value="clothes">Clothes</option>
              <option value="other">Other</option>
            </select>
            <p>{error.categoryError}</p>
          </div>

          <AddExpenseButton />
        </form>
      </section>
    </>
  );
}
