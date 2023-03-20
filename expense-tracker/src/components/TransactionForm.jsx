import React, { useState } from "react";

const TransactionForm = ({addTransaction}) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({...formValues, [e.target.name]:e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValues)
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" name="desc" onChange={changeHandler} value={formValues.desc}/>
      <input type="number" name="amount" onChange={changeHandler}  value={formValues.amount}/>
      <div>
        <input
          type="radio"
          checked={formValues.type === "expense"}
          value="expense"
          name="type"
          onChange={changeHandler}
        />
        <label>Expense</label>
        <input
          type="radio"
          checked={formValues.type === "income"}
          value="income"
          name="type"
          onChange={changeHandler}
        />
        <label>Income</label>
      </div>
      <button type="submit">Add transaction</button>
    </form>
  );
};

export default TransactionForm;
