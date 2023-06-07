import React, {ChangeEvent, FormEvent, useState} from 'react';
import './ExpenseForm.css'
import {Expense, ExpenseFormValue} from '../../../types/expense';

type Props = {
  onSaveExpenseData: (expenseDate: Expense) => void;
  onClickCancel: () => void;
}

const ExpenseForm = ({onSaveExpenseData, onClickCancel}: Props) => {
  const [userInput, setUserInput] =
    useState<ExpenseFormValue>({title: '', amount: '', date: ''});

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => ({...prevState, title: event.target.value}))
  }
  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => ({...prevState, amount: event.target.value}))
  }
  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prevState) => ({...prevState, date: event.target.value}))
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const expenseDate: Expense = {
      ...userInput,
      id: Math.random().toString(),
      amount: Number(userInput.amount),
      date: new Date (userInput.date)
    }

    onSaveExpenseData(expenseDate);
    setUserInput({title: '', amount: '', date: ''});
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.title} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={userInput.amount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2024-12-31" value={userInput.date}
                 onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={onClickCancel}>Cancel</button>
      </div>
    </form>
  )
}

export default ExpenseForm;
