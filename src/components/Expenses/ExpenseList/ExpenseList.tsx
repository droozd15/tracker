import React from "react";
import './ExpenseList.css';
import {Expense} from '../../../types/expense';
import ExpenseItem from "../ExpenseItem";
import Card from "../../UI/Card";

const ExpenseList = (props: { expenses: Expense[] }) => (
  <Card className="expense-list">
    {props.expenses.map(item => <ExpenseItem key={item.id} {...item} />)}
  </Card>
);


export default ExpenseList;
