import './ExpenseItem.css';
import Expense from "../../types/expense";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

function ExpenseItem(props: Expense) {

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
