import React, { createContext, useReducer, useEffect } from "react";

export const ExpenseContext = createContext();
export const ACT = {
  ADD: "Add Expense",
};

const appReducer = (state, action) => {
  switch (action.type) {
    case ACT.ADD:
      const newstate = [action.payload, ...state];
      localStorage.setItem("TRNX_LIST", JSON.stringify(newstate));
      return newstate;
    default:
      return state;
  }
};

const getInitialTrnx = () => {
  let initial = localStorage.getItem("TRNX_LIST");
  if (initial) return JSON.parse(initial);
  else return [];
};

const ExpenseProvider = ({ children }) => {
  const [transactions, dispatch] = useReducer(appReducer, getInitialTrnx());

  return (
    <ExpenseContext.Provider value={{ transactions, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
