import React, { useContext } from "react";
import { ExpenseContext } from "./ExpenseProvider";

const IncomeExpense = () => {
  const { transactions } = useContext(ExpenseContext);

  const getIncome = () => {
    const incomelist = transactions.filter((trn) => trn.amount > 0);
    return incomelist
      .map((item) => item.amount)
      .reduce((prev, curr) => prev + curr, 0);
  };

  const getExpense = () => {
    const incomelist = transactions.filter((trn) => trn.amount < 0);
    return incomelist
      .map((item) => item.amount)
      .reduce((prev, curr) => prev + curr, 0);
  };

  return (
    <div className="shadow p-2 mb-3">
      <div className="row text-center">
        <div className="col-6">
          <h4>Income</h4>
          <h4>{getIncome()}</h4>
        </div>
        <div className="col-6">
          <h4>Expense</h4>
          <h4>{getExpense()}</h4>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
