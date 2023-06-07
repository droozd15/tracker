import React, {useState} from 'react';
import './ExpenseList.css';
import {Expense} from '../../../types/expense';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpenseItem from '../ExpenseItem';
import Card from '../../UI/Card';

const ExpenseList = (props: { expenses: Expense[] }) => {

  const [filteredYear, setFilteredYear] = useState<string>('2023');
  const onChangeFilter = (year: string) => {
    console.log(year);
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(item => item.date.getFullYear().toString() === filteredYear);

  return (
    <Card className="expense-list">
      <ExpenseFilter onChangeFilter={onChangeFilter} defaultYear={filteredYear}></ExpenseFilter>
      {filteredExpenses.length === 0 ?
        <p className='expense-list__empty'>No expense found</p>
        : filteredExpenses.map(item => <ExpenseItem key={item.id} {...item} />)}
    </Card>
  );
};


export default ExpenseList;
