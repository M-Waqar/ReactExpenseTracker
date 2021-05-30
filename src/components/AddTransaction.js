import React, { useState, useContext } from "react";
import { ExpenseContext, ACT } from "./ExpenseProvider";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { dispatch } = useContext(ExpenseContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: ACT.ADD,
      payload: {
        id: Math.random() * 1000,
        text,
        amount: +amount,
      },
    });
    setText("");
    setAmount("");
  };

  return (
    <div className="mb-2 mt-2">
      <h4 className="text-primary">Add Transaction</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary btn-block">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
