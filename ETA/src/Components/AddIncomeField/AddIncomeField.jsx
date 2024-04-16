import React, { useRef, useState } from 'react';

function AddIncomeField({
  addIncomeStatusProp,
  setTotalMoneyProp,
  toggleIncomeStatusProp,
  toggleIncomeOrExpenseProp,
}) {
  // const incomeInput = useRef(0);
  const [incomeInput, setIncomeInput] = useState('');
  const [incomeError, setIncomeError] = useState({});

  // const valiIncome = () => {
  //   let isValid = true;
  //   const clonedErrors = { ...error };

  //   if (!incomeInput.trim()) {
  //     clonedErrors.titleError = "Title is required";
  //     isValid = false;
  //   }

  //   setIncomeError(clonedErrors);
  //   return isValid;
  // };

  const handleIncome = () => {
    const inputValue = incomeInput.trim();
    if (inputValue) {
      setTotalMoneyProp((prev) => prev + Number(incomeInput));
      setIncomeInput('')
    }
  };
  return (
    <div
      className='addIncome-container'
      style={{ visibility: addIncomeStatusProp ? 'visible' : 'hidden' }}
    >
      <p>How much would you like to add?</p>
      <span>
        <input
          type='number'
          name='input_add-income'
          value={incomeInput}
          onChange={(e) => setIncomeInput(e.target.value)}
        />
        <p>NOK</p>
        <button
          onClick={() => {
            handleIncome();
            toggleIncomeStatusProp();
          }}
        >
          Add
        </button>
      </span>
    </div>
  );
}

export default AddIncomeField;
