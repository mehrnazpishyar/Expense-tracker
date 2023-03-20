import React, { useState } from "react";
import TransactionForm from "./TransactionForm";

const OverViewComponent = ({ income, expense,addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <div className="topSection">
        <p> Balance : {income - expense}</p>
        <button onClick={() => setIsShow((prevState) => !prevState)}>
          {isShow ? "Cansel" : "Add"}
        </button>
      </div>
      {isShow && <TransactionForm addTransaction={addTransaction} />}
      <div className="resultSection">
        <div>Expense {expense}</div>
        <div>Income {income}</div>
      </div>
    </div>
  );
};

export default OverViewComponent;
