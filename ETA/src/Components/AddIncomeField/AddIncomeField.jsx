import React, { useRef, useState } from 'react';
import styles from './AddIncomeField.module.css'

function AddIncomeField({
  addIncomeStatusProp,
  setTotalMoneyProp,
  toggleIncomeStatusProp,
  handleIsAddedSuccessfullyProp
}) {
  const [incomeInput, setIncomeInput] = useState('');

  const handleIncome = () => {
    if (incomeInput.trim()) {
      setTotalMoneyProp((prev) => Number(prev) + Number(incomeInput));
      setIncomeInput('')
      handleIsAddedSuccessfullyProp()
    }
  };
  return (
    <div
      className={styles.addIncome_container}
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
