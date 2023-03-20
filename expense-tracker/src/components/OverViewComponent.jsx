import React, { useState } from "react";
import TransactionForm from "./TransactionForm";

const OverViewComponent = ({ income, expense, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <div className="topSection">
        <p> Balance : {income - expense}</p>
        <button
          className={`btn ${isShow && "cancel"}`}
          onClick={() => setIsShow((prevState) => !prevState)}
        >
          {isShow ? "Cansel" : "Add"}
        </button>
      </div>
      {isShow && <TransactionForm addTransaction={addTransaction} setIsShow={setIsShow} />}
      <div className="resultSection">
        <div className="expenseBox">
          Expense <span style={{ color: "red" }}>{expense} $</span>
        </div>
        <div className="expenseBox">
          Income <span style={{ color: "green" }}>{income} $</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default OverViewComponent;
