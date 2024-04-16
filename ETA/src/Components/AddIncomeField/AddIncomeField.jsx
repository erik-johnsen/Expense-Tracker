import React, { useRef, useState } from 'react';

function AddIncomeField({
  addIncomeStatusProp,
  setTotalMoneyProp,
  toggleIncomeStatusProp,
}) {
  const [incomeInput, setIncomeInput] = useState('');

  const handleIncome = () => {
    if (incomeInput.trim()) {
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
