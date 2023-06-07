import React, {useState} from 'react';
import './NewExpense.css';
import {Expense} from '../../types/expense';
import ExpenseForm from './ExpenseForm';

type Props = {
  onAddNewExpense: (expenseDate: Expense) => void;
}

const NewExpense = ({onAddNewExpense}: Props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseData = (expenseData: Expense) => {
    onAddNewExpense(expenseData);
  };

  const onClickAddExpense = () => setShowForm(true);
  const onClickCancel = () => setShowForm(false);

  return (
    <div className="new-expense">
      {showForm
        ? <ExpenseForm onSaveExpenseData={saveExpenseData} onClickCancel={onClickCancel}/>
        : <button onClick={onClickAddExpense}>Add new expense</button>
      }
    </div>
  );
};

export default NewExpense;
