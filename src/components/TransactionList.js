import React, { useContext } from "react";
import { ExpenseContext } from "./ExpenseProvider";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(ExpenseContext);

  return (
    <div className="mb-3">
      <h4 className="text-primary">Transactions History</h4>
      <hr />
      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))
      ) : (
        <div className="text-center text-danger">No Transactions Found</div>
      )}
    </div>
  );
};

export default TransactionList;
