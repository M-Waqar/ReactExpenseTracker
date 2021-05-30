import React, { useContext } from "react";
import { ExpenseContext } from "./ExpenseProvider";

const Balance = () => {
  const { transactions } = useContext(ExpenseContext);
  console.log(transactions);
  return (
    <div className="mb-3">
      <h1>Your Balance</h1>
      {transactions.length > 0 ? (
        <h4>
          $
          {transactions
            .map((item) => item.amount)
            .reduce((prev, curr) => prev + curr, 0)}
        </h4>
      ) : (
        <h4>$ 0.00</h4>
      )}
    </div>
  );
};

export default Balance;
