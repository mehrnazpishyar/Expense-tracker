import React, { useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transaction, setTransaction] = useState([]);
  return (
    <section className="container">
      <OverViewComponent income={income} expense={expense} />
      <TransActionComponent transaction={transaction} />
    </section>
  );
};

export default ExpenseApp;
