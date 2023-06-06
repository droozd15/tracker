import './ExpenseItem.css';
import {Expense} from '../../../types/expense';
import ExpenseDate from "../ExpenseDate";
import Card from "../../UI/Card";
import {useState} from "react";

const ExpenseItem = (props: Expense) => {

  const [title, setTitle] = useState<string>(props.title);
  const clickHandler = () => {
    setTitle('Updated');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Update Title</button>
    </Card>
  );
}


export default ExpenseItem;
