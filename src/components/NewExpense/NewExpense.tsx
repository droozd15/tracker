import React from 'react';
import './NewExpense.css'
import {Expense} from '../../types/expense';
import ExpenseForm from './ExpenseForm';

type Props = {
  onAddNewExpense: (expenseDate: Expense) => void;
}

const NewExpense = ({onAddNewExpense}: Props) => {
  const saveExpenseData = (expenseData: Expense) => {
    console.log(expenseData);
    onAddNewExpense(expenseData);
  }

  return <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseData}/>
  </div>
}

export default NewExpense;
