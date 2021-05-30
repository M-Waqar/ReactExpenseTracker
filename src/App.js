import React from "react";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import ExpenseProvider from "./components/ExpenseProvider";
import Header from "./components/Header";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="container">
      <div className="card w-75 p-3">
        <ExpenseProvider>
          <Header />
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </ExpenseProvider>
      </div>
    </div>
  );
}

export default App;
