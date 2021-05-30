import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <div
      className={
        transaction.amount > 0 ? "alert alert-success" : "alert alert-danger"
      }
    >
      {transaction.text}
      <span className="float-right">{transaction.amount}</span>
    </div>
  );
};

export default Transaction;
