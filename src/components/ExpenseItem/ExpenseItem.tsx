import './ExpenseItem.css';
import Expense from "../../types/expense";
import ExpenseDate from "../ExpenseDate";
import Card from "../Card";

function ExpenseItem(props: Expense) {

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
