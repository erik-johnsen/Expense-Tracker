import React from "react";

function AddIncomeField({addIncomeStatusProp}) {
  return (
    <div
      className="addIncome-container"
      style={{ visibility: addIncomeStatusProp ? "visible" : "hidden" }}
    >
      <p>How much would you like to add?</p>
      <span>
        <input type="number" name="input_add-income" />
        <p>NOK</p>
      </span>
    </div>
  );
}

export default AddIncomeField;
