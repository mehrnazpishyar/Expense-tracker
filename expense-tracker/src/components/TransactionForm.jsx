import React, { useState } from "react";

const TransactionForm = () => {
  const [formValues, setFormValues] = useState({
    type: "Expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({...formValues, [e.target.name]:e.target.value})
  }

  return (
    <form>
      <input type="text" name="desc" onChange={changeHandler} />
      <input type="number" name="amount" onChange={changeHandler} />
      <div>
        <input
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
        />
        <label>Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
        />
        <label>Income</label>
      </div>
      <button>Add transaction</button>
    </form>
  );
};

export default TransactionForm;
