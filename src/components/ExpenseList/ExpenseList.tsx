import React from "react";
import './ExpenseList.css';
import Expense from "../../types/expense";
import ExpenseItem from "../ExpenseItem";

function ExpenseList(props: { expenses: Expense[] }) {

  return (
    <div className="expense-list">
      {props.expenses.map(item => <ExpenseItem key={item.id} {...item} />)}
    </div>
  );
}

export default ExpenseList;
